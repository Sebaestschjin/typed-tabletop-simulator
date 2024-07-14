/** @noSelfInFile */
/**
 * Contains information about the possible game events.
 *
 * @module Event
 */

/**
 * Called when a player puts on or takes off their blindfold.
 *
 * @param player Player who put on or took off their blindfold.
 * @param blindfolded Whether the player is now blindfolded.
 */
type OnBlindfoldHandler = (player: Player, blindfolded: boolean) => unknown;

/**
 * Called when a user sends an in-game chat message.
 * Return `false` to prevent the message appearing in the chat window.
 *
 * @param message Chat message which triggered the function.
 * @param sender Player which sent the chat message.
 */
type OnChatHandler = (message: string, sender: Player) => Maybe<boolean>;

/**
 * Called when a custom message is received from an external process via the External Editor API.
 *
 * @param data The data sent by the external process
 */
type OnExternalMessageHandler = (data: LuaTable) => unknown;

/**
 * Called every physics tick (90 times a second). This is a frame independent onUpdate().
 */
type OnFixedUpdateHandler = () => unknown;

/**
 * Called when a save has completely finished loading.
 *
 * @param scriptState The previously saved script state i.e. value returned from onSave(...), or an empty string if there is no saved script state available.
 */
type OnLoadHandler = (scriptState: Maybe<string>) => unknown;

/**
 * Called when an Object starts colliding with a collision registered Object.
 *
 * @param registeredObject The object registered to receive collision events.
 * @param collisionInfo A table containing data about the collision.
 */
type OnObjectCollisionEnterHandler = (registeredObject: TTSObject, collisionInfo: CollisionInfo) => unknown;

/**
 * Called when an Object stops colliding with a collision registered Object.
 *
 * @param registeredObject The object registered to receive collision events.
 * @param collisionInfo A table containing data about the collision.
 */
type OnObjectCollisionExitHandler = (registeredObject: TTSObject, collisionInfo: CollisionInfo) => unknown;

/**
 * Called every frame that an Object is colliding with a collision registered Object.
 *
 * @param registeredObject The object registered to receive collision events.
 * @param collisionInfo A table containing data about the collision.
 */
type OnObjectCollisionStayHandler = (registeredObject: TTSObject, collisionInfo: CollisionInfo) => unknown;

/**
 * Called whenever an object is about to be destroyed.
 * The Object reference (object) is valid in this callback, but won't be valid next frame (as the Object will be destroyed by then).
 * This event fires immediately before the Object's `onDestroy()`.
 *
 * @param object The object that is about to be destroyed.
 */
type OnObjectDestroyHandler = (object: TTSObject) => unknown;

/**
 * Called when an object is dropped by a player.
 *
 * @param player Player Color of the Player who dropped the Object.
 * @param object The Object in game which was dropped.
 */
type OnObjectDropHandler = (player: PlayerColor, object: TTSObject) => unknown;

/**
 * Called when an object enters a container. Includes decks
 *
 * @param container Container that was entered.
 * @param object Object that entered the container.
 */
type OnObjectEnterContainerHandler = (container: TTSContainer, object: TTSObject) => unknown;

/**
 * Called when an object enters a zone.
 *
 * @param zone Zone that was entered.
 * @param object Object that entered the zone.
 */
type OnObjectEnterZoneHandler = (zone: TTSObject, object: TTSObject) => unknown;

/**
 * Called when a player flicks an object.
 *
 * @param object The object that was flicked.
 * @param player Player Color of the player who flicked an object.
 * @param impulse The impulse applied to the object.
 */
type OnObjectFlickHandler = (object: TTSObject, player: PlayerColor, impulse: Vector) => unknown;

/**
 * Called when the object being hovered over by a player's pointer (cursor) changes.
 *
 * @param player Player Color of the player who moved their pointer over an object.
 * @param object Object the player's pointer is hovering over, or nil when a player moves their pointer such that it is no longer hovering over an object.
 */
type OnObjectHoverHandler = (player: PlayerColor, object: TTSObject) => unknown;

