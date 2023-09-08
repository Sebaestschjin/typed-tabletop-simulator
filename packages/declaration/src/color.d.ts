/**
 * @module Color
 */

/** A color value as a numeric list of red, green, blue and optional alpha value. */
type ColorNumeric = [number, number, number] | [number, number, number, number];
/** A color object with a named list of red, green, blue and optional alpha value. */
type ColorRGB = { r: number; g: number; b: number; a?: number };
type ColorShape = ColorNumeric | ColorRGB | Color;
type ColorValue = ColorShape | PlayerColor;

/**
 * Color is a type of Table that is used to define RGBA values for tinting.
 * R for red, G for green, B for blue and A for alpha (transparency).
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
   * Same as [[ColoStatic.setAt]] with this color as the first parameter.
   *
   * @category Element access
   */
  setAt(field: "r" | "g" | "b" | "a", value: float): Color;

  /**
   * Same as [[ColoStatic.set]] with this color as the first parameter.
   *
   * @category Element access
   */
  set(r: float, g: float, b: float, a?: float): Color;

  /**
   * Same as [[ColoStatic.get]] with this color as the first parameter.
   *
   * @category Element access
   */
  get(): LuaMultiReturn<[float, float, float, float]>;

  /**
   * Same as [[ColoStatic.copy]] with this color as the first parameter.
   *
   * @category Element access
   */
  copy(): Color;

  /**
   * Same as [[ColoStatic.toHex]] with this color as the first parameter.
   *
   * @category Non-Modifying
   */
  toHex(includeAlpha?: boolean): string;

  /**
   * Same as [[ColoStatic.toString]] with this color as the first parameter.
   *
   * @category Non-Modifying
   */
  toString(tolerance?: float): string;

  /**
   * Same as [[ColoStatic.equals]] with this color as the first parameter.
   *
   * @category Non-Modifying
   */
  equals(other: Color, tolerance?: float): boolean;

  /**
   * Same as [[ColoStatic.lerp]] with this color as the first parameter.
   *
   * @category Non-Modifying
   */
  lerp(other: Color, fraction?: float): boolean;

  /**
   * Same as [[ColoStatic.dump]] with this color as the first parameter.
   *
   * @category Non-Modifying
   */
  dump(prefix?: string): string;
}

/** @noSelf */
declare interface ColorStatic {
  /**
   * Same as `Color(r, g, b, a)`.
   *
   * @information
   * The actual `new` function in Lua also supports using one of the other constructors, but this isn't really
   * expressable in TypeScript.
   *
   * @category Constructor
   */
  new: (r: float, g: float, b: float, a?: float) => Color;

  /**
   * Return a new color with specified (r, g, b, a) components.
   *
   * @param r Red component between 0 and 1.
   * @param g Green component between 0 and 1.
   * @param b Blue component between 0 and 1.
   * @param a Alpha component between 0 and 1.
   *
   * @category Constructor
   */
  (this: void, r: float, g: float, b: float, a?: float): Color;

  /**
   * Return a new color with specified (r, g, b, a) components.
   *
   * @category Constructor
   */
  (
    this: void,
    values: {
      /**
       * Red component between 0 and 1.
       * @defaultValue 0
       */
      r?: float;

      /**
       * Green component between 0 and 1.
       * @defaultValue 0
       */
      g?: float;

      /**
       * Blue component between 0 and 1.
       * @defaultValue 0
       */
      b?: float;

      /**
       * Alpha component between 0 and 1.
       * @defaultValue 1
       */
      a?: float;
    }
  ): Color;

  /**
   * Return a color from a hex color string (with optional alpha).
   *
   * @param color The hex representation, e.g. "1e87ffff" or "1e87ff"
   *
   * @category Constructor
   */
  fromHex(color: string): Color;

  /**
   * Return a color from a color string ('Red', 'Green' etc), capitalization ignored.
   *
   * @param color Any Player Color or color added with Color.Add.
   *
   * @category Constructor
   */
  fromString(color: PlayerColor | string): Color;

  /**
   * Shorthand for Color.fromString('Black'). Capitalization ignored.
   *
   * @category Constructor
   */
  Black: Color;

  /**
   * Shorthand for Color.fromString('Blue'). Capitalization ignored.
   *
   * @category Constructor
   */
  Blue: Color;

