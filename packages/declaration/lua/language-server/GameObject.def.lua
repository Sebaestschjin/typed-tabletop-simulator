---@meta

---@class tts__GameObject
---@field name string
local GameObject = {}

---@param name string
---@return nil | tts__GameObject
function GameObject.getChild(name) end

---@return tts__GameObject[]
function GameObject.getChildren() end

---@param name string
---@return nil | tts__Component
function GameObject.getComponent(name) end

---@param name string
---@return tts__Component[]
function GameObject.getComponents(name) end

---@param name string
---@return tts__Component[]
function GameObject.getComponentsInChildren(name) end
