import { BaseProps, BaseUIElement, ColorLikeProps, TextLikeProps } from "./base";

export interface TextProps extends BaseProps, TextLikeProps, ColorLikeProps {}

export class Text extends BaseUIElement<TextProps> {
  constructor(props: TextProps) {
    super("text", props);
  }

  setText = (text: string) => {
    this.setAttribute("text", text);
  };
}
