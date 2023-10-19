import { BaseUIElement } from "./base";

export class HorizontalLayout extends BaseUIElement<"horizontalLayout"> {
  constructor(props: HorizontalLayoutElementAttributes) {
    super("horizontalLayout", props);
  }
}
