import { BaseProps, BaseUIElement } from "./base";

export interface ToggleButtonProps extends BaseProps {}

export class ToggleButton extends BaseUIElement<ToggleButtonProps> {
  constructor(props: ToggleButtonProps) {
    super("toggleButton", props);
  }
}
