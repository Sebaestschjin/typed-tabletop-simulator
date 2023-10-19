// export type Tag = keyof JSX.IntrinsicElements;

export type Tag = keyof JSX.IntrinsicElements;

export class BaseUIElement<T extends Tag> {
  private parent?: TTSObject;
  private id?: string;
  private tag: T;
  private props: JSX.IntrinsicElements[T];
  private children?: JSX.Element[];
  // private children: UIElement<a[] = [];

  constructor(tag: T, props: JSX.IntrinsicElements[T], children?: JSX.Element[]) {
    this.tag = tag;
    this.props = props;
    this.id = (props as any).id;
    this.children = children;
  }

  getId = () => {
    return this.getAttribute("id", "");
  };

  setActive = (active: boolean) => {
    this.setAttribute("active", active);
  };

  isActive = (): boolean => {
    return this.getAttribute("active", true);
  };

  setWidth = (width: number) => {
    this.setAttribute("width", width);
  };

  setHeight = (height: number) => {
    this.setAttribute("height", height);
  };

  setOffset = (offset: [number, number]) => {
    this.setAttribute("offsetXY", `${offset[0]} ${offset[1]}`);
  };

  protected setAttribute = (attribute: UIAttributeName, value: UIAttributeValue) => {
    (this.props as any)[attribute] = value as any;
    if (this.parent && this.id) {
      this.parent.UI.setAttribute(this.id, attribute, value);
    }
  };

  protected getAttribute = <V extends UIAttributeValue>(attribute: UIAssetName, defaultValue: V): V => {
    return ((this.props as any)[attribute] as V) ?? defaultValue;
  };

  render = (parent: TTSObject): UIElement => {
    this.parent = parent;
    print(logString(this.children));
    return {
      tag: this.tag,
      attributes: this.props,
      children: this.children?.map((c) => c.render(parent)),
    } as UIElement;
  };
}
