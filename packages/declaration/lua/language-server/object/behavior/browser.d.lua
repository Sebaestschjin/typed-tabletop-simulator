---@meta

---
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
