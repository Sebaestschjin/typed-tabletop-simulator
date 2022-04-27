type ColorNumeric = [number, number, number] | [number, number, number, number];
type ColorRGB = { r: number; g: number; b: number; a?: number };
type ColorShape = ColorNumeric | ColorRGB;
type ColorValue = ColorShape | PlayerColor;

/**
 * Color is a type of Table that is used to define RGBA values for tinting. R for red, G for green, B for blue and A for
 * alpha (transparency).
 */
declare interface Color {
    /** Red component. */
    r: float;

    /** Green component. */
    g: float;

    /** Blue component. */
    b: float;

    /** Alpha component. */
    a: float;

    /**
     * Sets a component to value and returns self.
     *
     * @param field The field to update.
     * @param value The new value for this field.
     */
    setAt(field: "r" | "g" | "b" | "a", value: float): Color;

    /**
     * Sets r, g, b, a components to given values and returns self.
     *
     * @param r Red component.
     * @param g Green component.
     * @param b Blue component.
     * @param a Alpha component.
     */
    set(r: float, g: float, b: float, a?: float): Color;

    /**
     * Returns r, g, b, a components as four separate values.
     */
    get(): LuaMultiReturn<[float, float, float, float]>;

    /**
     * Returns a separate Color with identical component values.
     */
    copy(): Color;

    /**
     * Returns a hex string representation of self.
     *
     * @param includeAlpha Include or not the a value. Default true
     */
    toHex(includeAlpha?: boolean): string;

    /**
     * Returns a color string if matching this instance, nil otherwise, optional numeric tolerance param.
     *
     * @param tolerance Numeric tolerance, by default 0.01.
     */
    toString(tolerance?: float): string;

    /**
     * Returns true if otherCol same as col, false otherwise, optional numeric tolerance param.
     *
     * @param other The other color.
     * @param tolerance Numeric tolerance, by default 0.01.
     */
    equals(other: Color, tolerance?: float): boolean;

    /**
     * Return a color some part of the way between col and otherCol, numeric arg [0, 1] is the fraction.
     *
     * @param other The other color.
     * @param fraction Numeric fraction.
     */
    lerp(other: Color, fraction?: float): boolean;

    /**
     * Return a string description of a color with an optional prefix.
     *
     * @param prefix The prefix of return string.
     */
    dump(prefix?: string): LuaMultiReturn<[string, float]>;
}

/** @noSelf */
declare interface ColorStatic {
    /**
     * Return a new color with specified (r, g, b, a) components.
     *
     * @param r Red component between 0 and 1.
     * @param g Green component between 0 and 1.
     * @param b Blue component between 0 and 1.
     * @param a Alpha component between 0 and 1.
     */
    (this: void, r: float, g: float, b: float, a?: float): Color;

    /**
     * Return a new color with specified (r, g, b, a) components.
     */
    (this: void, params: ColorConstructor): Color;

    /** Returns a table of all color strings */
    list: string[];

    /**
     * Return a color from a hex color string (with optional alpha).
     *
     * @param color The hex representation, e.g. "1e87ffff" or "1e87ff"
     */
    fromHex(color: string): Color;

    /**
     * Return a color from a color string ('Red', 'Green' etc), capitalization ignored.
     *
     * @param color Any Player Color or color added with Color.Add.
     */
    fromString(color: PlayerColor | string): Color;

    /**
     * Add your own color definition to the class.
     *
     * @param name The name of the color.
     * @param color The color value.
     */
    Add(name: string, color: Color): void;

    /** Shorthand for Color.fromString('Black'). Capitalization ignored. */
    Black: ColorReturn;

    /** Shorthand for Color.fromString('Blue'). Capitalization ignored. */
    Blue: ColorReturn;

    /** Shorthand for Color.fromString('Brown'). Capitalization ignored. */
    Brown: ColorReturn;

    /** Shorthand for Color.fromString('Green'). Capitalization ignored. */
    Green: ColorReturn;

    /** Shorthand for Color.fromString('Grey'). Capitalization ignored. */
    Grey: ColorReturn;

    /** Shorthand for Color.fromString('Orange'). Capitalization ignored. */
    Orange: ColorReturn;

    /** Shorthand for Color.fromString('Pink'). Capitalization ignored. */
    Pink: ColorReturn;

    /** Shorthand for Color.fromString('Purple'). Capitalization ignored. */
    Purple: ColorReturn;

    /** Shorthand for Color.fromString('Red'). Capitalization ignored. */
    Red: ColorReturn;

    /** Shorthand for Color.fromString('Teal'). Capitalization ignored. */
    Teal: ColorReturn;

    /** Shorthand for Color.fromString('White'). Capitalization ignored. */
    White: ColorReturn;

    /** Shorthand for Color.fromString('Yellow'). Capitalization ignored. */
    Yellow: ColorReturn;
}

interface ColorConstructor {
    /**
     * Red component between 0 and 1.
     *
     * @defaultValue 0
     */
    r?: float;

    /**
     * Green component between 0 and 1.
     *
     * @defaultValue 0
     */
    g?: float;

    /**
     * Blue component between 0 and 1.
     *
     * @defaultValue 0
     */
    b?: float;

    /**
     * Alpha component between 0 and 1.
     *
     * @defaultValue 1
     */
    a?: float;
}
type ColorReturn = LuaMultiReturn<[Color, string]>;

declare const Color: ColorStatic & {
    /** Shorthand for Color.fromString('addedColor'). Capitalization ignored. */
    [addedColor: string]: Maybe<ColorReturn>;
};
