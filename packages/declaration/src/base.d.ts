/** @noSelfInFile */
/**
 * These are a loose collection of functions which can be used to perform a variety of actions within Tabletop Simulator.
 *
 * These functions can utilize in-game Objects, but none of them can be enacted on in-game Objects.
 * They all deal with the game space.
 *
 * @module Base
 */

/**
 * Adds a menu item to the Global right-click context menu.
 * Global menu is shown when player right-clicks on empty space or table.
 *
 * @param label Label for the menu item.
 * @param toRunFunc Execute if menu item is selected.
 * @param keepOpen Keep context menu open after menu item was selected.
 *                 Optional, Default false.
 *                 Close context menu after selection.
 * @param requireTable Show added menu item when right-clicked on empty space or table.
 *                     Optional, Default false.
 *                     Show when right-clicked on empty space or table
 *
 * @example
 * ```lua
 * function onLoad()
 *     addContextMenuItem("doStuff", itemAction)
 * end
 *
 * function itemAction(player_color, menu_position)
 *     print(player_color)
 * end
 * ```
 * @category Global
 */
declare function addContextMenuItem(
  label: string,
  /**
   * @param playerColor Player Color who selected the menu item.
   * @param menuPosition Global position of the right-click context menu.
   */
  toRunFunc: (playerColor: PlayerColor, menuPosition: Vector) => unknown,
  keepOpen?: boolean,
  requireTable?: boolean
): boolean;

/**
 * Clears all menu items added by function [[addContextMenuItem]].
 *
 * @category Global
 */
declare function clearContextMenu(): boolean;

/**
 * Copy a list of Objects to the clipboard. Works with [[paste]].
 *
 * @param objects A Table of in-game objects to be copied.
 *                This is similar to highlighting the objects in-game and copying them.
 *
 * @example
 * ```lua
 * object_list = {
 *     getObjectFromGUID("######"),
 *     getObjectFromGUID("######"),
 * }
 * copy(object_list)
 * ```
 *
 * @category Global
 */
declare function copy(objects: TTSObject[]): boolean;

/**
 * Destroy an Object.
 *
 * @param object The Object you wish to delete from the instance.
 *
 * @category Global
 */
declare function destroyObject(object: TTSObject): boolean;

/**
 * Flip the table.
 *
 * @category Global
 */
declare function flipTable(): boolean;

/**
 * Returns Object by its GUID. Will return nil if this GUID doesn't currently exist.
 *
 * @param guid GUID of the Object to get a reference of.
 *             GUID can be obtained by right clicking an object and going to Scripting.
 *             In a script, it can be obtained from any Object by using [[TTSObject.getGUID()]].
 *
 * @category Global
 */
declare function getObjectFromGUID<T extends TTSObject>(guid: GUID): Maybe<T>;

/**
 * Returns a Table of all Objects in the game.
 *
 * @category Global
 */
declare function getObjects(): TTSObject[];

/**
 * Returns Table of all Objects which have the specified tag attached.
 *
 * @param tag The tag.
 *
 * @category Global
 */
declare function getObjectsWithTag(tag: string): TTSObject[];

/**
 * Returns Table of all Objects which have at least one of the specified tags attached.
 *
 * @param tags The list of tags.
 *
 * @category Global
 */
declare function getObjectsWithAnyTags(tags: string[]): TTSObject[];

/**
 * Returns Table of all Objects which have all of the specified tags attached.
 *
 * @param tags The list of tags.
 *
 * @category Global
 */
declare function getObjectsWithAllTags(tags: string[]): TTSObject[];

/**
 * Returns a Table of the Player Colors strings of seated players.
 *
 * @category Global
 */
declare function getSeatedPlayers(): PlayerColor[];

