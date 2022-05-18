import { getHandlerName } from "./uiHandler";

type TypedUIAttributeColor = UIAttributeColor;
type TypedUIAttributeVector2 = [number, number];
type TypedUIAttributeVector3 = [number, number, number];

type UIAttributePlayerValue = PlayerColor | PlayerTeam;
type UIAttributePlayer = UIAttributePlayerValue[];

export interface TypedBaseAttributes {
    onClick?: UIHandler;
    class?: string[];
    color?: TypedUIAttributeColor;
    visibility?: UIAttributePlayer;
    shadow?: TypedUIAttributeColor;
    shadowDistance?: TypedUIAttributeVector2;
    outline?: TypedUIAttributeColor;
    outlineSize?: TypedUIAttributeVector2;
    offsetXY?: TypedUIAttributeVector2;
    anchorMin?: TypedUIAttributeVector2;
    anchorMax?: TypedUIAttributeVector2;
    sizeDelta?: TypedUIAttributeVector2;
    pivot?: TypedUIAttributeVector2;
    position?: TypedUIAttributeVector3;
}

export const resolveBaseProps = (props: TypedBaseAttributes): BaseElementAttributes => {
    const resolvedProps = props;

    if (resolvedProps.onClick) {
        resolvedProps.onClick = getHandlerName(resolvedProps.onClick) as unknown as UIHandler;
    }

    return resolvedProps as BaseElementAttributes;
};
