import { BaseUIElement } from "./base";

export interface DefaultsProps {}

export class Defaults extends BaseUIElement<DefaultsProps> {
  constructor(props: DefaultsProps, children: JSX.Element[]) {
    super("defaults", props, { children });
  }
}
