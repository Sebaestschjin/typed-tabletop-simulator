---@meta

---@class tts.Browser : tts.Object
---@field Browser tts.Browser.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

--- The Browser behavior is present on the Tablet Object.
---
--- **Example**
---
--- Instruct a Tablet Object to load the Tabletop Simulator homepage.
--- ```
--- object.Browser.url = "https://tabletopsimulator.com"
--- ```
---
---@class tts.Browser.Behaviour
---@field url string URL which currently wants to display.
---@field pixel_width integer The pixel width the browser is virtually rendering to.
local Browser = {}
