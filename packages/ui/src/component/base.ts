import { getHandlerName } from "./uiHandler";

export interface TypedAttributeTypes extends AttributeTypes {
    Color: ColorShape;
    ColorBlock: ColorShape[];
    HandlerFunction: UIHandler;
    ListOfNumbers: number | number[];
    ListOfStrings: string | string[];
    Vector2: [number, number];
    Vector3: VectorShape;
    Visibility: PlayerVisibility | PlayerVisibility[];
}

type TypedBaseAttributes = BaseElementAttributes<TypedAttributeTypes>;
type PlayerVisibility = PlayerColor | PlayerTeam;

const mappings: Map<keyof TypedBaseAttributes, (v: any) => any> = new Map();
const handlerFields: Set<keyof TypedBaseAttributes> = new Set(["onClick", "onMouseDown"]);
const listFields: Set<keyof TypedBaseAttributes> = new Set(["offsetXY"]);
const colorFields: Set<keyof TypedBaseAttributes> = new Set(["color"]);

const listToString = (entries: any[], separator: string) => {
    return entries.join(separator);
};

const spaceList = (entries: any[]): string => listToString(entries, " ");

const colorToString = (color: ColorShape): string => {
    if ((color as ColorRGB).r) {
        const rgb = color as ColorRGB;
        return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
    }

    return `:sad_emoji:`;
};

for (const field of handlerFields) {
    mappings.set(field, getHandlerName);
}
for (const field of listFields) {
    mappings.set(field, spaceList);
}
for (const field of colorFields) {
    mappings.set(field, colorToString);
}

export const resolveBaseProps = (props: TypedBaseAttributes): BaseElementAttributes => {
    const resolvedProps: BaseElementAttributes = {};

    for (const [field, value] of Object.entries(props)) {
        const typedField = field as keyof BaseElementAttributes;
        if (mappings.has(typedField)) {
            resolvedProps[typedField] = mappings.get(typedField)!(value);
        } else {
            const valueType = typeof value;
            if (!["string", "number", "boolean"].includes(valueType)) {
                printToAll(`Unmapped type for field ${field}: ${valueType}`, "Red");
            }
            resolvedProps[typedField] = value;
        }
    }

    return resolvedProps;
};
