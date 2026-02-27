---@meta

---@class tts.RPGFigurine : tts.Object
---@field RPGFigurine tts.RPGFigurine.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

--- The RPGFigurine behavior is present on Objects that are figurines with built-in animations i.e. RPG Kit objects.
---
---@class tts.RPGFigurine.Behaviour
---@field onAttack nil | fun(hitObjects: tts.Object[]): nil These are `RPGFigurine` member variables which can be assigned a function that will be executed in response to an event occurring.
---@field onHit nil | fun(attacker: tts.Object): nil        These are `RPGFigurine` member variables which can be assigned a function that will be executed in response to an event occurring.
local RPGFigurine = {}

--- Executed when an attack is performed by the RPGFigurine Object.
---
--- An attack is triggered via the context menu or by pressing the appropriate number key. If another RPGFigurine is within its attack arc, then onHit will be executed on the other figurine.
---
---@see tts.RPGFigurineBehaviour.onHit
---@param hitObjects tts.Object[] A table of RPGFigurine Objects within the reach of the attack.
---@return nil
function RPGFigurine.onAttack(hitObjects) end

--- Executed when the RPGFigurine Object is hit by another attacking RPGFigure Object.
---
--- An attack is triggered via the context menu or by pressing the appropriate number key. If this RPGFigurine Object is within the attack radius of an attacker, this function will be executed.
---
---@param attacker tts.Object The RPGFigurine Object performing the attack.
---@return nil
function RPGFigurine.onHit(attacker) end

--- Plays a random attack animation.
---
---@return boolean
function RPGFigurine.attack() end

--- Changes the figurine's current mode. What the mode represents is based on the figurine.
---
---@return boolean
function RPGFigurine.changeMode() end

--- Plays the death animation or causes it to return to life.
---
---@return boolean
function RPGFigurine.die() end
