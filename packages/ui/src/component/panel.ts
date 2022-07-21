import { XmlUi } from "../xmlUi";
import { resolveBaseProps, TypedAttributeTypes } from "./base";

type TypedPanelElementAttributes = PanelElementAttributes<TypedAttributeTypes>;

export const Panel = (props: TypedPanelElementAttributes, ...children: any[]) => {
    return XmlUi.createElement("panel", resolveProps(props), ...children);
};

const resolveProps = (props: TypedPanelElementAttributes): PanelElementAttributes => {
    const resolvedProps = resolveBaseProps(props);

    return resolvedProps;
};
