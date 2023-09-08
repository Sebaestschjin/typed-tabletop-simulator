/**
 * The static global [[HandsStatic|Hands]] class allows you to control the behavior of Hand Zones.
 *
 * @module Hands
 */
/**
 * The static global Hands class allows you to control the behavior of Hand Zones.
 *
 * @noSelf
 */
declare interface HandsStatic {
  /**	Whether hand zones are enabled i.e. hold objects. */
  enable: boolean;

  /** Whether hands zones belonging to a color without a seated player should be disabled. */
  disable_unused: boolean;

  /** Determines which hand contents are hidden from which players. */
  hiding: HandsHiding;

  /**
   * Returns a table of all Hand Zone Objects in the game.
   */
  getHands(): TTSObject[];
}

/** Determines which hands are hidden from which players. */
declare const enum HandsHiding {
  /** The contents of a player's hands are only visible to the owner. */
  Default = 1,
  /** The contents of a player's hands are visible to all other players, but not the owner. */
  Reverse = 2,
  /** Contents of all player hands are visible to all players. */
  Disable = 3,
}

/** The static global instance of [[HandsStatic]] */
declare const Hands: HandsStatic;
