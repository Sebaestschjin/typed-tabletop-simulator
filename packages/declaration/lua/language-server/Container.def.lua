---@meta

---
--- The Container behavior is present on Container objects such as Bags, Stacks and Decks.
---
---@class tts__ContainerBehaviour
local Container

---
---Show the Search window for the container to `player`. If you specify `max_cards` then the search will be limited to that many cards from the top of the deck.
---
---@param playerColor tts__PlayerColor The color of the player to show the Search window to.
---@param max_cards? integer Optional maximum number of cards to show.
---
---**Example**
---```
---deck.Container.search(Player.Blue, 3)
---```
--- <br>
function Container.search(playerColor, max_cards) end
---@deprecated Use "search" instead
Container.Search = Container.search
