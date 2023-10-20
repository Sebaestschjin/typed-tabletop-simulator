import { ArrayOrSingle } from "../core";
import { Converters, convert } from "./convert";

export type Tag = keyof JSX.IntrinsicElements;

export type Vector2Prop = [number, number];
export type VectorProp = VectorShape;
export type ScaleProp = VectorShape | number;

export type ElementProps<T, A, C = ArrayOrSingle<JSX.Element>> = A & {
  ref?: Ref<T>;
} & {
  children?: C;
};

export interface Ref<T> {
  current?: T;
}

export interface BaseProps {
  active?: boolean;
  width?: number;
  height?: number;
  offset?: Vector2Prop;
  offsetAlignment?: Alignment;
  position?: VectorProp;
  rotation?: VectorProp;
  scale?: ScaleProp;
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
  onClick: convert.handlerFunction("onClick", "onButtonElementClicked"),
  position: convert.vector3("position"),
  rotation: convert.vector3("rotation"),
  scale: convert.scale,
};

export abstract class BaseUIElement<Props extends BaseProps> {
  protected id: string;

  private tag: Tag;
  private props: Props;
  private parent?: TTSObject;
  private children?: JSX.Element[];
  private converters: Converters;

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
    this.id = `${generatedIds++}`;
    this.props = props;
    this.children = options.children;
    this.converters = { ...baseConverters, ...options.converters };
  }

  setActive = (active: boolean) => {
    this.setAttribute("active", active);
  };

  setWidth = (width: number) => {
    this.setAttribute("width", width);
  };

  setHeight = (height: number) => {
    this.setAttribute("height", height);
  };

  setOffset = (offset: Vector2Prop) => {
    this.setAttribute("offset", offset);
  };

  protected setAttribute = (attribute: keyof Props, value: any) => {
    this.props[attribute] = value;
    if (this.parent) {
      const [newName, newValue] = this.convertProp(attribute, value);
      this.parent.UI.setAttribute(this.id, newName, newValue);
    }
  };

  protected convertProp = (name: keyof Props, value: any): [UIAttributeName, UIAttributeValue] => {
    const converter = this.converters[name as string];
    return converter !== undefined ? converter(value) : [name as UIAttributeName, value];
  };

  private convertProps = () => {
    return Object.fromEntries(Object.entries(this.props).map(([k, v]) => this.convertProp(k as keyof Props, v)));
  };

  render = (parent: TTSObject): UIElement => {
    this.parent = parent;

    return {
      tag: this.tag,
      attributes: {
        id: this.id,
        ...this.convertProps(),
      },
      children: this.children?.map((c) => c.render(parent)),
    } as UIElement;
  };
}
