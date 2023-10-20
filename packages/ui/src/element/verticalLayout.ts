import { BaseProps, BaseUIElement } from "./base";

export interface VerticalLayoutProps extends BaseProps {}

export class VerticalLayout extends BaseUIElement<VerticalLayoutProps> {
  constructor(props: VerticalLayoutProps) {
    super("verticalLayout", props);
  }
}