/**
 * Called when an object leaves a container.
 *
 * @param container Container the object left.
 * @param object Object that left the container.
 */
type OnObjectLeaveContainerHandler = (container: TTSContainer, object: TTSObject) => unknown;

/**
 * Called when an object leaves a zone.
 *
 * @param zone Zone that was left.
 * @param object The object that left.
 */
type OnObjectLeaveZoneHandler = (zone: TTSObject, object: TTSObject) => unknown;

/**
 * Called whenever the looping effect of an AssetBundle is activated.
 *
 * @param object AssetBundle which had its loop activated.
 * @param index Index number for the loop activated.
 */
type OnObjectLoopingEffectHandler = (object: TTSObject, index: int) => unknown;

/**
 * Called when a player types a number whilst hovering over an object.
 *
 * If you wish to prevent the default behavior (e.g. drawing a card) then you may return true to indicate you've handled the event yourself.
 *
 * @param object The object the player was hovering over whilst typing a number.
 * @param player Player Color of the player that typed the number.
 * @param number The number typed.
 */
type OnObjectNumberTypedHandler = (object: TTSObject, player: PlayerColor, number: int) => Maybe<boolean>;

/**
 * Called when a Custom PDF object changes page.
 *
 * @param object The object that's page changed.
 */
type OnObjectPageChangeHandler = (object: TTSBook) => unknown;

/**
 * Called when a player peeks at an Object.
 *
 * @param object The Object that was peeked at.
 * @param player Player Color of the player that peeked.
 */
type OnObjectPeekHandler = (object: TTSObject, player: PlayerColor) => unknown;

/**
 * Called whenever a Player picks up an Object.
 *
 * @param player Player Color of the Player who picked up the object.
 * @param object Object which was picked up.
 */
type OnObjectPickUpHandler = (player: PlayerColor, object: TTSObject) => unknown;

/**
 * Called when an Object is randomized. Like when shuffling a deck or shaking dice.
 *
 * @param object The Object which triggered this function.
 * @param player Player Color of the player who triggered the function.
 */
type OnObjectRandomizeHandler = (object: TTSObject, player: PlayerColor) => unknown;

/**
 * Called when a player rotates an object.
 *
 * @param object The object the player is trying to rotate.
 * @param spin The object's target spin (around Y-axis) rotation in degrees within the interval [0, 360).
 * @param flip The object's target flip rotation in degrees within the interval [0, 360).
 * @param player Player Color of the player that performed the rotation.
 * @param oldSpin The object's previous spin (around Y-axis) rotation in degrees within the interval [0, 360).
 * @param oldFlip The object's previous flip rotation in degrees within the interval [0, 360).
 */
type OnObjectRotateHandler = (
  object: TTSObject,
  spin: float,
  flip: float,
  player: PlayerColor,
  oldSpin: float,
  oldFlip: float
) => unknown;

/**
 * Called when a search is finished on a container.
 *
 * @param object The Object which was searched.
 * @param player Player Color of the player who triggered the function.
 */
type OnObjectSearchEndHandler = (object: TTSContainer, player: PlayerColor) => unknown;

/**
 * Called when a search is started on a container.
 *
 * @param object The Object which was searched.
 * @param player Player Color of the player who triggered the function.
 */
type OnObjectSearchStartHandler = (object: TTSContainer, player: PlayerColor) => unknown;

/**
 * Called when an object is spawned/created.
 *
 * @param object Object which was spawned.
 */
type OnObjectSpawnHandler = (object: TTSObject) => unknown;

/**
 * Called after an object changes state.
 *
 * @param object The new Object that spawned as a result of the state change.
 * @param oldStateGuid The GUID of previous state/Object.
 */
type OnObjectStateChangeHandler = (object: TTSObject, oldStateGuid: GUID) => unknown;

/**
 * Called whenever the trigger effect of an AssetBundle is activated.
 *
 * @param object AssetBundle object which had its trigger activated.
 * @param index Index number for the trigger activated.
 */
