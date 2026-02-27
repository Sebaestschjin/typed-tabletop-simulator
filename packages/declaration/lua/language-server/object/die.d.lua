---@meta

---@class tts.Die : tts.Object

--- A custom card.
---@class tts.Die : tts.Object
local Die

---@return tts.Die.Custom
function Die.getCustomObject() end

---@return tts.Die.Data
function Die.getData() end

---@alias tts.Die.Type
---| 0 D4
---| 1 D6
---| 2 D8
---| 3 D10
---| 4 D12
---| 5 D20

---@alias tts.Die.InternalName
---| 'Die_4'
---| 'Die_6'
---| 'Die_6_Rounded'
---| 'Die_8'
---| 'Die_10'
---| 'Die_12'
---| 'Die_20'

---@class tts.Die.Data : tts.Object.Data
---@field Name 'Custom_Dice' | tts.Die.InternalName
---@field RotationValues tts.Die.Data.RotationValue[]
---@field CustomImage tts.Die.Data.CustomImage

---@class tts.Die.Data.CustomImage : tts.Object.Data.CustomImage
---@field CustomDice tts.Die.Data.CustomDie

---@class tts.Die.Data.CustomDie
---@field Type tts.Die.Type

---@class tts.Die.Data.RotationValue
---@field Value number | string
---@field Rotation tts.Object.Data.Vector

---@class tts.Die.Custom : tts.Die.Custom.Options

---@class (partial) tts.Die.Custom.Options : __tts.Die.Custom.Optional
---@field image string The path/URL for the custom die.

---@class __tts.Die.Custom.Optional
---@field type tts.Die.Type The type of die, which determines its number of sides. Defaults to 1.
