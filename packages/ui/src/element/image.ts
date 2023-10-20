import { BaseProps, BaseUIElement } from "./base";

export interface ImageProps extends BaseProps {
  image: string;
  preserveAspect?: boolean;
}

export class Image extends BaseUIElement<ImageProps> {
  constructor(props: ImageProps) {
    super("image", { ...props, preserveAspect: props.preserveAspect ?? true });
  }

  setImage = (image: string) => {
    this.setAttribute("image", image);
  };
}
