import { BaseUIElement } from "./base";

export class ProgressBar extends BaseUIElement<"progressBar"> {
  constructor(props: ProgressBarElementAttributes) {
    super("progressBar", props);
  }
}
