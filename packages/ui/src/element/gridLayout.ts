import { BaseUIElement } from "./base";

export class GridLayout extends BaseUIElement<"gridLayout"> {
  constructor(props: GridLayoutElementAttributes) {
    super("gridLayout", props);
  }
}
