---@meta

---@class moonsharp__json
json = {}

--- Returns a table with the contents of the specified json string.
---@param text string
---@return table
function json.parse(text) end

---  Returns a json string with the contents of the specified table.
---@param table table
---@return string
function json.serialize(table) end

--- Returns true if the value specified is a null read from a json
---@param val any
---@return boolean
function json.isNull(val) end

--- Returns a special value which is a representation of a null in a json
---@return any
function json.null() end
