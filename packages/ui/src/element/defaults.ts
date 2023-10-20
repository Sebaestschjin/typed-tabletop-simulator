import { BaseUIElement } from "./base";

export interface DefaultsProps {}

export class Defaults extends BaseUIElement<DefaultsProps> {
  constructor(props: {}) {
    super("defaults", props);
  }
}
