import { BaseProps, BaseUIElement } from "./base";

export interface CellProps extends BaseProps {}

export class Cell extends BaseUIElement<CellProps> {
  constructor(props: CellProps) {
    super("cell", props);
  }
}
