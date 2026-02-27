---@meta

---@class tts.Clock : tts.Object
---@field Clock tts.Clock.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

--- The Clock behavior is present on the Digital Clock object.
---
--- Clock Modes
--- - **Current Time**: Displays the current time of the host.
--- - **Stopwatch**: Displays a running count up.
--- - **Timer**: Displays a countdown and beeps once complete.
---
---@class tts.Clock.Behaviour
---@field paused boolean If the clock timer is paused.
local Clock = {}

---
--- Current time in stopwatch or timer mode. Clock mode returns 0. This function acts the same as Object's getValue().
---
---@see tts.Object.getValue
---@return integer
function Clock.getValue() end

---
--- Pauses/resumes a Clock in stopwatch or timer mode.
---
---@return boolean
function Clock.pauseStart() end

---
--- Set the timer to display a number of seconds. This function acts the same as Object's setValue(). If the Clock is not in timer mode, it will be switched. If it is in timer mode, it will be paused and the remaining time will be changed. This will not start the countdown on its own.
---
---@see tts.Object.setValue
---@param seconds integer
---@return boolean
function Clock.setValue(seconds) end

---
--- Switches clock to display current time. It will clear any stopwatch or timer.
---
---@return boolean
function Clock.showCurrentTime() end

---
--- Switches clock to stopwatch, setting time to 0. It will reset time if already in stopwatch mode.
---
---@return boolean
function Clock.startStopwatch() end
