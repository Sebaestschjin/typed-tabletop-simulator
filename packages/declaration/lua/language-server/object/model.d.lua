---@meta

---@alias tts.Model.Type
---| 0 Generic
---| 1 Figurine
---| 2 Dice
---| 3 Coin
---| 4 Board
---| 5 Chip
---| 6 Bag
---| 7 Infinite

---@class tts.Model.Data : tts.Object.Data
---@field CustomMesh tts.Object.Data.CustomMesh

---@class tts.Object.Custom.Model
---@field mesh string
---@field diffuse string
---@field normal string
---@field collider string
---@field convex boolean
---@field type_index tts.Model.Type
---@field material tts.Object.MaterialType
---@field cast_shadows boolean
---@field specular_intensity number
---@field specular_color number
---@field specular_sharpness tts.Color
---@field fresnel_strength number
