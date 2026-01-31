---@meta

---
--- `Tables` is a global which provides the ability to interact with the Table object.
---
---@class tts__Tables
Tables = {}

---@alias tts__TableState_Name
---| "Table_Circular"
---| "Table_Custom"
---| "Table_Custom_Square"
---| "Table_Glass"
---| "Table_Hexagon"
---| "Table_None"
---| "Table_Octagon"
---| "Table_Plastic"
---| "Table_Poker"
---| "Table_RPG"
---| "Table_Square"

---@alias tts__TableName
---| "Custom Rectangle"
---| "Custom Square"
---| "Hexagon"
---| "None"
---| "Octagon"
---| "Poker"
---| "Rectangle"
---| "Round"
---| "Round Glass"
---| "Round Plastic"
---| "Square"

---
--- Returns the image URL of the current [`Custom Table`](https://kb.tabletopsimulator.com/host-guides/tables/#custom-table), or `nil` if the current table is not a Custom Table.
---
---@return string?
function Tables.getCustomURL() end

---
--- Returns the current Table's [name](lua://tts__Object.name) i.e. equivalent to `getTableObject().name`.
---
---@return tts__TableState_Name
function Tables.getTable() end

---
--- Returns the current Table object.
---
---@return tts__Object
function Tables.getTableObject() end

---
--- Sets the image URL for the current [`Custom Table`](https://kb.tabletopsimulator.com/host-guides/tables/#custom-table). Has no effect if the current Table is not a Custom Table.
---
---@param url string
---@return boolean
function Tables.setCustomURL(url) end

---
--- Replaces the current Table with the Table matching the specified `name`.
---
--- **Example**
---
--- Replace the current Table with the Poker Table.
--- ```
--- Tables.setTable("Poker")
--- ```
--- <br>
---@param name tts__TableName | tts__TableState_Name
---@return boolean
function Tables.setTable(name) end
