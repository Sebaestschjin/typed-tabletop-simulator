import { BaseUIElement } from "./base";

export class ToggleButton extends BaseUIElement<"toggleButton"> {
  constructor(props: ToggleButtonElementAttributes) {
    super("toggleButton", props);
  }
}
