---@meta

---
--- The Counter behavior is present on the Counter object.
---
--- **Example**
---
--- Increment a counter's value.
--- ```
--- object.Counter.increment()
--- ```
---
---@class tts.Counter.Behaviour
local Counter = {}

---
--- Resets Counter to 0.
---
---@return boolean
function Counter.clear() end

---
--- Reduces Counter's value by 1.
---
---@return boolean
function Counter.decrement() end

---
--- Returns Counter's current value. This function behaves the same as Object's getValue().
---
---@see tts.Object.getValue
---@return integer
function Counter.getValue() end

---
--- Increases Counter's value by 1.
---
---@return boolean
function Counter.increment() end

---
--- Sets the current value of the Counter. This function behaves the same as Object's setValue().
---
---@see tts.Object.setValue
---@param value integer
---@return boolean
function Counter.setValue(value) end
