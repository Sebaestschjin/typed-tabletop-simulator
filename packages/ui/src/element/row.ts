import { BaseUIElement } from "./base";

export class Row extends BaseUIElement<"row"> {
  constructor(props: RowElementAttributes) {
    super("row", props);
  }
}
