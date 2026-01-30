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
---@class tts__BrowserBehaviour
---@field url string URL which currently wants to display.
---@field pixel_width integer The pixel width the browser is virtually rendering to.
local Browser = {}


---
--- The Clock behavior is present on the Digital Clock object.
---
--- Clock Modes
--- - **Current Time**: Displays the current time of the host.
--- - **Stopwatch**: Displays a running count up.
--- - **Timer**: Displays a countdown and beeps once complete.
---
---@class tts__ClockBehaviour
---@field paused boolean If the clock timer is paused.
local Clock = {}

---
--- Current time in stopwatch or timer mode. Clock mode returns 0. This function acts the same as Object's getValue().
---
---@see tts__Object.getValue
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
---@see tts__Object.setValue
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


---
--- The Counter behavior is present on the Counter object.
---
--- **Example**
---
--- Increment a counter's value.
--- ```
--- object.Counter.increment()
--- ```
---
---@class tts__CounterBehaviour
local Counter = {}

---
--- Resets Counter to 0.
---
---@return boolean
function Counter.clear() end

---
--- Reduces Counter's value by 1.
---
---@return boolean
function Counter.decrement() end

---
--- Returns Counter's current value. This function behaves the same as Object's getValue().
---
---@see tts__Object.getValue
---@return integer
function Counter.getValue() end

---
--- Increases Counter's value by 1.
---
---@return boolean
function Counter.increment() end

---
--- Sets the current value of the Counter. This function behaves the same as Object's setValue().
---
---@see tts__Object.setValue
---@param value integer
---@return boolean
function Counter.setValue(value) end


---
--- The RPGFigurine behavior is present on Objects that are figurines with built-in animations i.e. RPG Kit objects.
---
---@class tts__RPGFigurineBehaviour
---@field onAttack nil | fun(hitObjects: tts__Object[]): void These are `RPGFigurine` member variables which can be assigned a function that will be executed in response to an event occurring.
---@field onHit nil | fun(attacker: tts__Object): void        These are `RPGFigurine` member variables which can be assigned a function that will be executed in response to an event occurring.
local RPGFigurine = {}

---
--- Executed when an attack is performed by the RPGFigurine Object.
---
--- An attack is triggered via the context menu or by pressing the appropriate number key. If another RPGFigurine is within its attack arc, then onHit will be executed on the other figurine.
---
---@see tts__RPGFigurineBehaviour.onHit
---@param hitObjects tts__Object[] A table of RPGFigurine Objects within the reach of the attack.
---@return void
function RPGFigurine.onAttack(hitObjects) end

---
--- Executed when the RPGFigurine Object is hit by another attacking RPGFigure Object.
---
--- An attack is triggered via the context menu or by pressing the appropriate number key. If this RPGFigurine Object is within the attack radius of an attacker, this function will be executed.
---
---@param attacker tts__Object The RPGFigurine Object performing the attack.
---@return void
function RPGFigurine.onHit(attacker) end

---
--- Plays a random attack animation.
---
---@return boolean
function RPGFigurine.attack() end

---
--- Changes the figurine's current mode. What the mode represents is based on the figurine.
---
---@return boolean
function RPGFigurine.changeMode() end

--- Plays the death animation or causes it to return to life.
---
---@return boolean
function RPGFigurine.die() end


---
--- The TextTool behavior is present on 3DText objects i.e those created with the text tool.
---
---@class tts__TextToolBehaviour
local TextTool = {}

---
--- Returns Table of font Color.
---
---@return tts__Color
function TextTool.getFontColor() end

---
--- Returns Int of the font size.
---
---@return integer
function TextTool.getFontSize() end

---
--- Returns the current text. Behaves the same as Object's getValue().
---
---@see tts__Object.getValue
---@return string
function TextTool.getValue() end

---
--- Sets font Color.
---
---@param font_color tts__ColorParameter
---@return boolean
function TextTool.setFontColor(font_color) end

---
--- Sets font size.
---
---@param font_size integer
---@return boolean
function TextTool.setFontSize(font_size) end

---
--- Sets the current text. Behaves the same as Object's setValue(...).
---
---@see tts__Object.setValue
---@param text string
---@return boolean
function TextTool.setValue(text) end
