---@meta
--- Types for a custom deck in TTS. There is no distinction between a regular deck (the default playing cards in TTS)
--- and a custom deck. These type definitions always assume custom decks and cards.

--- A custom deck.
---@class tts.Deck : tts.Container
local Deck

---@return tts.Deck.Custom
function Deck.getCustomObject() end

---@return tts.Deck.Data
function Deck.getData() end

--- Places an card or deck onto another deck, forming a deck.
---
---@param object tts.Card | tts.Deck
---@param index? number
---@return tts.Deck
function Deck.putObject(object, index) end

--- The internal (serialized) data for a deck. A deck can contain of cards from multiple decks.
---
---@class tts.Deck.Data : tts.Object.Data
---@field Name 'Deck' | 'DeckCustom'
---@field DeckIDs number[] Despite the name, these are card IDs not deck IDs. The order matches the order from `ContainedObjects`.
---@field ContainedObjects tts.Card.Data[] The contained cards in the deck.
---@field CustomDeck table<number, tts.Deck.Data.Info> A map from deck ID to their deck information for each card in the card.

--- The internal (serialized) data for the information about a deck. Each deck saves this information for their
--- contained cards. Each card also has a reference to that information.
---
---@class tts.Deck.Data.Info
---@field FaceURL string The path/URL of the face cardsheet.
---@field BackURL string The path/URL of the back cardsheet or card back.
---@field Type tts.Card.Type The card shape.
---@field NumWidth number The number of columns on the cardsheet.
---@field NumHeight number The number of rows on the cardsheet.
---@field BackIsHidden boolean Whether the card back should be used as the hidden image (instead of the last slot of the face image).
---@field UniqueBack boolean If each card has a unique card back (via a cardsheet).

--- The custom object for a deck.
---
---@see tts.Object.getCustomObject
---
---@class tts.Deck.Custom : tts.Deck.Custom.Options

--- The custom object information for a deck.
---
---@see tts.Object.setCustomObject
---
---@class (partial) tts.Deck.Custom.Options : __tts.Deck.Custom.Optional
---@field face string The path/URL of the face cardsheet.
---@field back string The path/URL of the back cardsheet or card back.

---@class __tts.Deck.Custom.Optional
---@field type tts.Card.Type The card shape. Defaults to 0.
---@field unique_back boolean If each card has a unique card back (via a cardsheet). Defaults to `false`
---@field width number The number of columns on the cardsheet. Defaults to 10.
---@field height number The number of rows on the cardsheet. Defaults to 7.
---@field number number The number of cards on the cardsheet. Defaults to 52.
---@field sideways boolean Whether the cards are horizontal, instead of vertical. Defaults to `false`.
---@field back_is_hidden boolean Whether the card back should be used as the hidden image (instead of the last slot of the face image). Defaults to `false`.
