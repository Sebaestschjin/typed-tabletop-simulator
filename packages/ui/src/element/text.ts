import { BaseProps, BaseUIElement, ColorLikeProps, OffsetProp, TextLikeProps, Vector2Prop } from "./base";
import { convert, Converters } from "./convert";

export interface TextProps extends BaseProps, TextLikeProps, ColorLikeProps {
  overflow?: boolean;
  outlineColor?: string;
  outlineSize?: number;
  shadowColor?: string;
  shadowOffset?: number | Vector2Prop;
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
  outlineColor: convert.rename("outline"),
  overflow: convert.toggle("verticalOverflow", "Overflow", "Truncate"),
  shadowColor: convert.rename("shadow"),
  shadowOffset: convert.shadow,
};