/**
 * Groups objects together, like how the G key does for players.
 * It returns a table of object references to any decks/stacks formed.
 * Not all objects CAN be grouped. If the G key won't work on them, neither will this function.
 *
 * @param objects A list of objects to be grouped together.
 * @returns A table containing the grouped objects, numerically indexed.
 *          Different types of object are grouped independently i.e. cards will form into a deck, each type of checker will form their own stack.
 *
 * @example
 * ```lua
 * function onLoad()
 *     local objects = {
 *         -- IMPORTANT: To get the example to work, you need to replace ###### by a real GUID of the object.
 *         getObjectFromGUID("######"), -- card
 *         getObjectFromGUID("######"), -- card
 *         getObjectFromGUID("######"), -- checker
 *         getObjectFromGUID("######"), -- checker
 *     }
 *     local objGroupedList = group(objects)
 *     log(objGroupedList)
 * end
 * ```
 *
 * @category Global
 */
declare function group(objects: TTSObject[]): TTSObject[];

/**
 * Pastes Objects in-game that were copied to the in-game clipboard. Works with [[copy]].
 *
 * @param parameters A Table containing instructions of where to spawn the Objects.
 *
 * @category Global
 */
declare function paste(parameters: {
  /**
   * Position of the first object to paste.
   *
   * @defaultValue {0, 3, 0}
   */
  position?: VectorShape;

  /**
   * If snap-to-grid is active on the spawned items.
   *
   * @defaultValue false
   */
  snap_to_grid?: boolean;
}): TTSObject[];

/**
 * Enables/disables looking for group.
 * This is visible in the server browsers, indicating if you are recruiting for a game.
 *
 * @category Global
 */
declare function setLookingForPlayers(lfp: boolean): boolean;

/** Parameters shared by all spawn functions. */
interface SpawnParamater {
  /** Position where the object will be spawned. When specified, overrides the Transform position in data. */
  position?: VectorShape;

  /** Rotation of the spawned object. When specified, overrides the Transform rotation in data. */
  rotation?: VectorShape;

  /** Scale of the spawned object. When specified, overrides the Transform scale in data. */
  scale?: VectorShape;

  /** Called when the object has finished spawning. The spawned object will be passed as the first and only parameter. */
  callback_function?: ObjectCallback;
}

/** Parameters for the [[spawnObject]] function. */
interface SpawnObjectParameters extends SpawnParamater {
  /** Built-in or Custom Game Object name. */
  type: ObjectName;

  /** Whether a sound will be played as the object spawns. */
  sound?: boolean;

  /** Whether upon spawning, the object will snap to nearby grid lines (or snap points). */
  snap_to_grid?: boolean;
}

/**
 * Spawns an object.
 *
 * Refer to the spawnable Built-in Object and Custom Object pages for details about the types of objects that can be spawned.
 *
 * If you are spawning a Custom Object, you should immediately call [[setCustomObject]] on the object returned from `spawnObject`.
 *
 * Objects take a moment to spawn.
 * The purpose of `callback_function` is to allow you to execute additional code after the object has finished spawning.
 *
 * @param parameters type is mandatory, all other properties are optional.
 *                   When a property is omitted, it will be given the corresponding default value (above).
 *
 * @example
 * ```lua
 * local object = spawnObject({
 *     type = "rpg_BEAR",
 *     position = {0, 3, 0},
 *     scale = {2, 2, 2},
 *     sound = false,
 *     callback_function = function(spawned_object)
 *         log(spawned_object.getBounds())
 *     end
 * })
 * object.setPositionSmooth({10, 5, 10})
 * ```
 *
 * @category Global
 */
declare function spawnObject(parameters: SpawnObjectParameters): TTSObject;

/** Parameters for the [[spawnObjectData]] function. */
interface SpawnObjectDataParameters extends SpawnParamater {
  /**
   * Table with properties describing the object that will be spawned.
   * Required content depends on the type of object being spawned.
   */
  data: ObjectData;
}

