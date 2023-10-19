import { BaseUIElement } from "./base";

export class Cell extends BaseUIElement<"cell"> {
  constructor(props: CellElementAttributes) {
    super("cell", props);
  }
}
