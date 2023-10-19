import { BaseUIElement } from "./base";

export class InputField extends BaseUIElement<"inputField"> {
  constructor(props: InputFieldElementAttributes) {
    super("inputField", props);
  }
}
