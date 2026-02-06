---@meta

---
--- `Backgrounds` is a global which provides the ability to interact with the background.
---
--- **Example**
--- ```
--- Backgrounds.getBackground()
--- ```
---
---@class tts__Backgrounds
Backgrounds = {}

---@alias tts__BackgroundName
---| "Museum"
---| "Field"
---| "Forest"
---| "Tunnel"
---| "Cathedral"
---| "Downtown"
---| "Regal"
---| "Sunset"
---| "Custom"

---
--- Returns the current background name.
---
---@return tts__BackgroundName
function Backgrounds.getBackground() end

---
--- Returns the image URL of the current custom background, or `nil` if the current background is not custom.
---
---@return string?
function Backgrounds.getCustomURL() end

---
--- Replaces the current background with the background matching the specified `name`.
---
---@param name tts__BackgroundName
---@return true
function Backgrounds.setBackground(name) end

---
--- Replaces the current background with a custom background loaded from the specified `url`.
---
---@param url string
---@return true
function Backgrounds.setCustomURL(url) end
