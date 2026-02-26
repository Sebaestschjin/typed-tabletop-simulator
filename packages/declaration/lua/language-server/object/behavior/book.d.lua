---@meta

---
--- The Book behavior is present on Custom PDF Objects. The Book behaviour allows you to manipulate the displayed PDF.
---
---@class tts.Book.Behaviour
---@field page_offset integer The page numbers displayed in the Custom PDF UI are offset by this amount.<br>For example, if `page_offset` were set to 10, the first page in the UI would be 11, rather than 1. Negative numbers are accepted, and useful if a rule book contains a front cover, index etc. within the PDF file.
local Book

--- Clears the current highlight.
---@return boolean
function Book.clearHighlight() end

--- Gets the current page of the PDF.
---@param offsetPageNumbering? boolean @Default false. Indicates whether or not page_offset should be applied to the page number returned.
---@return number
function Book.getPage(offsetPageNumbering) end

---
--- Draws a highlight rectangle on the popout mode of the PDF at the given coordinates. Coordinates (0,0) are the lower left corner of the PDF, while coordinates (1,1) are the upper right corner.
---
---@param x1 number x coordinate of the rectangle's left side.
---@param y1 number y coordinate of the rectangle's bottom side.
---@param x2 number x coordinate of the rectangle's right side.
---@param y2 number y coordinate of the rectangle's top side.
---
--- **Example**
---
--- Highlight the upper right quarter of a PDF.
--- ```
--- object.Book.setHighlight(0.5, 0.5, 1, 1)
--- ```
---
---@return boolean
function Book.setHighlight(x1, y1, x2, y2) end

---
--- Sets the current page of the PDF. Returns true if the page was succesfully set, false if the page number was invalid.
---
---@param page number The new page number.
---@param offsetPageNumbering? boolean @Default false. Indicates whether or not page_offset should be applied to the page number set.
---@return boolean
function Book.setPage(page, offsetPageNumbering) end
