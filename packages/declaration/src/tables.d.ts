/**
 * @module Tables
 */

/**
 * Tables is a global which provides the ability to interact with the Table object.
 *
 * @noSelf
 */
declare interface TablesStatic {
    /**
     * Returns the image URL of the current Custom Table, or nil if the current table is not a Custom Table.
     */
    getCustomURL(): Maybe<URI>;

    /**
     * Returns the current Table's name i.e. equivalent to getTableObject().name.
     */
    getTable(): TableNameInternal;

    /**
     * Returns the current Table object.
     */
    getTableObject(): TTSObject;

    /**
     * Sets the image URL for the current Custom Table.
     *
     * Has no effect if the current Table is not a Custom Table.
     */
    setCustomURL(url: URI): boolean;

    /**
     * Replaces the current Table with the Table matching the specified name.
     */
    setTable(name: TableNameInternal | TableNameHumanReadable): boolean;
}

/** Internal name of a table. */
declare type TableNameInternal =
    | "Table_Circular"
    | "Table_Custom"
    | "Table_Custom_Square"
    | "Table_Glass"
    | "Table_Hexagon"
    | "Table_None"
    | "Table_Octagon"
    | "Table_Plastic"
    | "Table_Poker"
    | "Table_RPG"
    | "Table_Square";

/** Human readable version of a table, that can be used for `setTable`. */
declare type TableNameHumanReadable =
    | "Custom Rectangle"
    | "Custom Square"
    | "Hexagon"
    | "None"
    | "Octagon"
    | "Poker"
    | "Rectangle"
    | "Round"
    | "Round Glass"
    | "Round Plastic"
    | "Square";

declare const Tables: TablesStatic;
