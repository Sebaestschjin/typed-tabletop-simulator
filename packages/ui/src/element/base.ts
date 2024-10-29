import { ArrayOrSingle } from "../core";
import { ConvertResult, Converters, KeyValuePair, convert } from "./convert";

export type Tag = keyof JSX.IntrinsicElements;

export type Vector2Prop = [number, number];
export type VectorProp = VectorShape;
export type ScaleProp = VectorShape | number;
export type OffsetProp = Vector2Prop | Alignment | [number, number, Alignment];

export type ElementProps<T, A, C = ArrayOrSingle<JSX.Element | JSX.Element[]>> = A & {
  ref?: Ref<T>;
} & {
  children?: C;
};

export interface Ref<T> {
  current?: T;
}

export type HandlerFunction = (this: void, player: Player, value: any) => unknown;

export interface BaseProps extends UIElementProps {
  visibleTo?: (PlayerColor | PlayerTeam | "Host" | "Admin")[];
  position?: VectorProp;
  rotation?: VectorProp;
  scale?: ScaleProp;
}

export interface UIElementProps {
  active?: boolean;
  offset?: OffsetProp;
  width?: number | `${number}%`;
  height?: number | `${number}%`;
}

export interface TextLikeProps {
  text?: string;
  textSize?: number;
  font?: string;
  alignment?: Alignment;
}

export interface ColorLikeProps {
  color?: string;
}

let generatedIds = 0;

const baseConverters: Converters = {
  textSize: convert.rename("fontSize"),
  offset: convert.offset,
  position: convert.vector3("position"),
  rotation: convert.vector3("rotation"),
  scale: convert.scale,
  visibleTo: convert.concat("visibility"),
};

export abstract class BaseUIElement<Props extends BaseProps> {
  protected id?: string;

  private tag: Tag;
  private props: Props;
  private parent?: TTSObject;
  private children?: JSX.Element[];
  private converters: Converters;
  private handlers = new LuaMap<UIAttributeName, HandlerFunction>();

  constructor(
    tag: Tag,
    props: Props,
    options?: {
      children?: JSX.Element[];
      converters?: Converters;
    }
  ) {
    options ??= {};
    options.converters ??= {};

    this.tag = tag;
    this.props = props;
    this.children = options.children;
    this.converters = { ...baseConverters, ...options.converters };
  }

  setActive = (active: boolean) => {
    this.setAttribute("active", active);
  };

  setOffset = (offset: OffsetProp) => {
    this.setAttribute("offset", offset);
  };

  setAttribute = <K extends keyof Props>(attribute: K, value: Props[K]) => {
    if (!this.id) {
      log("Expected an ID for the UI element, but didn't find any");
      return;
    }

    this.props[attribute] = value;
    if (this.parent) {
      const converted = this.convertProp(attribute, value);
      if (this.isSingleResult(converted)) {
        this.parent.UI.setAttribute(this.id, converted[0], converted[1]);
      } else {
        for (const [key, value] of converted) {
          this.parent.UI.setAttribute(this.id, key, value);
        }
      }
    }
  };

  protected setHandler = (name: UIAttributeName, handler?: HandlerFunction) => {
    if (handler) {
      this.handlers.set(name, handler);
    }
  };

  protected convertProp(name: keyof Props, value: any): ConvertResult {
    if (this.handlers.get(name as UIAttributeName)) {
      return convert.handlerFunction(name as UIAttributeName)(value);
    }

    const converter = this.converters[name as string];
    return converter !== undefined ? converter(value) : [name as UIAttributeName, value];
  }

  private convertProps = () => {
    const props: any = {};

    const addProp = ([name, value]: KeyValuePair) => (props[name] = value);

    for (const [k, v] of Object.entries(this.props)) {
      if (k !== "ref") {
        const converted = this.convertProp(k as keyof Props, v);

        if (this.isSingleResult(converted)) {
          addProp(converted);
        } else {
          converted.forEach((c) => addProp(c));
        }
      }
    }

    return props;
  };

  private isSingleResult = (result: ConvertResult): result is KeyValuePair => {
    return typeof result[0] === "string";
  };

  private createHandlers = (id: string) => {
    for (const [name, handler] of this.handlers) {
      let handlers = handlerFunctions.get(name);
      if (!handlers) {
        handlers = new LuaMap();
        handlerFunctions.set(name, handlers);

        _G[convert.handlerName(name)] = (player: Player, value: ClickEvent, id: string) => {
          const handlerFunc = handlerFunctions.get(name)!.get(id);
          if (handlerFunc) {
            handlerFunc(player, value);
          }
        };
      }
      handlers.set(id, handler);
    }
  };

  render = (parent: TTSObject): UIElement => {
    this.parent = parent;
    if (this.needsId()) {
      const nextId = ++generatedIds;
      this.id = parent === Global ? `Global_${nextId}` : `${parent.getGUID()}_${nextId}`;
    }
    this.createHandlers(this.id!);

    return {
      tag: this.tag,
      attributes: {
        id: this.id,
        ...this.convertProps(),
      },
      children: this.children?.map((c) => c.render(parent)),
    } as UIElement;
  };

  private needsId = (): boolean => {
    return !this.handlers.isEmpty() || (this.props as any)["ref"];
  };
}

const handlerFunctions = new LuaMap<string, LuaMap<string, HandlerFunction>>();