/**
 * Spawns an object from an object data table representation.
 *
 * This API gives you complete control over all persistent properties that an object has.
 *
 * Objects take a moment to spawn.
 * The purpose of `callback_function` is to allow you to execute additional code after the object has finished spawning.
 *
 * You can derive your data table from another object by calling [[TTSObject.getData|getData]] on it, and manipulating the resultant table as you see fit.
 *
 * @param parameters data is mandatory, all other properties are optional.
 *                   When a property is omitted, it will be given the corresponding default value (above).
 *
 * @example
 * ```lua
 * local object = spawnObjectData({
 *     data = {
 *         Name = "rpg_BEAR",
 *         Transform = {
 *             posX = 0,
 *             posY = 3,
 *             posZ = 0,
 *             rotX = 0,
 *             rotY = 180,
 *             rotZ = 0,
 *             scaleX = 2,
 *             scaleY = 2,
 *             scaleZ = 2
 *         },
 *         ColorDiffuse = {
 *             r = 0.3,
 *             g = 0.5,
 *             b = 0.8
 *         }
 *     },
 *     callback_function = function(spawned_object)
 *         log(spawned_object.getBounds())
 *     end
 * })
 * object.setPositionSmooth({10, 5, 10})
 * ```
 *
 * @category Global
 */
declare function spawnObjectData(parameters: SpawnObjectDataParameters): TTSObject;

/** Parameters for the [[spawnObjectJSON]] function. */
declare interface SpawnObjectJSONParameters extends SpawnParamater {
  /**
   * JSON string describing the object that will be spawned.
   * Required content depends on the type of object being spawned.
   */
  json: string;
}

/**
 * Spawns an object from a JSON string.
 *
 * This API gives you complete control over all persistent properties that an object has.
 *
 * Unless you've already got an object's JSON representation at your disposal then [[spawnObjectData()]] is the preferred API as it's less resource intensive.
 *
 * Objects take a moment to spawn.
 * The purpose of callback_function is to allow you to execute additional code after the object has finished spawning.
 *
 * @param parameters json is mandatory, all other properties are optional.
 *                   When a property is omitted, it will be given the corresponding default value (above).
 *
 * @example
 * ```lua
 * local object = spawnObjectJSON({
 *     json = [[{
 *         "Name": "rpg_BEAR",
 *         "Transform": {
 *             "posX": 0,
 *             "posY": 3,
 *             "posZ": 0,
 *             "rotX": 0,
 *             "rotY": 180,
 *             "rotZ": 0,
 *             "scaleX": 2,
 *             "scaleY": 2,
 *             "scaleZ": 2
 *         },
 *         "ColorDiffuse": {
 *             "r": 0.3,
 *             "g": 0.5,
 *             "b": 0.8
 *         }
 *     }]],
 *     callback_function = function(spawned_object)
 *         log(spawned_object.getBounds())
 *     end
 * })
 * object.setPositionSmooth({10, 5, 10})
 * ```
 * @category Global
 */
declare function spawnObjectJSON(parameters: SpawnObjectJSONParameters): TTSObject;

/**
 * Start a coroutine.
 *
 * A coroutine is similar to a function, but has the unique ability to have its run paused until the next frame of the game using coroutine.yield(0).
 *
 * > **Attention** You MUST return a 1 at the end of any coroutine or it will throw an error.
 *
 * @param functionOwner The Object that the function being called is on. Global is a valid target.
 * @param functionName Name of the function being called as a coroutine.
 *
 * @example
 * ```lua
 * function onLoad()
 *     startLuaCoroutine(Global, "print_coroutine")
 * end
 *
 * -- Prints a message, waits 250 frames, prints another message
 * function print_coroutine()
 *     print("Routine has Started")
 *     count = 0
 *     while count < 250 do
 *         count = count + 1
 *         coroutine.yield(0)
 *     end
 *
 *     print("Routine has Finished")
 *
 *     return 1
 * end
 * ```
 * @category Global
 */
declare function startLuaCoroutine(functionOwner: TTSObject, functionName: string): boolean;

