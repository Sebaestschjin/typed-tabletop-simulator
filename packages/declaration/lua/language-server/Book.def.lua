---@meta

---@class tts__BookBehaviour
local Book

--- Clears the current highlight.
---@return boolean
function Book.clearHighlight() end

--- Gets the current page of the PDF.
---@param offsetPageNumbering? boolean
---@return number
function Book.getPage(offsetPageNumbering) end

--- Set highlight box on current page.S
---@param x1 number
---@param y1 number
---@param x2 number
---@param y2 number
---@return boolean
function Book.setHighlight(x1, y1, x2, y2) end

--- Set current page.
---@param page number
---@param offsetPageNumbering? boolean
---@return boolean
function Book.setPage(page, offsetPageNumbering) end
