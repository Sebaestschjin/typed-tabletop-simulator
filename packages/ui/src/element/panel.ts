import { OnClickHandler } from "../handler";
import { BaseProps, BaseUIElement, ColorLikeProps, HandlerFunction, Vector2Prop } from "./base";
import { Converters, convert } from "./convert";

export interface PanelProps extends BaseProps, ColorLikeProps {
  draggable?: boolean;
  borderColor?: string;
  borderSize?: Vector2Prop;
  onMouseEnter?: HandlerFunction;
  onMouseExit?: HandlerFunction;
  onClick?: OnClickHandler;
}

export class Panel extends BaseUIElement<PanelProps> {
  constructor(props: PanelProps, children: JSX.Element[]) {
    super("panel", props, { children, converters });

    this.setHandler("onMouseEnter", props.onMouseEnter);
    this.setHandler("onMouseExit", props.onMouseExit);
    this.setHandler("onClick", props.onClick);
  }
}

const converters: Converters = {
  borderColor: convert.rename("outline"),
  borderSize: convert.vector2("outlineSize"),
  draggable: (value: boolean) => {
    if (value) {
      return [
        ["allowDragging", true],
        ["restrictDraggingToParentBounds", false],
        ["returnToOriginalPositionWhenReleased", false],
      ];
    }

    return ["allowDragging", false];
  },
};
