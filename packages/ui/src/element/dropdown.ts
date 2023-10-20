import { BaseProps, BaseUIElement } from "./base";

export interface DropdownProps extends BaseProps {}

export class Dropdown extends BaseUIElement<DropdownProps> {
  constructor(props: DropdownProps) {
    super("dropdown", props);
  }
}
