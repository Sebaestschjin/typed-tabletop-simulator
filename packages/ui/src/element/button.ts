import { BaseUIElement } from "./base";

export class Button extends BaseUIElement<"button"> {
  constructor(props: ButtonElementAttributes) {
    super("button", props);
  }
}

export default Button;
