---@class tts__Notes
Notes = {}

---@shape tts__Notes_GetParameter
---@field index number @Index of the tab. Indexes for notebook tabs begin at 0.
---@field title string @Title of the tab.
---@field body string @Text in the body of the tab.
---@field color tts__PlayerColor @Player Color associated with the tab.

---@return tts__Notes_GetParameter[]
function Notes.getNotebookTabs() end

---@shape tts__Notes_AddParameter
---@field title string @Title for the new tab.
---@field body nil | string @Text to place into the body of the new tab. Defaults to an empty string.
---@field color nil | tts__PlayerColor @Player Color for the new tab's color. Defaults to "Grey".

--- Add a new notebook tab. If it failed to create a new tab, a -1 is returned instead.
--- Indexes for notebook tabs begin at 0.
---@param parameters tts__Notes_AddParameter A Table containing notebook parameters.
---@return number
function Notes.addNotebookTab(parameters) end

---@shape tts__Notes_EditParameter
---@field index number @Index of the tab. Indexes for notebook tabs begin at 0.
---@field title nil | string @Title of the tab. Defaults to the current title of the tab being edited.
---@field body nil | string @Text in the body of the tab. Defaults to the current body of the tab being edited.
---@field color nil | tts__PlayerColor @Player Color associated with the tab. Defaults to the current color of the tab being edited.

--- Edit an existing Tab in the notebook. Indexes for notebook tabs begin at 0.
---@param parameters tts__Notes_EditParameter
---@return boolean
function Notes.editNotebookTab(parameters) end

--- Remove a notebook tab. Notebook tab indexes begin at 0.
---@param index number Index for the tab to remove.
---@return boolean
function Notes.removeNotebookTab(index) end

--- Returns the contents of the on-screen notes section.
---@return string
function Notes.getNotes() end

--- Replace the text in the notes window with the string
---@param notes string
function Notes.setNotes(notes) end