type OnObjectTriggerEffectHandler = (object: TTSObject, index: int) => unknown;

/**
 * Called when a player attempts to perform an action.
 *
 * @param player Player that is attempting the action.
 * @param action Action that is being attempted.
 * @param targets List of objects which are the target of the action being attempted.
 */
type OnPlayerActionHandler = (player: Player, action: PlayerAction, targets: TTSObject[]) => unknown;

/**
 * Called when a player changes color or selects it for the first time. It also returns "Grey" if they disconnect.
 *
 * @param player Player Color of the player who triggered the function.
 */
type OnPlayerChangeColorHandler = (player: PlayerColor) => unknown;

/**
 * Called when a player changes team.
 *
 * @param player Player Color of the player who triggered the function.
 * @param team Team to which the player has changed. Options below.
 */
type OnPlayerChangeTeamHandler = (player: PlayerColor, team: PlayerTeam) => unknown;

/**
 * Called when a Player connects to a game.
 *
 * @param player Player that connected.
 */
type OnPlayerConnectHandler = (player: Player) => unknown;

/**
 * Called when a Player disconnects from a game.
 *
 * @param player Player that disconnected.
 */
type OnPlayerDisconnectHandler = (player: Player) => unknown;

/**
 * Called when a player pings a location.
 *
 * @param player Player who performed the ping.
 * @param position The location that was pinged.
 * @param object If the player pinged on top of an object, that object.
 */
type OnPlayerPingHandler = (player: Player, position: Vector, object: Maybe<TTSObject>) => unknown;

/**
 * Called at the start of a player's turn.
 *
 * @param player Player whose turn is starting.
 * @param previousPlayer Player whose turn just finished, or nil if this is the first turn.
 */
type OnPlayerTurnHandler = (player: Player, previousPlayer: Player) => unknown;

/**
 * Called whenever a script needs to save its state.
 */
type OnSaveHandler = () => string;

/**
 * Called when a scripting button (numpad by default) is pressed. The index range that is returned is 1-10.
 *
 * @param index Index number, representing which key was pressed.
 * @param player Player Color of the player who triggered the function.
 */
type OnScriptingButtonDownHandler = (index: ScriptingButton, player: PlayerColor) => unknown;

/**
 * Called when a scripting button (numpad by default) is released. The index range that is returned is 1-10.
 *
 * @param index Index number, representing which key was released.
 * @param player Player Color of the player who triggered the function.
 */
type OnScriptingButtonUpHandler = (index: ScriptingButton, player: PlayerColor) => unknown;

/**
 * Called every frame.
 */
type OnUpdateHandler = () => unknown;

/**
 * Called when sorting is required for a group of objects being laid out by a layout zone.
 *
 * Return a table of objects (those provided in group) to override the layout zone's ordering algorithm.
 * Return `nil` to use the layout zone's default order.
 *
 * @param zone Layout zone which is laying out the group of objects.
 * @param group List of objects that are being grouped together in the layout zone.
 * @param reversed Whether the layout zone has been configured to sort in reverse.
 */
type OnZoneGroupSortHandler = (zone: TTSObject, group: TTSObject[], reversed: boolean) => Maybe<TTSObject[]>;

/**
 * Called when an object attempts to enter a container.
 *
 * Return `false` to prevent the object entering.
 *
 * @param container The container the Object is trying to enter.
 * @param object The Object entering the container.
 */
type TryObjectEnterContainerHandler = (container: TTSContainer, object: TTSObject) => Maybe<boolean>;

/**
 * Called when a player attempts to randomize an Object.
 *
 * Return `false` to prevent the Object being randomized.
 *
 * @param object The Object the player is trying to randomize.
 * @param player Player Color of the player that is attempting the randomization.
 */
type TryObjectRandomizeHandler = (object: TTSObject, player: PlayerColor) => Maybe<boolean>;