/**
 * The function that will be executed whenever the hotkey is pressed, and also when released if triggerOnKeyUp is true.
 *
 * @param playerColor Player Color of the player that pressed the hotkey.
 * @param hoveredObject The object that the Player's pointer was hovering over at the moment the key was pressed/released.
 *                      nil if no object was under the Player's pointer at the time.
 * @param pointerPosition World Position of the Player's pointer at the moment the key was pressed/released
 * @param isKeyUp Whether this callback is being triggered in response to a hotkey being released.
 *
 * @category Hotkeys
 */
type HotkeyCallback = (
  playerColor: PlayerColor,
  hoveredObject: Maybe<TTSObject>,
  pointerPosition: Vector,
  isKeyUp: boolean
) => unknown;

/**
 * Adds a bindable hotkey to the game.
 *
 * Players can bind key to hotkeys from the Options -> Game Keys UI after this function is called.
 *
 * @important
 * Added hotkeys are unable to persist between loads/rewinds, because the bound callback function may no longer exist.
 * Therefore [[addHotkey()]] needs to be called each time the game is loaded.
 * As long as the same labels are used, then player hotkey bindings will persist.
 *
 * Hotkey bindings do not prevent the behavior of Settings key bindings i.e. if R (shuffle by default) is assigned as a hotkey, the hotkey callback and the default shuffle behavior will both be executed whenever R is pressed.
 *
 * @param label A label displayed to users.
 * @param callback The function that will be executed whenever the hotkey is pressed, and also when released if `triggerOnKeyUp` is true.
 * @param triggerOnKeyUp Whether the callback is also executed when the hotkey is released.
 *                       The callback is always triggered when the hotkey is pressed. Optional, defaults to false.
 *
 * @example
 * ```lua
 * addHotkey("My Hotkey", function(playerColor, object, pointerPosition, isKeyUp)
 *     local action = isKeyUp and "released" or "pressed"
 *     print(playerColor .. " " .. action .. " the hotkey")
 * end, true)
 * ```
 *
 * @category Hotkeys
 */
declare function addHotkey(label: string, callback: HotkeyCallback, triggerOnKeyUp?: boolean): boolean;

/**
 * Clears all hotkeys previously added via [[addHotkey()]].
 *
 * @category Hotkeys
 */
declare function clearHotkeys(): boolean;

/**
 * Shows the hotkey configuration window under Options->Game Keys.
 *
 * @category Hotkeys
 */
declare function showHotkeyConfig(): boolean;

/**
 * Print an on-screen message to all Players.
 *
 * @param message Message to display on-screen.
 * @param messageTint A Table containing the RGB color tint for the text.
 *
 * @example
 * ```lua
 * msg = "Hello all."
 * rgb = {r=1, g=0, b=0}
 * broadcastToAll(msg, rgb)
 * ```
 *
 * @category Message
 */
declare function broadcastToAll(message: string, messageTint?: ColorValue): boolean;

/**
 * Print an on-screen message to a specified Player and their in-game chat.
 *
 * @param message Message to display on-screen.
 * @param playerColor Player Color to receive the message.
 * @param messageTint RGB color tint for the text.
 *
 * @example
 * ```lua
 * msg = "Hello White."
 * color = "White"
 * rgb = {r=1, g=0, b=0}
 * broadcastToColor(msg, color, rgb)
 * ```
 *
 * @category Message
 */
declare function broadcastToColor(message: string, playerColor: PlayerColor, messageTint?: ColorValue): boolean;

/**
 * Logs a message to the host's System Console (accessible from ~ pane of in-game chat window).
 *
 * If value is not already a string, then it will be converted to a human-readable representation.
 *
 * If value is a , then the table's contents (keys & values) will be displayed.
 * The contents of nested tables will also be displayed up to a user-configurable depth.
 *
 * @information
 * Table contents max depth is configurable via the log_max_table_depth System Console command.
 *
 * As an advanced feature, multiple log tags may be provided by space-separating several tags (in the one String) provided as the tags parameter.
 * The message style will be taken from the first tag that the user has not explicitly disabled.
 *
 * @param value The value you want to log.
 * @param label Text to be logged before value.
 *              Optional, defaults to an empty String.
 *              Empty Strings are not displayed.
 * @param tags The log tag/style or a space separated list of log tags/styles (See: [[logStyle()]]).
 *             Optional, defaults to logging with the <default> log style.
 *
 * @example
 * ```lua
 * log("Something happened")
 * log(getObjects())
 * log("Something unexpected happened.", "Oh no!", "error")
 * ```
 *
 * @category Message
 */
