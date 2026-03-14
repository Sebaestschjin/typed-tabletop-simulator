---@meta

--- A custom card.
---@class tts.Card : tts.Object
local Card

---@return tts.Card.Custom
function Card.getCustomObject() end

---@return tts.Card.Data
function Card.getData() end

--- Places an card onto another card, forming a deck.
---
---@param object tts.Card | tts.Deck
---@param index? number
---@return tts.Deck
function Card.putObject(object, index) end

--- The card shape.
---@alias tts.Card.Type
---| 0 Rectangle (Rounded)
---| 1 Rectangle
---| 2 Hex (Rounded)
---| 3 Hex
---| 4 Circle

--- The internal (serialized) data for a custom card.
---@class tts.Card.Data : tts.Object.Data
---@field Name 'Card' | 'CardCustom'
---@field CardID number
---@field CustomDeck table<number, tts.Deck.Data.Info>

--- The custom object for a card.
---
---@see tts.Object.getCustomObject
---
---@class tts.Card.Custom : tts.Card.Custom.Options

--- The custom object information for a card.
---
---@see tts.Object.setCustomObject
---
---@class (partial) tts.Card.Custom.Options : __tts.Card.Custom.Optional
---@field face string The path/URL of the face image.
---@field back string The path/URL of the back image.

---@class __tts.Card.Custom.Optional
---@field type tts.Card.Type The card shape. Defaults to 0.
---@field sideways boolean If the card is horizontal, instead of vertical. Defaults to `false`.
