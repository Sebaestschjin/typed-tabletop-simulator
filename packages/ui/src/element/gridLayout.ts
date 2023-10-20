import { BaseUIElement } from "./base";

export interface GridLayoutProps {}

export class GridLayout extends BaseUIElement<GridLayoutProps> {
  constructor(props: GridLayoutProps) {
    super("gridLayout", props);
  }
}
