---@meta

---@param label string
---@param callback tts__Hotkey_Callback
---@param triggerOnKeyUp? boolean @Defaults to false
---@return true
function addHotkey(label, callback, triggerOnKeyUp) end

---@alias tts__Hotkey_Callback fun(playerColor: tts__PlayerColor, object: tts__Object, pointerPosition: tts__Vector, isKeyUp: boolean): void

---@param label string @Text for the menu item.
---@param callback fun(playerColor: tts__PlayerHandColor, menuPosition: nil | tts__Vector): void
---@param keepOpen? boolean @Whether the context menu should remain open after the item is selected. Defaults to false.
---@param requireTable? boolean @Whether the menu item is only included if the table is being hovered over. Defaults to false.
---@return true @Technically, returns false if your `callback` param is nil. However, Luanalysis won't allow you to make that mistake.
function addContextMenuItem(label, callback, keepOpen, requireTable) end

---@return true
function clearContextMenu() end

---@param message string
---@param color? tts__ColorParameter
---@return boolean
function broadcastToAll(message, color) end

---@param message string
---@param playerColor string
---@param messageColor? string
---@return boolean
function broadcastToColor(message, playerColor, messageColor) end

---@return tts__PlayerColor[]
function getSeatedPlayers() end

---@param objects tts__Object[]
---@return (tts__Container | tts__Stackable)[]
function group(objects) end

---@param value any
---@param label? string
---@param tags? string
---@return string
function log(value, label, tags) end

---@param value any
---@param label? string
---@param tag? string
---@param concise? boolean @Default false
---@param displayTag? boolean @Default false
---@return string
function logString(value, label, tag, concise, displayTag) end

---@param message string
---@param color? tts__ColorShape | tts__PlayerColor
---@return boolean
function printToAll(message, color) end

---@param message string
---@param player tts__PlayerColor
---@param color? tts__ColorShape | tts__PlayerColor
---@return boolean
function printToColor(message, player, color) end

---@param player_color string
---@return string
function stringColorToRGB(player_color) end

---@param object tts__Object
function destroyObject(object) end

---@param message table
---@return boolean
function sendExternalMessage(message) end

---@param function_owner tts__Object
---@param function_name string
function startLuaCoroutine(function_owner, function_name) end
