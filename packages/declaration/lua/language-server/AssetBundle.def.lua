---@meta

---
---The AssetBundle behavior is present on Objects that were created from a custom AssetBundle.
---
---@class tts__AssetBundle
AssetBundle = {}

---@class tts__AssetBundle_Effect
---@field index number
---@field name string

---
--- Returns a Table with the keys "index" and "name" for each looping effect.
---
---@return tts__AssetBundle_Effect[]
function AssetBundle.getLoopingEffects() end

---
--- Index of the currently looping effect. Indexes starts at 0.
---
---@return integer
function AssetBundle.getLoopingEffectIndex() end

---
--- Returns a Table with the keys "index" and "name" for each trigger effect.
---
---@return tts__AssetBundle_Effect[]
function AssetBundle.getTriggerEffects() end

---
--- Starts playing a looping effect. Indexes starts at 0.
---
---@param index integer
---@return nil
function AssetBundle.playLoopingEffect(index) end

---
--- Starts playing a trigger effect. Indexes starts at 0.
---
---@param index integer
---@return nil
function AssetBundle.playTriggerEffect(index) end
