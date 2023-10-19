import { BaseUIElement } from "./base";

export class VerticalScrollView extends BaseUIElement<"verticalScrollView"> {
  constructor(props: VerticalLayoutElementAttributes) {
    super("verticalScrollView", props);
  }
}
