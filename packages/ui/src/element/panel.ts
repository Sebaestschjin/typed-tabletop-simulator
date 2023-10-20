import { BaseProps, BaseUIElement, ColorLikeProps } from "./base";

export interface PanelProps extends BaseProps, ColorLikeProps {}

export class Panel extends BaseUIElement<PanelProps> {
  constructor(props: PanelProps, children: JSX.Element[]) {
    super("panel", props, { children: children });
  }
}
