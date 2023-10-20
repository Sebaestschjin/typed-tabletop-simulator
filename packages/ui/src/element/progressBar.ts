import { BaseProps, BaseUIElement } from "./base";

export interface ProgressBarProps extends BaseProps {}

export class ProgressBar extends BaseUIElement<ProgressBarProps> {
  constructor(props: ProgressBarProps) {
    super("progressBar", props);
  }
}
