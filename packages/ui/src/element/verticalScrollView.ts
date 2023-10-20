import { BaseProps, BaseUIElement } from "./base";

export interface VerticalScrollViewProps extends BaseProps {}

export class VerticalScrollView extends BaseUIElement<VerticalScrollViewProps> {
  constructor(props: VerticalScrollViewProps) {
    super("verticalScrollView", props);
  }
}
