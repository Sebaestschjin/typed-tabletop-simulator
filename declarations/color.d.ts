type ColorNumeric = [number, number, number] | [number, number, number, number];
type ColorRGB = { r: number; g: number; b: number; a?: number };
type ColorShape = ColorNumeric | ColorRGB;
type ColorValue = ColorShape | PlayerColor;

/**
 * Color is a type of Table that is used to define RGBA values for tinting. R for red, G for green, B for blue and A for
 * alpha (transparency).
 */
declare interface Color {
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
    dump(prefix?: string): string;
}
