import { OnClickHandler } from "../handler";
import { BaseProps, BaseUIElement, ColorLikeProps, Vector2Prop } from "./base";
import { convert, Converters } from "./convert";

export interface ImageProps extends BaseProps, ColorLikeProps {
  image: string;
  preserveAspect?: boolean;
  outlineColor?: string;
  outlineSize?: number;
  shadowColor?: string;
  shadowOffset?: number | Vector2Prop;
  onClick?: OnClickHandler;
}

export class Image extends BaseUIElement<ImageProps> {
  constructor(props: ImageProps, children: JSX.Element[]) {
    super("image", { ...props, preserveAspect: props.preserveAspect ?? true }, { children, converters });

    this.setHandler("onClick", props.onClick);
  }

  setImage = (image: string) => {
    this.setAttribute("image", image);
  };
}

const converters: Converters = {
  outlineColor: convert.rename("outline"),
  shadowColor: convert.rename("shadow"),
  shadowOffset: convert.shadow,
};