/**
 * Called when a player attempts to rotate an object.
 *
 * Return `false` to prevent the object being rotated.
 *
 * @param object The object the player is trying to rotate.
 * @param spin The object's target spin (around Y-axis) rotation in degrees within the interval [0, 360).
 * @param flip The object's target flip rotation in degrees within the interval [0, 360).
 * @param player Player Color of the player that is attempting the rotation.
 * @param oldSpin The object's current spin (around Y-axis) rotation in degrees within the interval [0, 360).
 * @param oldFlip The object's current flip rotation in degrees within the interval [0, 360).
 */
type TryObjectRotateHandler = (
  object: TTSObject,
  spin: float,
  flip: float,
  player: PlayerColor,
  oldSpin: float,
  oldFlip: float
) => Maybe<boolean>;

/**
 * Called when an Object starts colliding with the script-owner Object.
 *
 * @param collisionInfo A table containing data about the collision.
 */
type OnCollisionEnterHandler = (collisionInfo: CollisionInfo) => unknown;

/**
 * Called when an Object stops colliding with the script-owner Object.
 *
 * @param collisionInfo A table containing data about the collision.
 */
type OnCollisionExitHandler = (collisionInfo: CollisionInfo) => unknown;

/**
 * Called every frame that an Object is colliding with the script-owner Object.
 *
 * @param collisionInfo A table containing data about the collision.
 */
type OnCollisionStayHandler = (collisionInfo: CollisionInfo) => unknown;

/**
 * Called when the script-owner Object is about to be destroyed.
 */
type OnDestroyHandler = () => unknown;

/**
 * Called when a player drops the script-owner Object.
 *
 * @param player Player Color of the Player who dropped the Object.
 */
type OnDropHandler = (player: PlayerColor) => unknown;

/**
 * Called when a player flicks the script-owner Object
 *
 * @param player Player Color of the Player who dropped the Object.
 * @param impulse The impulse applied to the object.
 */
type OnFlickHandler = (player: PlayerColor, impulse: Vector) => unknown;

/**
 * Called when sorting is required for a group of objects being laid out by the script-owner layout zone.
 *
 * Return a table of objects (those provided in group) to override the layout zone's ordering algorithm.
 * Return `nil` to use the layout zone's default order.
 *
 * @param group List of objects that are being grouped together in the layout zone.
 * @param reversed Whether the layout zone has been configured to sort in reverse.
 */
type OnGroupSortHandler = (group: TTSObject[], reversed: boolean) => Maybe<TTSObject[]>;

/**
 * Called when a player moves their pointer (cursor) over the script-owner Object.
 *
 * @param player Player Color of the player who moved their pointer over an object.
 */
type OnHoverHandler = (player: PlayerColor) => unknown;

/**
 * Called when a player types a number whilst hovering over the script-owner Object.
 *
 * If you wish to prevent the default behavior (e.g. drawing a card, if the script-owner Object is a deck) then you may return `true` to indicate you've handled the event yourself.
 *
 * @param player Player Color of the player that typed the number.
 * @param number The number typed.
 */
type OnNumberTypedHandler = (player: PlayerColor, number: int) => Maybe<boolean>;

/**
 * Called when the script-owner Custom PDF's page is changed.
 */
type OnPageChangeHandler = () => unknown;

/**
 * Called when a player peeks at the script-owner Object.
 *
 * @param player Player Color of the player that peeked.
 */
type OnPeekHandler = (player: PlayerColor) => unknown;

/**
 * Called when a player picks up the script-owner Object.
 *
 * @param player Player Color of the Player who picked up the object.
 */
type OnPickUpHandler = (player: PlayerColor) => unknown;

/**
 * Called when the script-owner Object is randomized. Like when shuffling a deck or shaking dice.
 *
 * @param player Player Color of the player who triggered the function.
 */
type OnRandomizeHandler = (player: PlayerColor) => unknown;

/**
 * Called when a player rotates the script-owner Object.
 *
 * @param spin The object's target spin (around Y-axis) rotation in degrees within the interval [0, 360).
 * @param flip The object's target flip rotation in degrees within the interval [0, 360).
 * @param player Player Color of the player that performed the rotation.
 * @param oldSpin The object's previous spin (around Y-axis) rotation in degrees within the interval [0, 360).
 * @param oldFlip The object's previous flip rotation in degrees within the interval [0, 360).
 */
