import { BaseUIElement } from "./base";

export class TableLayout extends BaseUIElement<"tableLayout"> {
  constructor(props: TableLayoutElementAttributes) {
    super("tableLayout", props);
  }
}
