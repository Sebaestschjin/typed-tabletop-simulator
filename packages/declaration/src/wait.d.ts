/**
 * @module Wait
 */

/**
 * The `Wait` class is a static global class which allows you to schedule code (functions) to be executed later on.
 *
 * @important
 * Please note that `Wait` does not pause Lua script execution, because that would freeze Tabletop Simulator!
 * The next  line of code after a `Wait` function call will always be executed immediately.
 */
/** @noSelf */
declare interface WaitStatic {
  /**
   * Schedules a function to be executed after the specified condition has been met.
   *
   * The return value is a unique ID that may be used to stop the scheduled function before it runs.
   *
   * conditionFunc will be executed (possibly several times) until it returns true, at which point the scheduled function (toRunFunc) will be executed, and conditionFunc will no longer be executed again.
   *
   * Optionally, a timeout and timeoutFunc may be specified.
   * If conditionFunc does not return true before the specified timeout (seconds) has elapsed, then the scheduled function is cancelled i.e. will not be called.
   * If a timeoutFunc is provided, then it will be called when the timeout is reached.
   *
   * @param toRunFunc The function to be executed after the specified condition is met.
   * @param conditionFunc The function that will be executed repeatedly, until it returns true (or the timeout is reached).
   * @param timeout The amount of time (in seconds) that may elapse before the scheduled function is cancelled.
   *                Optional, defaults to never timing out.
   * @param timeoutFunc The function that will be executed if the timeout is reached.
   *
   * @example
   * Roll a die, and wait until it comes to rest.
   *
   * ```lua
   * die.randomize() -- Roll a die
   * Wait.condition(
   *     function() -- Executed after our condition is met
   *         if die.isDestroyed() then
   *             print("Die was destroyed before it came to rest.")
   *         else
   *             print(die.getRotationValue() .. " was rolled.")
   *         end
   *     end,
   *     function() -- Condition function
   *         return die.isDestroyed() or die.resting
   *     end
   * )
   * ```
   *
   * @example
   * Launch an object into the air with a random impulse and wait until it comes to rest.
   * However, if it's taking too long (more than two seconds), give up waiting.
   *
   * ```lua
   * local upwardImpulse = math.random(5, 25)
   * object.addForce({0, upwardImpulse, 0})
   * Wait.condition(
   *     function()
   *         if object.isDestroyed() then
   *             print("Object was destroyed before it came to rest.")
   *         else
   *             print("The object came to rest in under two seconds.")
   *         end
   *     end,
   *     function()
   *         return object.isDestroyed() or object.resting
   *     end,
   *     2, -- second timeout
   *     function() -- Executed if our timeout is reached
   *         print("Took too long to come to rest.")
   *     end
   * )
   * ```
   */
  condition(
    toRunFunc: (this: void) => unknown,
    conditionFunc: (this: void) => boolean,
    timeout?: float,
    timeoutFunc?: (this: void) => unknown
  ): int;

  /**
   * Schedules a function to be executed after the specified number of frames have elapsed.
   *
   * The return value is a unique ID that may be used to stop the scheduled function before it runs.
   *
   * @param toRunFunc The function to be executed after the specified number of frames have elapsed.
   * @param numberFrames The number of frames that must elapse before toRunFunc is executed.
   *                     Optional, defaults to `1`.
   *
   * @example
   * Prints "Hello!" after 60 frames have elapsed.
   *
   * ```lua
   * Wait.frames(
   *     function()
   *         print("Hello!")
   *     end,
   *     60
   * )
   * ```
   *
   * It's a matter of personal preference, but it's quite common to see the above compacted into one line, like:
   *
   * ```lua
   * Wait.frames(function() print("Hello!") end, 60)
   * ```
   *
   * @example Advanced Example
   * Prints "1", "2", "3", "4", "5", waiting 60 frames before each printed number.
   *
   * Note that the scheduled function, upon execution, will reschedule itself unless count has reached 5.
   *
   * ```lua
   * local count = 1
   * local function printAndReschedule()
   *     print(count)
   *
   *     if count < 5 then
   *         count = count + 1
   *         Wait.frames(printAndReschedule, 60)
   *     end
   * end
   *
   * Wait.frames(printAndReschedule, 60)
   * ```
   */
  frames(toRunFunc: (this: void) => unknown, numberFrames?: int): int;

  /**
   * Cancels a Wait-scheduled function.
   *
   * @param id A wait ID (returned from Wait scheduling functions).
   *
   * @example
   * Schedules two functions: one that says "Hello!", and one that says "Goodbye!".
   * However, the latter is stopped before it has a chance to execute i.e. We'll see "Hello!" printed, but we won't see "Goodbye!"
   *
   * ```lua
   * Wait.time(function() print("Hello!") end, 1)
   * local goodbyeId = Wait.time(function() print("Goodbye!") end, 2)
   * Wait.stop(goodbyeId)
   * ```
   */
  stop(id: int): int;

  /**
   * Cancels all Wait-scheduled functions.
   *
   * Warning
   *
   * You should be extremely careful using this function.
   * Generally you should cancel individual scheduled functions with stop instead.
   *
   * @example
   * Schedules two functions: one that says "Hello!", and one that says "Goodbye!".
   * However, both are stopped before either has the chance to execute.
   *
   * ```lua
   * Wait.time(function() print("Hello!") end, 1)
   * Wait.time(function() print("Goodbye!") end, 2)
   * Wait.stopAll()
   * ```
   */
  stopAll(): unknown;

  /**
   * Schedules a function to be executed after the specified amount of time (in seconds) has elapsed.
   *
   * The return value is a unique ID that may be used to stop the scheduled function before it runs.
   *
   * repetitions is optional and defaults to 1.
   * When repetitions is a positive number, toRunFunc will execute for the specified number of repetitions, with the specified time delay before and between each execution.
   * When repetitions is -1, toRunFunc will be re-scheduled indefinitely (i.e. infinite repetitions).
   *
   * @param toRunFunc The function to be executed after the specified amount of time has elapsed.
   * @param seconds The amount of time that must elapse before toRunFunc is executed.
   * @param repetitions Number of times toRunFunc will be (re)scheduled.
   *                    -1 is infinite repetitions.
   *                    Optional, defaults to `1`.
   *
   * @example
   * Prints "Hello!" after 1 second has elapsed.
   *
   * ```lua
   * Wait.time(
   *     function()
   *         print("Hello!")
   *     end,
   *     1
   * )
   * ```
   *
   * It's a matter of personal preference, but it's quite common to see the above compacted into one line, like:
   *
   * ```lua
   * Wait.time(function() print("Hello!") end, 1)
   * ```
   *
   * @example
   * Prints "1", "2", "3", "4", "5", waiting 1 second before each printed number.
   *
   * ```lua
   * local count = 1
   * Wait.time(
   *     function()
   *         print(count)
   *         count = count + 1
   *     end,
   *     1, -- second delay
   *     5 -- repetitions
   * )
   * ```
   */
  time(toRunFunc: (this: void) => unknown, seconds: float, repetitions?: int): int;
}

declare const Wait: WaitStatic;
