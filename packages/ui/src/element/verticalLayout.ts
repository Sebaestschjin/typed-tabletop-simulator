import { BaseUIElement } from "./base";

export class VerticalLayout extends BaseUIElement<"verticalLayout"> {
  constructor(props: VerticalLayoutElementAttributes) {
    super("verticalLayout", props);
  }
}
