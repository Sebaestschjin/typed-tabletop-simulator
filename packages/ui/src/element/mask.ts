import { BaseProps, BaseUIElement } from "./base";

export interface MaskProps extends BaseProps {
  image: string;
}

export class Mask extends BaseUIElement<MaskProps> {
  constructor(props: MaskProps, children: JSX.Element[]) {
    super("mask", props, { children: children });
  }
}
