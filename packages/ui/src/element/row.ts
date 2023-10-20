import { BaseUIElement } from "./base";

export interface RowProps {}

export class Row extends BaseUIElement<RowProps> {
  constructor(props: RowProps) {
    super("row", props);
  }
}
