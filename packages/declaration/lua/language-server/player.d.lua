---@meta

---@alias tts.PlayerColor.Regular 'White' | 'Brown' | 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Teal' | 'Blue' | 'Purple' | 'Pink'
---@alias tts.PlayerColor.GameMaster 'Black'
---@alias tts.PlayerColor.Spectator 'Grey'
---@alias tts.PlayerTeam 'None' | 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades' | 'Jokers'
---@alias tts.PlayerRole 'Host' | 'Admin'

---@alias tts.PlayerColor.Hand tts.PlayerColor.Regular | tts.PlayerColor.GameMaster
---@alias tts.PlayerColor tts.PlayerColor.Hand | tts.PlayerColor.Spectator

---@class tts.Player
---@field admin boolean
---@field blindfolded boolean
---@field color tts.PlayerColor
---@field host boolean
---@field lift_height number
---@field promoted boolean
---@field seated boolean
---@field steam_id string
---@field steam_name string
---@field team string
local PlayerInstance = {}

---@class tts.HandTransform
---@field position tts.Vector
---@field rotation tts.Vector
---@field scale tts.Vector
---@field forward tts.Vector
---@field right tts.Vector
---@field up tts.Vector

---
--- Print message on Player's screen and their game chat log.
---
---@param message string The message to be displayed.
---@param message_color? tts.ColorShape Tint of the message text. Default `{ r=1, g=1, b=1 }`
function PlayerInstance.broadcast(message, message_color) end

--- Changes (moves) the player to the seat of an available color.
---
---@param color tts.PlayerColor
---@return boolean # `false` on failure (i.e. if the specified color is already occupied), otherwise `true`.
function PlayerInstance.changeColor(color) end

--- Clears the player's current selection.
---
---@return boolean # `false` if the player is incapable of object selection (a Grey player), otherwise `true`.
function PlayerInstance.clearSelectedObjects() end

---@param handIndex? number Default 1
---@return tts.HandTransform
function PlayerInstance.getHandTransform(handIndex) end

---@param handIndex? number Default 1
---@return tts.Object[]
function PlayerInstance.getHandObjects(handIndex) end

-- Returns an array of objects currently held by the player.

---@return tts.Object[]
function PlayerInstance.getHoldingObjects() end

--- Returns the object the player's pointer is currently hovering over.
---
---@return nil | tts.Object
function PlayerInstance.getHoverObject() end

--- Returns the world coordinates of the player's pointer.
---
---@return tts.Vector
function PlayerInstance.getPointerPosition() end

--- Returns the player's pointer's Y-axis rotation.
---
---@return number
function PlayerInstance.getPointerRotation() end

-- Returns an array of objects currently selected by the player.

---@return tts.Object[]
function PlayerInstance.getSelectedObjects() end

---@class tts.Player.Camera.Options
---@field position tts.VectorShape
---@field pitch? number
---@field yaw? number
---@field distance? number

---@param target tts.Player.Camera.Options
function PlayerInstance.lookAt(target) end

--- Emulates the player using the ping tool at the given position (tapping Tab).
---
---@param position tts.VectorShape
function PlayerInstance.pingTable(position) end

---
--- Prints a message into the Player's game chat.
---
---@param message string The text to be displayed.
---@param message_color? tts.ColorShape Default {r=1, g=1, b=1}. Color for the message text to be tinted.
function PlayerInstance.print(message, message_color) end

--- Displays info string to player.
---
---@param info string
function PlayerInstance.showInfoDialog(info) end

--- Displays info string to player. Callback is called as f(playerColor) if user hits OK.
---
---@param info string
---@param callback fun(playerColor: tts.PlayerColor)
function PlayerInstance.showConfirmDialog(info, callback) end

--- Simple text input. Callback is called as f(text, playerColor) if user hits OK.
---
---@param description string
---@param defaultText nil | string
---@param callback fun(text: string, playerColor: tts.PlayerColor)
function PlayerInstance.showInputDialog(description, defaultText, callback) end

--- Large text input. Callback is called as f(text, playerColor) if user hits OK.
---
---@param description string
---@param defaultText nil | string
---@param callback fun(text: string, playerColor: tts.PlayerColor)
function PlayerInstance.showMemoDialog(description, defaultText, callback) end

---@param description string
---@param options string[]
---@param defaultValue nil | string
---@param callback fun(option: string, optionIndex: number, playerColor: tts.PlayerColor)
function PlayerInstance.showOptionsDialog(description, options, defaultValue, callback) end

---@param defaultColor tts.ColorShape
---@param callback fun(color: tts.Color, playerColor: tts.PlayerColor)
function PlayerInstance.showColorDialog(defaultColor, callback) end

---@class tts.PlayerManager
---@field White tts.Player
---@field Brown tts.Player
---@field Red tts.Player
---@field Orange tts.Player
---@field Yellow tts.Player
---@field Green tts.Player
---@field Teal tts.Player
---@field Blue tts.Player
---@field Purple tts.Player
---@field Pink tts.Player
---@field Black tts.Player
---@field Grey tts.Player
Player = {}

--- Returns player colors for which there is a seat (i.e. at least one hand zone), irrespective of whether or not there
--- is a player seated.
---
---@return tts.PlayerColor.Hand[]
function Player.getAvailableColors() end

--- Returns all possible player colors supported by Tabletop Simulator, including GM/black and spectators/grey.
---
---@return tts.PlayerColor[]
function Player.getColors() end

--- Returns all players.
---
---@return tts.Player[]
function Player.getPlayers() end

--- Returns all spectating (grey) players.
---
---@return tts.Player[]
function Player.getSpectators() end

---@enum tts.Player.Action
Player.Action = {
  --- Copy (or commence cloning) the targets.
  Copy = 1,
  --- Cut (copy and delete) the targets.
  Cut = 2,
  --- Delete the targets.
  Delete = 3,
  --- Incrementally rotate the targets counter-clockwise around their flip axes, typically the scene's Z-axis.
  FlipIncrementalLeft = 4,
  --- Incrementally rotate the targets clockwise around their flip axes, typically the scene's Z-axis.
  FlipIncrementalRight = 5,
  --- Rotate the targets 180 degrees around their flip axes, typically the scene's Z-axis i.e. toggle the targets
  --- between face up and face down.
  FlipOver = 6,
  --- Group the targets.
  Group = 7,
  --- Paste (spawn) the targets.
  Paste = 8,
  --- Pick up the targets.
  PickUp = 9,
  --- Randomize the targets.
  Randomize = 10,
  --- Rotate the targets incrementally, typically counter-clockwise around the scene's Y-axis. Instead of being rotated
  --- exclusively around the Y-axis, dice will be rotated to the previous rotation value.
  RotateIncrementalLeft = 11,
  --- Rotate the targets incrementally, typically clockwise around the scene's Y-axis. Instead of being rotated
  --- exclusively around the Y-axis, dice will be rotated to the next rotation value.
  RotateIncrementalRight = 12,
  --- Rotate the targets 180 degrees around the scene's Y-axis.
  RotateOver = 13,
  --- Add the targets to the player's selection.
  Select = 14,
  --- Move the targets underneath objects below them on table.
  Under = 15,
}
