import { BaseUIElement } from "./base";

export class Toggle extends BaseUIElement<"toggle"> {
  constructor(props: ToggleButtonElementAttributes) {
    super("toggle", props);
  }
}