type OnRotateHandler = (spin: float, flip: float, player: PlayerColor, oldSpin: float, oldFlip: float) => unknown;

/**
 * Called when a player finishes searches the script-owner Object.
 *
 * @param player Player Color of the player who triggered the function.
 */
type OnSearchEndHandler = (player: PlayerColor) => unknown;

/**
 * Called when a player starts searching the script-owner Object.
 *
 * @param player Player Color of the player who triggered the function.
 */
type OnSearchStartHandler = (player: PlayerColor) => unknown;

/**
 * Called when the script-owner Object spawned as a result of an Object state change.
 *
 * @param oldStateGuid The GUID of previous state/Object.
 */
type OnStateChangeHandler = (oldStateGuid: GUID) => unknown;

/**
 * Called when another object attempts to enter the script-owner Object (container).
 *
 * Return `false` to prevent the object entering.
 *
 * @param object The object that has tried to enter the script-owner Object.
 */
type TryObjectEnterHandler = (object: TTSObject) => Maybe<boolean>;

/**
 * Called when a player attempts to randomize the script-owner Object.
 *
 * Return `false` to prevent the randomization taking place.
 *
 * @param player Player Color of the player that is attempting the randomization.
 */
type TryRandomizeHandler = (player: PlayerColor) => Maybe<boolean>;

/**
 * Called when a player attempts to rotate the script-owner Object.
 *
 * Return `false` to prevent the object being rotated.
 *
 * @param spin The object's target spin (around Y-axis) rotation in degrees within the interval [0, 360).
 * @param flip The object's target flip rotation in degrees within the interval [0, 360).
 * @param player Player Color of the player that is attempting the rotation.
 * @param oldSpin The object's current spin (around Y-axis) rotation in degrees within the interval [0, 360).
 * @param oldFlip The object's current flip rotation in degrees within the interval [0, 360).
 */
type TryRotateHandler = (
  spin: float,
  flip: float,
  player: PlayerColor,
  oldSpin: float,
  oldFlip: float
) => Maybe<boolean>;

/**
 * A table containing data about the collision.
 */
interface CollisionInfo {
  /** Object coming into contact with the `registered_object`. */
  collision_object: TTSObject;
  /** Table/array full of contact points, where each 3D point is represented by a (number indexed) table. */
  contact_points: VectorNumeric[];
  /** Table representation of a 3D vector indicating the direction and magnitude of the collision. */
  relative_velocity: VectorNumeric;
}

/** Possible index values for a scripting button. */
type ScriptingButton = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

