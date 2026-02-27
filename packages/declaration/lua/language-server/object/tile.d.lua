---@meta

---@class tts.Tile : tts.Stackable
local Tile

---@return tts.Tile.Custom
function Tile.getCustomObject() end

---@return tts.Tile.Data
function Tile.getData() end

---@alias tts.Tile.Type
---| 0 Box
---| 1 Hex
---| 2 Circle
---| 3 Rounded

---@class tts.Tile.Data : tts.Object.Data
---@field Name 'Custom_Tile'
---@field CustomImage tts__ObjectState_TileCustomImage

---@class tts.Tile.Data.CustomImage : tts.Object.Data.CustomImage
---@field CustomTile tts.Tile.Data.CustomTile

---@class tts.Tile.Data.CustomTile
---@field Type tts.Tile.Type Determines the shape of the tile.
---@field Thickness number How thick the tile is.
---@field Stackable boolean Whether these tiles stack together into a pile.
---@field Stretch boolean

---@class tts.Tile.Custom : tts.Tile.Custom.Options

---@class (partial) tts.Tile.Custom.Options : __tts.Tile.Custom.Optional
---@field image string The path/URL for the custom tile image.

---@class __tts.Tile.Custom.Optional
---@field type tts.Tile.Type Determines the shape of the tile. Defaults to 0.
---@field image_bottom string The path/URL for the bottom-side image. Defaults to the top image.
---@field thickness number How thick the tile is. Defaults to 0.5.
---@field stackable boolean Whether these tiles stack together into a pile. Defaults to `false`.
