import { XmlUi } from "../xmlUi";
import { resolveBaseProps, TypedBaseAttributes } from "./base";

interface TypedButtonElementAttributes extends TypedBaseAttributes {}
type ButtonProps = Omit<ButtonElementAttributes, keyof TypedButtonElementAttributes> & TypedButtonElementAttributes;

export const Button = (props: ButtonProps) => {
    return XmlUi.createElement("button", resolveProps(props));
};

const resolveProps = (props: TypedButtonElementAttributes): ButtonElementAttributes => {
    const resolvedProps = resolveBaseProps(props);

    return resolvedProps;
};
