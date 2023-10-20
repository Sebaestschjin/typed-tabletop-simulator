import { BaseProps, BaseUIElement } from "./base";

export interface ToggleGroupProps extends BaseProps {}

export class ToggleGroup extends BaseUIElement<ToggleGroupProps> {
  constructor(props: ToggleGroupProps) {
    super("toggleGroup", props);
  }
}
