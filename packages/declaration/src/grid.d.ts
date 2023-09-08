/**
 * [[GridStatic|Grid]], a static global class, controls the in-game grid.
 *
 * It allows you to manipulate the placement and appearance of the grid in the same way as the in-game interface.
 *
 * @module Grid
 */

/**
 * A static global class, controling the in-game grid.
 *
 * It allows you to manipulate the placement and appearance of the grid in the same way as the in-game interface.
 *
 * @noSelf
 */
declare interface GridStatic {
  /** The type of the grid. */
  type: GridType;

  /** Visibility of the grid lines. */
  show_lines: boolean;

  /** Color of the grid lines. */
  get color(): Color;
  set color(color: ColorShape);

  /** Opacity of the grid lines. */
  opacity: float;

  /** Thickness of the grid lines. `false` = thin, `true` = thick. */
  thick_lines: boolean;

  /**	Method of snapping objects to the grid. */
  snapping: GridSnapping;

  /**	X offset of the grid origin. */
  offsetX: float;

  /**	Y offset of the grid origin. */
  offsetY: float;

  /** Width of the grid cells. */
  sizeX: float;

  /** Height of the grid cells. */
  sizeY: float;
}

/** Type of the grid. */
declare const enum GridType {
  Rectangles = 1,
  HorizontalHexes = 2,
  VerticalHexes = 3,
}

/** Where objects should snap on the grid. */
declare const enum GridSnapping {
  Off = 1,
  Lines = 2,
  Center = 3,
  Both = 4,
}

/** The static global instance of [[GridStatic]] */
declare const Grid: GridStatic;
