import { BaseProps, BaseUIElement } from "./base";

export interface HorizontalLayoutProps extends BaseProps {}

export class HorizontalLayout extends BaseUIElement<HorizontalLayoutProps> {
  constructor(props: HorizontalLayoutProps) {
    super("horizontalLayout", props);
  }
}
