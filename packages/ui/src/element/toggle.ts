import { BaseUIElement } from "./base";

export interface ToggleProps {}

export class Toggle extends BaseUIElement<ToggleProps> {
  constructor(props: ToggleProps) {
    super("toggle", props);
  }
}
