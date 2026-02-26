---@meta

---@alias tts.Hotkey.Handler fun(playerColor: tts.PlayerColor, object: tts.Object, pointerPosition: tts.Vector, isKeyUp: boolean): nil

---@param label string
---@param callback tts.Hotkey.Handler
---@param triggerOnKeyUp? boolean Defaults to false
---@return true
function addHotkey(label, callback, triggerOnKeyUp) end

---
--- Clears all hotkeys previously added via addHotkey(...).
---
---@return true
function clearHotkeys() end

---@alias tts.ContextMenu.Handler fun(playerColor: tts.PlayerColor.Hand, menuPosition?: tts.Vector): nil

---@param label string Text for the menu item.
---@param callback tts.ContextMenu.Handler
---@param keepOpen? boolean Whether the context menu should remain open after the item is selected. Defaults to false.
---@param requireTable? boolean Whether the menu item is only included if the table is being hovered over. Defaults to false.
---@return true
function addContextMenuItem(label, callback, keepOpen, requireTable) end

---@return true
function clearContextMenu() end

---
--- Print an on-screen message to all Players.
---
---@param message string Message to display on-screen.
---@param color? tts.ColorParameter A Table containing the RGB color tint for the text.
---@return boolean
function broadcastToAll(message, color) end

---
--- Print an on-screen message to a specified Player and their in-game chat.
---
---@param message string Message to display on-screen.
---@param playerColor string Player Color to receive the message.
---@param messageColor? tts.ColorParameter RGB color tint for the text.
---@return boolean
function broadcastToColor(message, playerColor, messageColor) end

---@return tts.PlayerColor[]
function getSeatedPlayers() end

---@param objects tts.Object[]
---@return (tts.Container | tts.Stackable)[]
function group(objects) end

---@param value any
---@param label? string
---@param tags? string
---@return string
function log(value, label, tags) end

---@param value any
---@param label? string
---@param tag? string
---@param concise? boolean Default false
---@param displayTag? boolean Default false
---@return string
function logString(value, label, tag, concise, displayTag) end

---@param message string
---@param color? tts.ColorParameter
---@return boolean
function printToAll(message, color) end

---@param message string
---@param player tts.PlayerColor
---@param color? tts.ColorParameter
---@return boolean
function printToColor(message, player, color) end

---@param player_color string
---@return string
function stringColorToRGB(player_color) end

---@param object tts.Object
function destroyObject(object) end

---@param message table
---@return boolean
function sendExternalMessage(message) end

---@param function_owner tts.Object
---@param function_name string
function startLuaCoroutine(function_owner, function_name) end
