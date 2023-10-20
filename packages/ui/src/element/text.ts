import { BaseProps, BaseUIElement, ColorLikeProps, TextLikeProps } from "./base";
import { Converters } from "./convert";

const converters: Converters = {
  overflow: (value: boolean) => {
    if (value) {
      return ["verticalOverflow", "Overflow"];
    }
    return ["verticalOverflow", "Truncate"];
  },
};

export interface TextProps extends BaseProps, TextLikeProps, ColorLikeProps {
  overflow?: boolean;
}

export class Text extends BaseUIElement<TextProps> {
  constructor(props: TextProps) {
    super("text", props, { converters: converters });
  }

  setText = (text: string) => {
    this.setAttribute("text", text);
  };
}
