import { OnClickHandler } from "../handler";
import { BaseProps, BaseUIElement, ColorLikeProps, HandlerFunction } from "./base";
import { Converters } from "./convert";

export interface PanelProps extends BaseProps, ColorLikeProps {
  draggable?: boolean;
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
