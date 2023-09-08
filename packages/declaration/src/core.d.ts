/**
 * Core type definitions.
 *
 * @module Core
 */

/** Denotes an optional return type. Can either be the given type or {@link nil} */
type Maybe<T> = T | nil;

/**
 * Make the given fields of T optional and leaves the others as is.
 */
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

/**
 * Makes all fields of T optional, expect the ones given as K. Those fields will become required.
 */
type AllOptionalExpect<T, K extends keyof T> = Partial<T> & Pick<Required<T>, K>;

/** Alias for Lua's nil */
type nil = undefined;
/**
 * Not really a different type as Lua only knows floating point numbers, but makes it more clear that an int is
 * expected here.
 */
type int = number;
type float = number;
/** An alias representing the global ID of an object. */
type GUID = string;
/** An alias representing an asset URI. */
type URI = string;
/** A hex value. */
type Hex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "A" | "B" | "C" | "D" | "E" | "F";

declare const self: TTSObject;
declare const Global: TTSObject;

type CameraMode = "ThirdPerson" | "FirstPerson" | "TopDown";

declare const _G: Record<string, any>;
