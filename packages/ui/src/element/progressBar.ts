import { BaseProps, BaseUIElement, ColorLikeProps } from "./base";

export interface ProgressBarProps extends BaseProps {
  percentage: number;
  backgroundColor?: string;
  fillImageColor?: string;
  showPercentageText?: boolean;
}

export class ProgressBar extends BaseUIElement<ProgressBarProps> {
  constructor(props: ProgressBarProps, children: JSX.Element[]) {
    super("progressBar", { ...props, showPercentageText: props.showPercentageText ?? false }, { children: children });
  }

  setProgress = (percentage: number) => {
    this.setAttribute("percentage", percentage);
  };
}