declare interface TTSEvent {
  onBlindfold: OnBlindfoldHandler;
  onChat: OnChatHandler;
  onExternalMessage: OnExternalMessageHandler;
  onFixedUpdate: OnFixedUpdateHandler;
  onLoad: OnLoadHandler;
  onObjectCollisionEnter: OnObjectCollisionEnterHandler;
  onObjectCollisionExit: OnObjectCollisionExitHandler;
  onObjectCollisionStay: OnObjectCollisionStayHandler;
  onObjectDestroy: OnObjectDestroyHandler;
  onObjectDrop: OnObjectDropHandler;
  onObjectEnterContainer: OnObjectEnterContainerHandler;
  onObjectEnterZone: OnObjectEnterZoneHandler;
  onObjectFlick: OnObjectFlickHandler;
  onObjectHover: OnObjectHoverHandler;
  onObjectLeaveContainer: OnObjectLeaveContainerHandler;
  onObjectLeaveZone: OnObjectLeaveZoneHandler;
  onObjectLoopingEffect: OnObjectLoopingEffectHandler;
  onObjectNumberTyped: OnObjectNumberTypedHandler;
  onObjectPageChange: OnObjectPageChangeHandler;
  onObjectPeek: OnObjectPeekHandler;
  onObjectPickUp: OnObjectPickUpHandler;
  onObjectRandomize: OnObjectRandomizeHandler;
  onObjectRotate: OnObjectRotateHandler;
  onObjectSearchEnd: OnObjectSearchEndHandler;
  onObjectSearchStart: OnObjectSearchStartHandler;
  onObjectSpawn: OnObjectSpawnHandler;
  onObjectStateChange: OnObjectStateChangeHandler;
  onObjectTriggerEffect: OnObjectTriggerEffectHandler;
  onPlayerAction: OnPlayerActionHandler;
  onPlayerChangeColor: OnPlayerChangeColorHandler;
  onPlayerChangeTeam: OnPlayerChangeTeamHandler;
  onPlayerConnect: OnPlayerConnectHandler;
  onPlayerDisconnect: OnPlayerDisconnectHandler;
  onPlayerPing: OnPlayerPingHandler;
  onPlayerTurn: OnPlayerTurnHandler;
  onSave: OnSaveHandler;
  onScriptingButtonDown: OnScriptingButtonDownHandler;
  onScriptingButtonUp: OnScriptingButtonUpHandler;
  onUpdate: OnUpdateHandler;
  onZoneGroupSort: OnZoneGroupSortHandler;
  tryObjectEnterContainer: TryObjectEnterContainerHandler;
  tryObjectRandomize: TryObjectRandomizeHandler;
  tryObjectRotate: TryObjectRotateHandler;
  onCollisionEnter: OnCollisionEnterHandler;
  onCollisionExit: OnCollisionExitHandler;
  onCollisionStay: OnCollisionStayHandler;
  onDestroy: OnDestroyHandler;
  onDrop: OnDropHandler;
  onFlick: OnFlickHandler;
  onGroupSort: OnGroupSortHandler;
  onHover: OnHoverHandler;
  onNumberTyped: OnNumberTypedHandler;
  onPageChange: OnPageChangeHandler;
  onPeek: OnPeekHandler;
  onPickUp: OnPickUpHandler;
  onRandomize: OnRandomizeHandler;
  onRotate: OnRotateHandler;
  onSearchEnd: OnSearchEndHandler;
  onSearchStart: OnSearchStartHandler;
  onStateChange: OnStateChangeHandler;
  tryObjectEnter: TryObjectEnterHandler;
  tryRandomize: TryRandomizeHandler;
  tryRotate: TryRotateHandler;
}

declare let {
  onBlindfold,
  onChat,
  onExternalMessage,
  onFixedUpdate,
  onLoad,
  onObjectCollisionEnter,
  onObjectCollisionExit,
  onObjectCollisionStay,
  onObjectDestroy,
  onObjectDrop,
  onObjectEnterContainer,
  onObjectEnterZone,
  onObjectFlick,
  onObjectHover,
  onObjectLeaveContainer,
  onObjectLeaveZone,
  onObjectLoopingEffect,
  onObjectNumberTyped,
  onObjectPageChange,
  onObjectPeek,
  onObjectPickUp,
  onObjectRandomize,
  onObjectRotate,
  onObjectSearchEnd,
  onObjectSearchStart,
  onObjectSpawn,
  onObjectStateChange,
  onObjectTriggerEffect,
  onPlayerAction,
  onPlayerChangeColor,
  onPlayerChangeTeam,
  onPlayerConnect,
  onPlayerDisconnect,
  onPlayerPing,
  onPlayerTurn,
  onSave,
  onScriptingButtonDown,
  onScriptingButtonUp,
  onUpdate,
  onZoneGroupSort,
  tryObjectEnterContainer,
  tryObjectRandomize,
  tryObjectRotate,
  onCollisionEnter,
  onCollisionExit,
  onCollisionStay,
  onDestroy,
  onDrop,
  onFlick,
  onGroupSort,
  onHover,
  onNumberTyped,
  onPageChange,
  onPeek,
  onPickUp,
  onRandomize,
  onRotate,
  onSearchEnd,
  onSearchStart,
  onStateChange,
  tryObjectEnter,
  tryRandomize,
  tryRotate,
}: TTSEvent;
