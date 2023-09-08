/**
 * @module Time
 */

/**
 * Time, not to be confused with the deprecated Timer class, is a static global class which provides access to Unity's time information.
 */
declare interface TimeStatic {
  /** The current time. Works like `os.time()` but is more accurate. */
  readonly time: float;

  /** The amount of time since the last frame. */
  readonly delta_time: float;

  /** The interval (in seconds) between physics updates. */
  readonly fixed_delta_time: float;
}

declare const Time: TimeStatic;
