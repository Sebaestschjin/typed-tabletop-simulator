import { BaseUIElement } from "./base";

export class ToggleGroup extends BaseUIElement<"toggleGroup"> {
  constructor(props: ToggleButtonElementAttributes) {
    super("toggleGroup", props);
  }
}
