/**
 * @module Turns
 */

/**
 * Turns, a static global class, is the in-game turns system.
 * It allows you to modify the player turns in the same way that the in-game Turns menu does.
 *
 * @noSelf
 */
declare interface TurnsStatic {
  /** Enable/disable the turns system. */
  enable: boolean;

  /** If the turn order is automatic or custom. */
  type: TurnType;

  /** A table of strings, representing the player turn order. */
  order: PlayerColor[];

  /** Enable/disable reversing turn rotation direction. */
  reverse_order: boolean;

  /** Enable/disable skipping empty hands. */
  skip_empty_hands: boolean;

  /** Enable/disable the blocking of players ability to interact with Objects when it is not their turn. */
  disable_interactations: boolean;

  /** Enable/disable a player's ability to pass their turn to another. */
  pass_turns: boolean;

  /**	The color of the Player who's turn it is. */
  turn_color: PlayerColor;

  /**
   * Returns the Player Color string of the next player in the turn order.
   */
  getNextTurnColor(): PlayerColor;

  /**
   * Returns the Player Color string of the previous player in the turn order.
   */
  getPreviousTurnColor(): PlayerColor;
}

declare const enum TurnType {
  Auto = 1,
  Custom = 2,
}

declare const Turns: TurnsStatic;
