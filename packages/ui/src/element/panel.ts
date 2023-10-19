import { BaseUIElement } from "./base";

export class Panel extends BaseUIElement<"panel"> {
  constructor(props: PanelElementAttributes, children: JSX.Element[]) {
    super("panel", props, children);
  }
}

export default Panel;
