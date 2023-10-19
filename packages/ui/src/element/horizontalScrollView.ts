import { BaseUIElement } from "./base";

export class HorizontalScrollView extends BaseUIElement<"horizontalScrollView"> {
  constructor(props: HorizontalScrollViewElementAttributes) {
    super("horizontalScrollView", props);
  }
}
