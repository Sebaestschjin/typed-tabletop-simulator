import { BaseUIElement } from "./base";

export interface OptionProps {}

export class Option extends BaseUIElement<OptionProps> {
  constructor(props: OptionProps) {
    super("option", props);
  }
}
