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
type GUID = string;

declare const _G: Record<string, any>;
declare const self: TTSObject;
declare const Global: TTSObject;

type CameraMode = "ThirdPerson" | "FirstPerson" | "TopDown";
