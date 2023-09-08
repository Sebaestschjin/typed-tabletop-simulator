import { XmlUi } from "../xmlUi";
import { resolveBaseProps, TypedAttributeTypes } from "./base";

type TypedButtonElementAttributes = ButtonElementAttributes<TypedAttributeTypes>;

export const Button = (props: TypedButtonElementAttributes) => {
  return XmlUi.createElement("button", resolveProps(props));
};

const resolveProps = (props: TypedButtonElementAttributes): ButtonElementAttributes => {
  const resolvedProps = resolveBaseProps(props);

  return resolvedProps;
};
