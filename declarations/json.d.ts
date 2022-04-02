/** @noSelf */
declare interface JSON {
    /**
     * Value obtained from the encoded string. Can return a number, string or Table.
     *
     * @param json A String that is decoded, generally created by encode(...) or encode_pretty(...).
     *
     * @example
     *
     * ```lua
     * coded = JSON.encode("Test")
     * print(coded) --Prints "Test"
     * decoded = JSON.decode(coded)
     * print(decoded) --Prints Test
     * ```
     */
    decode(json: string): unknown;

    /**
     * Encodes data from a number, string or Table into a JSON string.
     *
     * @param data A Var, either String, Int, Float or Table, to encode as a string.
     */
    encode(data: any): string;

    /**
     * Encodes data from a number, string or Table into a JSON string. This version is slightly less efficient but is
     * easier to read.
     *
     * @param data A Var, either String, Int, Float or Table, to encode as a string.
     */
    encode_pretty(data: any): string;
}

declare var JSON: JSON;
