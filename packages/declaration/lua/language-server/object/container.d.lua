---@meta

---@class tts.Container : tts.Object
---@field Container tts.Container.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
local Container

--- Returns object's data (serialized saved state).
---@return tts.Container.Data
function Container.getData() end

--- If this object is a zone, bag or deck, returns the objects contained within. Otherwise, logs an error and returns nil
---@return tts.Object.IndexedView[]
function Container.getObjects() end

---@class tts.Stackable : tts.Object
---@field Container tts.Container.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
local Stackable

--- Places an chip onto another chip, forming a stack.
---
---@param object tts.Stackable
---@param index? number
---@return self
function Stackable.putObject(object, index) end

--- The Container behavior is present on Container objects such as Bags, Stacks and Decks.
---
---@class tts.Container.Behaviour
local ContainerBehaviour

---
---Show the Search window for the container to `player`. If you specify `max_cards` then the search will be limited to that many cards from the top of the deck.
---
---@param playerColor tts.PlayerColor The color of the player to show the Search window to.
---@param max_cards? integer Optional maximum number of cards to show.
---
---**Example**
---```lua
---deck.Container.search(Player.Blue, 3)
---```
--- <br>
function ContainerBehaviour.search(playerColor, max_cards) end

---@deprecated Use "search" instead
ContainerBehaviour.Search = ContainerBehaviour.search

---@class tts.Container.Data : tts.Object.Data
---@field ContainedObjects tts.Object.Data[]
