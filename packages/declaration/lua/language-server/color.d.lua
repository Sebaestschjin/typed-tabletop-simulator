---@meta

---@class tts.CharColorShape
---@field r number
---@field g number
---@field b number
---@field a nil | number

---@class tts.NumColorShape
---@field [1] number
---@field [2] number
---@field [3] number
---@field [4] nil | number

---@alias tts.ColorShape tts.CharColorShape | tts.NumColorShape
---@alias tts.ColorParameter tts.ColorShape | tts.PlayerColor

---@class tts.Color : tts.CharColorShape, tts.NumColorShape
---@overload fun(src: tts.ColorShape): tts.Color
---@overload fun(r: number, g: number, b: number): tts.Color
---@overload fun(r: number, g: number, b: number, a: number): tts.Color
---@field [tts.PlayerColor] tts.Color
---@field __isColor true
Color = {}

---@overload fun(src: tts.Color): tts.Color
---@overload fun(r: number, g: number, b: number): tts.Color
---@param r number
---@param g number
---@param b number
---@param a number
---@return tts.Color
function Color.new(r, g, b, a) end

---@param name string
---@param color tts.Color
function Color.Add(name, color) end

---@param strColor string
---@return tts.Color
function Color.fromString(strColor) end

---@param hexColor string
---@return tts.Color
function Color.fromHex(hexColor) end

---@return number, number, number, number
function Color:get()
  return self.r, self.g, self.b, self.a
end

---@param includeAlpha? boolean
---@return string
function Color:toHex(includeAlpha) end

---@param tolerance? number
---@return string
function Color:toString(tolerance) end

---@param r number
---@param g number
---@param b number
---@param a? number
function Color:set(r, g, b, a) end

---@param key 'r' | 'g' | 'b' | 'a'
---@param value number
function Color:setAt(key, value) end

---@param other any
---@param margin? number
---@return boolean
function Color:equals(other, margin) end

---@param other any
---@param margin number
---@return boolean
function Color:__eq(other, margin) end

---@return tts.Color
function Color:copy() end

---@param prefix? string
---@return string
function Color:dump(prefix) end

---@return string
function Color:__tostring() end

---@param other tts.Color
---@param t number
function Color:lerp(other, t) end
