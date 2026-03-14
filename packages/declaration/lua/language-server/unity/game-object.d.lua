---@meta

---@class tts.GameObject
---@field name string
local GameObject = {}

---@param name string
---@return nil | tts.GameObject
function GameObject.getChild(name) end

---@return tts.GameObject[]
function GameObject.getChildren() end

---@param name string
---@return nil | tts.Component
function GameObject.getComponent(name) end

---@param name string
---@return tts.Component[]
function GameObject.getComponents(name) end

---@param name string
---@return tts.Component[]
function GameObject.getComponentsInChildren(name) end
