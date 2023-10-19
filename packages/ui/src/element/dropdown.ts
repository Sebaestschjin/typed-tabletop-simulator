import { BaseUIElement } from "./base";

export class Dropdown extends BaseUIElement<"dropdown"> {
  constructor(props: DropdownElementAttributes) {
    super("dropdown", props);
  }
}
