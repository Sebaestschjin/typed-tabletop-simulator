import { OnClickHandler } from "../handler";
import { BaseProps, BaseUIElement, ColorLikeProps } from "./base";

export interface ImageProps extends BaseProps, ColorLikeProps {
  image: string;
  preserveAspect?: boolean;
  outlineColor?: string;
  outlineSize?: number;
  onClick?: OnClickHandler;
}

export class Image extends BaseUIElement<ImageProps> {
  constructor(props: ImageProps, children: JSX.Element[]) {
    super("image", { ...props, preserveAspect: props.preserveAspect ?? true }, { children });

    this.setHandler("onClick", props.onClick);
  }

  setImage = (image: string) => {
    this.setAttribute("image", image);
  };
}
