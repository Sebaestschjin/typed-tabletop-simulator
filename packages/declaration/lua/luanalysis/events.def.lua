---@return string
function onSave() end

---@param savedState string
function onLoad(savedState) end

--- Called when a custom message is received from an external process via the External Editor API.
---@param message table The data sent by the external process.
function onExternalMessage(message) end
