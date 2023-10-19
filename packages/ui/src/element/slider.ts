import { BaseUIElement } from "./base";

export class Slider extends BaseUIElement<"slider"> {
  constructor(props: SliderElementAttributes) {
    super("slider", props);
  }
}
