---@meta

---@class tts.Component
---@field name string
---@field game_object tts.GameObject
local Component = {}

---@param name string
---@return any
function Component.get(name) end

---@return table<string, string>
function Component.getVars() end

---@param name string
---@param value any
---@return boolean
function Component.set(name, value) end