declare function log(value: any, label?: string, tags?: string): boolean;

/**
 * Returns a String formatted similarly to the output of [[log()]].
 *
 * If value is not already a string, then it will be converted to a human-readable representation.
 *
 * If value is a table, then the table's contents (keys & values) will be included in the resultant String.
 * The contents of nested tables will also be displayed up to a user-configurable depth.
 *
 * @information
 * Table contents max depth is configurable via the log_max_table_depth System Console command.
 *
 * In some circumstances log strings have newlines inserted e.g. between the label and the textual representation of value.
 * Providing true as the value for concise will use space separators instead of newlines.
 *
 * @param value The value you want to log.
 * @param label Text to be logged before value.
 *              Optional, defaults to an empty String.
 *              Empty Strings are not displayed.
 * @param tags The log tag/style or a space separated list of log tags/styles.
 *             Optional, defaults to logging without any tags.
 * @param concise Whether the resultant String should be generated in a more compact form (less newline characters).
 *                Optional, defaults to `false`.
 * @param displayTag Whether the specified tag(s) should be included as prefix of the resultant String.
 *                   Optional, defaults to `false`.
 *
 * @example
 * ```lua
 * print(logString(getObjects()))
 * ```
 *
 * @category Message
 */
declare function logString(value: any, label?: string, tags?: string, concise?: boolean, displayTag?: boolean): string;

/**
 * Configures style options for a [[log()]] tag.
 *
 * @information
 * Tag log styles can also be set via the System Console with the log_style_tag command.
 *
 * @param tag A String of the log's tag.
 * @param tint RGB value to tint the log entry's text. String color will also work. Example: "Red"
 * @param prefix Text to place before this type of log entry.
 *               Optional, defaults to an empty String.
 *               Empty Strings are not displayed.
 * @param postfix Text to place after this type of log entry.
 *                Optional, defaults to an empty String.
 *                Empty Strings are not displayed.
 *
 * @example
 * ```lua
 * logStyle("seats", {0.5, 0.5, 0.5}, "", "End List")
 * log(Player.getAvailableColors(), nil, "seats")
 * ```
 *
 * @category Message
 */
declare function logStyle(tag: string, tint: ColorValue, prefix?: string, postfix?: string): boolean;

/**
 * Print a string into chat that only the host is able to see.
 *
 * Used for debugging scripts.
 *
 * @param message Text to print into the chat log.
 *
 * @category Message
 */
declare function print(...message: any[]): nil;

/**
 * Print a message into the in-game chat of all connected players.
 *
 * @param message Message to place into players' in-game chats.
 * @param messageTint RGB values for the text's color tint.
 *
 * @example
 * ```lua
 * printToAll("Hello World!", {r=1,g=0,b=0})
 * ```
 *
 * @category Message
 */
declare function printToAll(message: string, messageTint: ColorValue): boolean;

/**
 * Print a message to the in-game chat of a specific player.
 *
 * @param message Message to place into the player's in-game chat.
 * @param playerColor Player Color of the player that will receive the message.
 * @param messageTint RGB values for the text's color tint.
 *
 * @example
 * ```lua
 * printToColor("Hello Red.", "Red", {r=1,g=0,b=0})
 * ```
 *
 * @category Message
 */
declare function printToColor(message: string, playerColor: PlayerColor, messageTint: ColorValue): boolean;

/**
 * Send a table to your external script editor, most likely Atom.
 *
 * This is for custom editor functionality.
 *
 * @param data The data to send
 *
 * @category Message
 */
declare function sendExternalMessage(data: any): boolean;
