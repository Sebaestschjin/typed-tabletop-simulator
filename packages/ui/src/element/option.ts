import { BaseUIElement } from "./base";

export class Option extends BaseUIElement<"option"> {
  constructor(props: OptionElementAttributes) {
    super("option", props);
  }
}
