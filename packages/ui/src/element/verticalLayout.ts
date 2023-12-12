import { BaseProps, BaseUIElement } from "./base";

export interface VerticalLayoutProps extends BaseProps {}

export class VerticalLayout extends BaseUIElement<VerticalLayoutProps> {
  constructor(props: VerticalLayoutProps, children: JSX.Element[]) {
    super("verticalLayout", props, { children: children });
  }
}
