import { BaseProps, BaseUIElement, ColorLikeProps, TextLikeProps } from "./base";
import { Converters } from "./convert";

type OnClickHandler = (this: void) => unknown;

interface NamedColors {
  base?: string;
  hover?: string;
  click?: string;
}

type ColorsProps = string[] | NamedColors;

const converters: Converters = {
  colors: (value: ColorsProps) => {
    let values: string[] = [];
    if (typeof (value as string[])[0] === "string") {
      values = value as string[];
    } else {
      const named = value as NamedColors;

      values.push(named.base ?? DEFAULT_COLORS.base);
      values.push(named.hover ?? DEFAULT_COLORS.hover);
      values.push(named.click ?? DEFAULT_COLORS.click);
    }

    return ["colors", values.join("|")];
  },
};

const DEFAULT_COLORS = {
  base: "#FFFFFF",
  hover: "#FFFFFF",
  click: "#C8C8C8",
};

export interface ButtonProps extends BaseProps, TextLikeProps, ColorLikeProps {
  colors?: ColorsProps;
  textColor?: string;
  textAlignment?: Alignment;
  image?: string;
  onClick: OnClickHandler;
}

export class Button extends BaseUIElement<ButtonProps> {
  constructor(props: ButtonProps) {
    super("button", props, { converters: converters });
    this.setHandler("onClick", props.onClick);
  }
}
