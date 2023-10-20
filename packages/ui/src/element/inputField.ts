import { BaseProps, BaseUIElement } from "./base";

export interface InputFieldProps extends BaseProps {}

export class InputField extends BaseUIElement<InputFieldProps> {
  constructor(props: InputFieldProps) {
    super("inputField", props);
  }
}
