---@meta

---@class tts.Token : tts.Stackable
local Token

---@return tts.Token.Custom
function Token.getCustomObject() end

---@return tts.Token.Data
function Token.getData() end

---@class tts.Token.Data : tts.Object.Data
---@field Name 'Custom_Token'
---@field CustomImage tts.Token.Data.CustomImage

---@class tts.Token.Data.CustomImage : tts.Object.Data.CustomImage
---@field CustomToken tts.Token.Data.CustomToken

---@class tts.Token.Data.CustomToken
---@field Thickness number
---@field MergeDistancePixels number
---@field Stackable boolean

---@class tts.Token.Custom : tts.Token.Custom.Options

---@class (partial) tts.Token.Custom.Options : __tts.Token.Custom.Optional
---@field image string The path/URL for the custom token image.

---@class __tts.Token.Custom.Optional
---@field thickness number How thick the token is.
---@field merge_distance number How accurately the token shape will trace image edge (in pixels).
---@field stand_up boolean
---@field stackable boolean Whether these tokens stack together into a pile.
