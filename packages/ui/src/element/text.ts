import { BaseUIElement } from "./base";

export class Text extends BaseUIElement<"text"> {
  constructor(props: TextElementAttributes) {
    super("text", props);
  }

  setText = (text: string) => {
    this.setAttribute("text", text);
  };
}
