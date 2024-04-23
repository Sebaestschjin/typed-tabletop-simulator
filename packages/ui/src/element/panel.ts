import { BaseProps, BaseUIElement, ColorLikeProps, HandlerFunction, OnClickHandler, VectorProp } from "./base";

export interface PanelProps extends BaseProps, ColorLikeProps {
  onMouseEnter?: HandlerFunction;
  onMouseExit?: HandlerFunction;
  onClick?: OnClickHandler;
}

export class Panel extends BaseUIElement<PanelProps> {
  constructor(props: PanelProps, children: JSX.Element[]) {
    super("panel", props, { children: children });

    this.setHandler("onMouseEnter", props.onMouseEnter);
    this.setHandler("onMouseExit", props.onMouseExit);
    this.setHandler("onClick", props.onClick);
  }
}
