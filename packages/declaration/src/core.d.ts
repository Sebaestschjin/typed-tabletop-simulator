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

declare const _G: {
    onBlindfold?: OnBlindfoldHandler;
    onChat?: OnChatHandler;
    onExternalMessage?: OnExternalMessageHandler;
    onFixedUpdate?: OnFixedUpdateHandler;
    onLoad?: OnLoadHandler;
    onObjectCollisionEnter?: OnObjectCollisionEnterHandler;
    onObjectCollisionExit?: OnObjectCollisionExitHandler;
    onObjectCollisionStay?: OnObjectCollisionStayHandler;
    onObjectDestroy?: OnObjectDestroyHandler;
    onObjectDrop?: OnObjectDropHandler;
    onObjectEnterContainer?: OnObjectEnterContainerHandler;
    onObjectEnterZone?: OnObjectEnterZoneHandler;
    onObjectFlick?: OnObjectFlickHandler;
    onObjectHover?: OnObjectHoverHandler;
    onObjectLeaveContainer?: OnObjectLeaveContainerHandler;
    onObjectLeaveZone?: OnObjectLeaveZoneHandler;
    onObjectLoopingEffect?: OnObjectLoopingEffectHandler;
    onObjectNumberTyped?: OnObjectNumberTypedHandler;
    onObjectPageChange?: OnObjectPageChangeHandler;
    onObjectPeek?: OnObjectPeekHandler;
    onObjectPickUp?: OnObjectPickUpHandler;
    onObjectRandomize?: OnObjectRandomizeHandler;
    onObjectRotate?: OnObjectRotateHandler;
    onObjectSearchEnd?: OnObjectSearchEndHandler;
    onObjectSearchStart?: OnObjectSearchStartHandler;
    onObjectSpawn?: OnObjectSpawnHandler;
    onObjectStateChange?: OnObjectStateChangeHandler;
    onObjectTriggerEffect?: OnObjectTriggerEffectHandler;
    onPlayerAction?: OnPlayerActionHandler;
    onPlayerChangeColor?: OnPlayerChangeColorHandler;
    onPlayerChangeTeam?: OnPlayerChangeTeamHandler;
    onPlayerConnect?: OnPlayerConnectHandler;
    onPlayerDisconnect?: OnPlayerDisconnectHandler;
    onPlayerPing?: OnPlayerPingHandler;
    onPlayerTurn?: OnPlayerTurnHandler;
    onSave?: OnSaveHandler;
    onScriptingButtonDown?: OnScriptingButtonDownHandler;
    onScriptingButtonUp?: OnScriptingButtonUpHandler;
    onUpdate?: OnUpdateHandler;
    onZoneGroupSort?: OnZoneGroupSortHandler;
    tryObjectEnterContainer?: TryObjectEnterContainerHandler;
    tryObjectRandomize?: TryObjectRandomizeHandler;
    tryObjectRotate?: TryObjectRotateHandler;
    onCollisionEnter?: OnCollisionEnterHandler;
    onCollisionExit?: OnCollisionExitHandler;
    onCollisionStay?: OnCollisionStayHandler;
    onDestroy?: OnDestroyHandler;
    onDrop?: OnDropHandler;
    onFlick?: OnFlickHandler;
    onGroupSort?: OnGroupSortHandler;
    onHover?: OnHoverHandler;
    onNumberTyped?: OnNumberTypedHandler;
    onPageChange?: OnPageChangeHandler;
    onPeek?: OnPeekHandler;
    onPickUp?: OnPickUpHandler;
    onRandomize?: OnRandomizeHandler;
    onRotate?: OnRotateHandler;
    onSearchEnd?: OnSearchEndHandler;
    onSearchStart?: OnSearchStartHandler;
    onStateChange?: OnStateChangeHandler;
    tryObjectEnter?: TryObjectEnterHandler;
    tryRandomize?: TryRandomizeHandler;
    tryRotate?: TryRotateHandler;
    [_: string]: any;
};
declare const self: TTSObject;
declare const Global: TTSObject;

type CameraMode = "ThirdPerson" | "FirstPerson" | "TopDown";
