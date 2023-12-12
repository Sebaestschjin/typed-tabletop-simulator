import { BaseProps, BaseUIElement, ColorLikeProps } from "./base";

export interface ImageProps extends BaseProps, ColorLikeProps {
  image: string;
  preserveAspect?: boolean;
}

export class Image extends BaseUIElement<ImageProps> {
  constructor(props: ImageProps, children: JSX.Element[]) {
    super("image", { ...props, preserveAspect: props.preserveAspect ?? true }, { children: children });
  }

  setImage = (image: string) => {
    this.setAttribute("image", image);
  };

  setColor = (color?: string) => {
    this.setAttribute("color", color);
  };
}
