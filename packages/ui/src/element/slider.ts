import { BaseProps, BaseUIElement } from "./base";

export interface SliderProps extends BaseProps {}

export class Slider extends BaseUIElement<SliderProps> {
  constructor(props: SliderProps) {
    super("slider", props);
  }
}
