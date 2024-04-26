import { BaseProps, BaseUIElement, ColorLikeProps, TextLikeProps } from "./base";
import { Converters } from "./convert";

export interface TextProps extends BaseProps, TextLikeProps, ColorLikeProps {
  overflow?: boolean;
}

export class Text extends BaseUIElement<TextProps> {
  constructor(props: TextProps) {
    super("text", props, { converters });
  }

  setText = (text: string) => {
    this.setAttribute("text", text);
  };
}

const converters: Converters = {
  overflow: (value: boolean) => {
    if (value) {
      return ["verticalOverflow", "Overflow"];
    }
    return ["verticalOverflow", "Truncate"];
  },
};
