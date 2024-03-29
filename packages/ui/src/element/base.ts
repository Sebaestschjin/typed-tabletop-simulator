import { ArrayOrSingle } from "../core";
import { Converters, convert } from "./convert";

export type Tag = keyof JSX.IntrinsicElements;

export type Vector2Prop = [number, number];
export type VectorProp = VectorShape;
export type ScaleProp = VectorShape | number;

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
  active?: boolean;
  width?: number | `${number}%`;
  height?: number | `${number}%`;
  position?: VectorProp;
  rotation?: VectorProp;
  scale?: ScaleProp;
}

export interface UIElementProps {
  offset?: Vector2Prop;
  offsetAlignment?: Alignment;
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
const ttsSelf = self;

const baseConverters: Converters = {
  textSize: convert.rename("fontSize"),
  offset: convert.vector2("offsetXY"),
  offsetAlignment: convert.rename("rectAlignment"),
  position: convert.vector3("position"),
  rotation: convert.vector3("rotation"),
  scale: convert.scale,
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

  setAttribute = <K extends keyof Props>(attribute: K, value: Props[K]) => {
    if (!this.id) {
      log("Expected an ID for the UI element, but didn't find any");
      return;
    }

    this.props[attribute] = value;
    if (this.parent) {
      const [newName, newValue] = this.convertProp(attribute, value);
      this.parent.UI.setAttribute(this.id, newName, newValue);
    }
  };

  protected setHandler = (name: UIAttributeName, handler?: HandlerFunction) => {
    if (handler) {
      this.handlers.set(name, handler);
    }
  };

  protected convertProp(name: keyof Props, value: any): [UIAttributeName, UIAttributeValue] {
    if (this.handlers.get(name as UIAttributeName)) {
      return convert.handlerFunction(name as UIAttributeName)(value);
    }

    const converter = this.converters[name as string];
    return converter !== undefined ? converter(value) : [name as UIAttributeName, value];
  }

  private convertProps = () => {
    return Object.fromEntries(
      Object.entries(this.props)
        .filter(([k]) => k !== "ref")
        .map(([k, v]) => this.convertProp(k as keyof Props, v))
    );
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
      this.id = parent === Global ? `Global_${this.id}` : `${parent.getGUID()}_${++generatedIds}`;
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
