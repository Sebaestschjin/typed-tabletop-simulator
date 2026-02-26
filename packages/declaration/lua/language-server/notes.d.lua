---@meta

---@class tts.Notes
Notes = {}

---@class tts.Notes.Get.Options
---@field index number Index of the tab. Indexes for notebook tabs begin at 0.
---@field title string Title of the tab.
---@field body string Text in the body of the tab.
---@field color tts.PlayerColor Player Color associated with the tab.

---@return tts.Notes.Get.Options[]
function Notes.getNotebookTabs() end

---@class tts.Notes.Add.Options
---@field title string Title for the new tab.
---@field body? string Text to place into the body of the new tab. Defaults to an empty string.
---@field color? tts.PlayerColor Player Color for the new tab's color. Defaults to "Grey".

--- Add a new notebook tab. If it failed to create a new tab, a -1 is returned instead.
--- Indexes for notebook tabs begin at 0.
---@param parameters tts.Notes.Add.Options A Table containing notebook parameters.
---@return number
function Notes.addNotebookTab(parameters) end

---@class tts.Notes.Edit.Options
---@field index number Index of the tab. Indexes for notebook tabs begin at 0.
---@field title? string Title of the tab. Defaults to the current title of the tab being edited.
---@field body? string Text in the body of the tab. Defaults to the current body of the tab being edited.
---@field color? tts.PlayerColor Player Color associated with the tab. Defaults to the current color of the tab being edited.

--- Edit an existing Tab in the notebook. Indexes for notebook tabs begin at 0.
---@param parameters tts.Notes.Edit.Options
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
