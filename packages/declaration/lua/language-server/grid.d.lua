---@meta

---@alias tts.Grid.Type
---| 1 Rectangles
---| 2 Horizontal hexes
---| 3 Vertical hexes
---@alias tts.Grid.Snapping
---| 1 Off
---| 2 Lines
---| 3 Center
---| 4 Both

---@class tts.Grid
---@field type tts.Grid.Type
---@field show_lines boolean
---@field color tts.Color Note: The "setter" ought to be typed tts.ColorShape but that can't be expressed right now.
---@field opacity number
---@field thick_lines boolean
---@field snapping tts.Grid.Snapping
---@field offsetX number
---@field offsetY number
---@field sizeX number
---@field sizeY number
Grid = {}
