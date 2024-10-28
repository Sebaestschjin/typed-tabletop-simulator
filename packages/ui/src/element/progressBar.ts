import { BaseProps, BaseUIElement, ColorLikeProps } from "./base";
import { convert, Converters } from "./convert";

export interface ProgressBarProps extends BaseProps {
  /** The percentage of how much is filled in the progress bar. */
  percentage: number;
  /** The color of the progress bar. */
  color?: string;
  /** The color of the empty space of the progress bar. */
  backgroundColor?: string;
  showPercentageText?: boolean;
}

export class ProgressBar extends BaseUIElement<ProgressBarProps> {
  constructor(props: ProgressBarProps, children: JSX.Element[]) {
    super(
      "progressBar",
      {
        ...props,
        showPercentageText: props.showPercentageText ?? false,
      },
      { children, converters }
    );
  }
}

const converters: Converters = {
  color: convert.rename("fillImageColor"),
  backgroundColor: convert.rename("color"),
};
