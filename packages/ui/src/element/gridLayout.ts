import { BaseUIElement } from "./base";

export interface GridLayoutProps {}

export class GridLayout extends BaseUIElement<GridLayoutProps> {
  constructor(props: GridLayoutProps, children: JSX.Element[]) {
    super("gridLayout", props, { children: children });
  }
}
