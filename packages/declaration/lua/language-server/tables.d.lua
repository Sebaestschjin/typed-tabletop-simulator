---@meta

---
--- `Tables` is a global which provides the ability to interact with the Table object.
---
---@class tts.Tables
Tables = {}

---@alias tts.Table.Name
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

---@alias tts.Table.InternalName
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

---
--- Returns the image URL of the current [`Custom Table`](https://kb.tabletopsimulator.com/host-guides/tables/#custom-table), or `nil` if the current table is not a Custom Table.
---
---@return string?
function Tables.getCustomURL() end

---
--- Returns the current Table's [name](lua://tts.Object.name) i.e. equivalent to `getTableObject().name`.
---
---@return tts.Table.InternalName
function Tables.getTable() end

---
--- Returns the current Table object.
---
---@return tts.Object
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
---@param name tts.Table.Name | tts.Table.InternalName
---@return boolean
function Tables.setTable(name) end
