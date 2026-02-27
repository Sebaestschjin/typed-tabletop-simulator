---@meta
---
--- NOTE: LayoutZones have their own file

---@class tts.Zone : tts.Object
local Zone

---@return tts.Object[]
function Zone.getObjects() end

--- If this object is a zone, bag or deck, returns the objects contained within. Otherwise, logs an error and returns nil
--- If the zone has tags, then only objects with compatible tags will occupy the zone (unless `ignoreTags` is `true`).
---@param ignoreTags? boolean If `true` then all objects in the zone will be returned, regardless of tags.
---@return tts.Object[]
function Zone.getObjects(ignoreTags) end

---@class tts.ScriptingZone : tts.Zone

---@class tts.RandomizeZone : tts.Zone

---@class tts.FogOfWarZone : tts.Zone

---@class tts.HiddenZone : tts.Zone

---@class tts.HandZone : tts.Zone
local HandZone

---@return tts.PlayerColor.Hand
function HandZone.getValue() end

---@param newValue tts.PlayerColor.Hand
---@return boolean
function HandZone.setValue(newValue) end
