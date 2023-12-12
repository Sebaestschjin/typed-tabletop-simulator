import { BaseProps, BaseUIElement } from "./base";

export interface HorizontalLayoutProps extends BaseProps {}

export class HorizontalLayout extends BaseUIElement<HorizontalLayoutProps> {
  constructor(props: HorizontalLayoutProps, children: JSX.Element[]) {
    super("horizontalLayout", props, { children: children });
  }
}
