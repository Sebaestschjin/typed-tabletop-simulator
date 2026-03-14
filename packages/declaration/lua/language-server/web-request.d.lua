---@meta

---@class tts.WebRequest.Manager
local WebRequestManager = {}

WebRequest = WebRequestManager

---@class tts.WebRequest
---@field download_progress number
---@field error string
---@field is_error boolean
---@field is_done boolean
---@field response_code number
---@field text string
---@field upload_progress number
---@field url string
local WebRequest = {}

---@param name string
---@return nil | string
function WebRequest.getResponseHeader(name) end

---@return table<string, string>
function WebRequest.getResponseHeaders() end

---@alias tts.WebRequest.Handler fun(request: tts.WebRequest): nil

---@param url string
---@param method string
---@param download boolean
---@param data nil | string
---@param headers nil | table<string, string>
---@param callback_function tts.WebRequest.Handler
---@return tts.WebRequest
function WebRequestManager.custom(url, method, download, data, headers, callback_function) end

---@param url string
---@param callback_function tts.WebRequest.Handler
---@return tts.WebRequest
function WebRequestManager.get(url, callback_function) end

---@param url string
---@param form table<string, string>
---@param callback_function tts.WebRequest.Handler
---@return tts.WebRequest
function WebRequestManager.post(url, form, callback_function) end

---@param url string
---@param data string
---@param callback_function tts.WebRequest.Handler
---@return tts.WebRequest
function WebRequestManager.put(url, data, callback_function) end
