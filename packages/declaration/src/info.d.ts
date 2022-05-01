/**
 * @module Info
 */
/**
 * `Info` global allows you to manipulate the information about your game/mod, in the same way as the in-game Options -> Info menu.
 *
 * This information helps players find your game/mod within Tabletop Simulator's server list and via Steam Workshop's search/filter capabilities.
 */
declare interface InfoStatic {
    /** The complexity of the current game/mod. */
    complexity: string;

    /** Name of the current game/mod. */
    name: string;

    /** The number of players the current game/mod allows (from-to range). */
    number_of_players: [int, int];

    /** The amount of time the current game/mod takes (from-to range). */
    playing_time: [int, int];

    /** The tags associated with the current game/mod. */
    tags: string[];

    /** The category of the current mod. */
    type: string;
}

/** The static global class of [[InfoStatic]] */
declare const Info: InfoStatic;
