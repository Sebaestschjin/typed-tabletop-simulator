---@meta

---@class tts.Event.CollisionInfo
---@field collision_object tts.Object
---@field contact_points tts.NumVectorShape[]
---@field relative_velocity tts.NumVectorShape

---
--- Called when an Object starts colliding with the script-owner Object.
---
---@alias tts.Event.onCollisionEnter fun(collision_info: tts.Event.CollisionInfo): nil
---@type nil | tts.Event.onCollisionEnter
onCollisionEnter = nil

---
--- Called when an Object stops colliding with the script-owner Object.
---
---@alias tts.Event.onCollisionExit fun(collision_info: tts.Event.CollisionInfo): nil
---@type nil | tts.Event.onCollisionExit
onCollisionExit = nil

---
--- Called **every frame** that an Object is colliding with the script-owner Object.
---
--- Due to the frequency at which this function may be called, any implementation must be very simple/fast, in order to avoid slowing down your game.
---
---@alias tts.Event.onCollisionStay fun(collision_info: tts.Event.CollisionInfo): nil
---@type nil | tts.Event.onCollisionStay
onCollisionStay = nil

---
--- The `self` (the script-owner Object) is valid in this callback, but won't be valid next frame (as the Object will be destroyed by then).
---
--- This event fires immediately after onObjectDestroy().
---
---@alias tts.Event.onDestroy fun(): nil
---@type nil | tts.Event.onDestroy
onDestroy = nil

--- Called when a custom message is received from an external process via the External Editor API.
---
---@alias tts.Event.onExternalMessage fun(message: table): nil
---@type nil | tts.Event.onExternalMessage
onExternalMessage = nil

---@alias tts.Event.onLoad fun(savedState: nil | string): nil
---@type nil | tts.Event.onLoad
onLoad = nil

--- Called when an Object starts colliding with a collision registered Object.
---
---@alias tts.Event.onObjectCollisionEnter fun(registeredObject: tts.Object, collisionInfo: tts.Event.CollisionInfo): nil
---@type nil | tts.Event.onObjectCollisionEnter
onObjectCollisionEnter = nil

---
--- Called when an Object stops colliding with a collision registered Object.
---
---@alias tts.Event.onObjectCollisionExit fun(registeredObject: tts.Object, collisionInfo: tts.Event.CollisionInfo): nil
---@type nil | tts.Event.onObjectCollisionExit
onObjectCollisionExit = nil

--- Called **every frame** that an Object is colliding with a collision registered Object.
---
--- Due to the frequency at which this function may be called, any implementation must be very simple/fast, in order to avoid slowing down your game.
---@alias tts.Event.onObjectCollisionStay fun(registeredObject: tts.Object, collisionInfo: tts.Event.CollisionInfo): nil
---@type nil | tts.Event.onObjectCollisionStay
onObjectCollisionStay = nil

--- Called whenever an object is about to be destroyed.
---
--- The Object reference (`object`) is valid in this callback, but won't be valid next frame (as the Object will be destroyed by then).
---
--- This event fires immediately before the Object’s onDestroy().
---
---@alias tts.Event.onObjectDestroy fun(object: tts.Object): nil
---@type nil | tts.Event.onObjectDestroy
onObjectDestroy = nil

---
--- Called when an object enters a container.
---
---@alias tts.Event.onObjectEnterContainer fun(container: tts.Object, object: tts.Object): nil
---@type nil | tts.Event.onObjectEnterContainer
onObjectEnterContainer = nil

---
--- Called when an object leaves a container.
---
---@alias tts.Event.onObjectLeaveContainer fun(container: tts.Container, object: tts.Object): nil
---@type nil | tts.Event.onObjectLeaveContainer
onObjectLeaveContainer = nil

--- Called when an object is spawned/created.
---
---@alias tts.Event.onObjectSpawn fun(object: tts.Object): nil
---@type nil | tts.Event.onObjectSpawn
onObjectSpawn = nil

---
--- Called after an object changes state.
---
---@alias tts.Event.onObjectStateChange fun(object: tts.Object, old_guid: string): nil
---@type nil | tts.Event.onObjectStateChange
onObjectStateChange = nil

---
--- Called when a player attempts to perform an action.
---
--- Return `false` to prevent the action's default behavior.
---
---@alias tts.Event.onPlayerAction fun(player: tts.Player, action: tts.Player.Action, targets: tts.Object[]): nil | boolean
---@type nil | tts.Event.onPlayerAction
onPlayerAction = nil


---@alias tts.Event.onSave fun(): nil | string
---@type nil | tts.Event.onSave
onSave = nil

---
--- Called when the script-owner Object spawned as a result of an Object state change.
---
---@alias tts.Event.onStateChange fun(new_state_index: integer, player_color: string): nil
---@type nil | tts.Event.onStateChange
onStateChange = nil

--- Called when another object attempts to enter the script-owner Object (container).
---
--- Return `false` to prevent the object entering.
---
---@alias tts.Event.tryObjectEnter fun(object: tts.Object): nil | boolean
---@type nil | tts.Event.tryObjectEnter
tryObjectEnter = nil

--- (GLOBAL SCRIPT ONLY)
---
--- Called when an object attempts to enter a container.
---
--- Return `false` to prevent the object entering.
---
---@alias tts.Event.Global.tryObjectEnterContainer fun(container: tts.Card | tts.Container, object: tts.Object): nil | boolean
---@type nil | tts.Event.Global.tryObjectEnterContainer
tryObjectEnterContainer = nil

--- (GLOBAL SCRIPT ONLY)
---
--- Called before an object changes state. Return false to prevent the state change.
---
---@alias tts.Event.Global.tryObjectStateChange fun(object: tts.Object, new_state_index: integer, player_color: string): nil | boolean
---@type nil | tts.Event.Global.tryObjectStateChange
tryObjectStateChange = nil

--- (OBJECT SCRIPT ONLY)
---
--- Called before an object changes state. Return false to prevent the state change.
---
---@alias tts.Event.tryStateChange fun(new_state_index: integer, player_color: string): nil | boolean
---@type nil | tts.Event.tryStateChange
tryStateChange = nil


--- Called **every frame**.
---
--- Due to the frequency at which this function is called, any implementation must be very simple/fast, in order to avoid slowing down your game.
---@alias tts.Event.onUpdate fun(): nil
---@type nil | tts.Event.onUpdate
onUpdate = nil
