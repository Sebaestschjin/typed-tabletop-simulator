import { BaseProps, BaseUIElement } from "./base";

export interface HorizontalScrollViewProps extends BaseProps {}

export class HorizontalScrollView extends BaseUIElement<HorizontalScrollViewProps> {
  constructor(props: HorizontalScrollViewProps) {
    super("horizontalScrollView", props);
  }
}
