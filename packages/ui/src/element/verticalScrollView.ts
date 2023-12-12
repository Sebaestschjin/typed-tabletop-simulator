import { BaseProps, BaseUIElement } from "./base";

export interface VerticalScrollViewProps extends BaseProps {}

export class VerticalScrollView extends BaseUIElement<VerticalScrollViewProps> {
  constructor(props: VerticalScrollViewProps, children: JSX.Element[]) {
    super("verticalScrollView", props, { children: children });
  }
}
