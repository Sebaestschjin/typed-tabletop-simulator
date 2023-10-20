import { BaseUIElement } from "./base";

export interface TableLayoutProps {}

export class TableLayout extends BaseUIElement<TableLayoutProps> {
  constructor(props: TableLayoutProps) {
    super("tableLayout", props);
  }
}
