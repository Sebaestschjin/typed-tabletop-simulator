---@meta

---@class tts.Text : tts.Object
---@field TextTool tts.TextTool.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

--- The TextTool behavior is present on 3DText objects i.e those created with the text tool.
---
---@class tts.TextTool.Behaviour
local TextTool = {}

--- Returns Table of font Color.
---
---@return tts.Color
function TextTool.getFontColor() end

--- Returns Int of the font size.
---
---@return integer
function TextTool.getFontSize() end

--- Returns the current text. Behaves the same as Object's getValue().
---
---@see tts.Object.getValue
---@return string
function TextTool.getValue() end

--- Sets font Color.
---
---@param font_color tts.ColorParameter
---@return boolean
function TextTool.setFontColor(font_color) end

--- Sets font size.
---
---@param font_size integer
---@return boolean
function TextTool.setFontSize(font_size) end

--- Sets the current text. Behaves the same as Object's setValue(...).
---
---@see tts.Object.setValue
---@param text string
---@return boolean
function TextTool.setValue(text) end
