import { BaseUIElement } from "./base";

export class Image extends BaseUIElement<"image"> {
  constructor(props: ImageElementAttributes) {
    super("image", props);
  }

  setImage = (image: string) => {
    this.setAttribute("image", image);
  };
}

export default Image;