  /**
   * Shorthand for Color.fromString('Brown'). Capitalization ignored.
   *
   * @category Constructor
   */
  Brown: Color;

  /**
   * Shorthand for Color.fromString('Green'). Capitalization ignored.
   *
   * @category Constructor
   */
  Green: Color;

  /**
   * Shorthand for Color.fromString('Grey'). Capitalization ignored.
   *
   * @category Constructor
   */
  Grey: Color;

  /**
   * Shorthand for Color.fromString('Orange'). Capitalization ignored.
   *
   * @category Constructor
   */
  Orange: Color;

  /**
   * Shorthand for Color.fromString('Pink'). Capitalization ignored.
   *
   * @category Constructor
   */
  Pink: Color;

  /**
   * Shorthand for Color.fromString('Purple'). Capitalization ignored.
   *
   * @category Constructor
   */
  Purple: Color;

  /**
   * Shorthand for Color.fromString('Red'). Capitalization ignored.
   *
   * @category Constructor
   */
  Red: Color;

  /**
   * Shorthand for Color.fromString('Teal'). Capitalization ignored.
   *
   * @category Constructor
   */
  Teal: Color;

  /**
   * Shorthand for Color.fromString('White'). Capitalization ignored.
   *
   * @category Constructor
   */
  White: Color;

  /**
   * Shorthand for Color.fromString('Yellow'). Capitalization ignored.
   *
   * @category Constructor
   */
  Yellow: Color;

  /** Returns a table of all color strings */
  list: string[];

  /**
   * Add your own color definition to the class.
   *
   * @param name The name of the color.
   * @param color The color value.
   */
  Add(name: string, color: Color): void;

  /**
   * Sets a component to value and returns self.
   *
   * @param color The color.
   * @param field The field to update.
   * @param value The new value for this field.
   *
   * @category Element access
   */
  setAt(color: Color, field: "r" | "g" | "b" | "a", value: float): this;

  /**
   * Sets r, g, b, a components to given values and returns self.
   *
   * @param color The color.
   * @param r Red component.
   * @param g Green component.
   * @param b Blue component.
   * @param a Alpha component.
   *
   * @category Element access
   */
  set(color: Color, r: float, g: float, b: float, a?: float): this;

  /**
   * Returns r, g, b, a components as four separate values.
   *
   * @param color The color.
   *
   * @category Element access
   */
  get(color: Color): LuaMultiReturn<[float, float, float, float]>;

  /**
   * Returns a separate Color with identical component values.
   *
   * @param color The color.
   *
   * @category Element access
   */
  copy(color: Color): Color;

  /**
   * Returns a hex string representation of self.
   *
   * @param color The color.
   * @param includeAlpha Include or not the a value. Default true
   *
   * @category Non-Modifying
   */
  toHex(color: Color, includeAlpha?: boolean): string;

  /**
   * Returns a color string if matching this instance, nil otherwise, optional numeric tolerance param.
   *
   * @param color The color.
   * @param tolerance Numeric tolerance, by default 0.01.
   *
   * @category Non-Modifying
   */
  toString(color: Color, tolerance?: float): string;

  /**
   * Returns true if otherCol same as col, false otherwise, optional numeric tolerance param.
   *
   * @param a The first color.
   * @param b The second color.
   * @param tolerance Numeric tolerance, by default 0.01.
   *
   * @category Non-Modifying
   */
  equals(a: Color, b: Color, tolerance?: float): boolean;

  /**
   * Return a color some part of the way between col and otherCol, numeric arg [0, 1] is the fraction.
   *
   * @param a The first color.
   * @param b The second color.
   * @param fraction Numeric fraction.
   *
   * @category Non-Modifying
   */
  lerp(a: Color, b: Color, fraction?: float): boolean;

  /**
   * Return a string description of a color with an optional prefix.
   *
   * @information
   * The actual return type of this function is a multi-return of `string, float`, which is due to it's implementation.
   * The type here is changed to `string`, because it makes it easier to use in Typescript than the multi-return type.
   *
   * @param color The color.
   * @param prefix The prefix of return string.
   *
   * @category Non-Modifying
   */
  dump(color: Color, prefix?: string): string;
}

declare const Color: ColorStatic & {
  /** Shorthand for Color.fromString('addedColor'). Capitalization ignored. */
  [addedColor: string]: Maybe<Color>;
};
