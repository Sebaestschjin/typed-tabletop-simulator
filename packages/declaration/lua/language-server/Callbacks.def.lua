---@meta

---
--- Called **every frame**.
---
--- Due to the frequency at which this function is called, any implementation must be very simple/fast, in order to avoid slowing down your game.
---
---@type nil | fun(): void
onUpdate = nil


---
--- Called when the script-owner Object is about to be destroyed.
---
--- The `self` (the script-owner Object) is valid in this callback, but won't be valid next frame (as the Object will be destroyed by then).
---
--- This event fires immediately after onObjectDestroy().
---
---@type nil | fun(): void
onDestroy = nil

---
--- Called whenever an object is about to be destroyed.
---
--- The Object reference (`object`) is valid in this callback, but won't be valid next frame (as the Object will be destroyed by then).
---
--- This event fires immediately before the Object’s onDestroy().
---
---@type nil | fun(object: tts__Object): void
onObjectDestroy = nil

---
--- Called when an object is spawned/created.
---
---@type nil | fun(object: tts__Object): void
onObjectSpawn = nil


---
--- Called when another object attempts to enter the script-owner Object (container).
---
--- Return `false` to prevent the object entering.
---
---@type nil | fun(object: tts__Object): boolean|void
tryObjectEnter = nil

--- (GLOBAL SCRIPT ONLY)
---
--- Called when an object attempts to enter a container.
---
--- Return `false` to prevent the object entering.
---
---@type nil | fun(container: tts__Container, object: tts__Object): boolean|void
tryObjectEnterContainer = nil

---
--- Called when an object enters a container.
---
---@type nil | fun(container: tts__Object, object: tts__Object): void
onObjectEnterContainer = nil

---
--- Called when an object leaves a container.
---
---@type nil | fun(container: tts__Container, object: tts__Object): void
onObjectLeaveContainer = nil


--- (OBJECT SCRIPT ONLY)
---
--- Called before an object changes state. Return false to prevent the state change.
---
---@type fun(new_state_index: integer, player_color: string): boolean|void
tryStateChange = nil

---
--- Called when the script-owner Object spawned as a result of an Object state change.
---
---@type fun(new_state_index: integer, player_color: string): void
onStateChange = nil

--- (GLOBAL SCRIPT ONLY)
---
--- Called before an object changes state. Return false to prevent the state change.
---
---@type fun(object: tts__Object, new_state_index: integer, player_color: string): boolean|void
tryObjectStateChange = nil

---
--- Called after an object changes state.
---
---@type nil | fun(object: tts__Object, old_guid: string): void
onObjectStateChange = nil


---@class tts__CollisionInfo
---@field collision_object tts__Object
---@field contact_points tts__NumVectorShape[]
---@field relative_velocity tts__NumVectorShape

---
--- Called when an Object starts colliding with the script-owner Object.
---
---@type nil | fun(collision_info: tts__CollisionInfo): void
onCollisionEnter = nil

---
--- Called when an Object stops colliding with the script-owner Object.
---
---@type nil | fun(collision_info: tts__CollisionInfo): void
onCollisionExit = nil

---
--- Called **every frame** that an Object is colliding with the script-owner Object.
---
--- Due to the frequency at which this function may be called, any implementation must be very simple/fast, in order to avoid slowing down your game.
---
---@type nil | fun(collision_info: tts__CollisionInfo): void
onCollisionStay = nil

---
--- Called when an Object starts colliding with a collision registered Object.
---
---@type nil | fun(registeredObject: tts__Object, collisionInfo: tts__CollisionInfo): void
onObjectCollisionEnter = nil

---
--- Called when an Object stops colliding with a collision registered Object.
---
---@type nil | fun(registeredObject: tts__Object, collisionInfo: tts__CollisionInfo): void
onObjectCollisionExit = nil

--- Called **every frame** that an Object is colliding with a collision registered Object.
---
--- Due to the frequency at which this function may be called, any implementation must be very simple/fast, in order to avoid slowing down your game.
---@type nil | fun(registeredObject: tts__Object, collisionInfo: tts__CollisionInfo): void
onObjectCollisionStay = nil

---
--- Called when a player attempts to perform an action.
---
--- Return `false` to prevent the action's default behavior.
---
---@type nil | fun(player: tts__Player, action: tts__PlayerAction, targets: tts__Object[]): boolean|void
onPlayerAction = nil
