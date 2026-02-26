---@meta

---@class tts.CharVectorShape
---@field x number
---@field y number
---@field z number

---@class tts.NumVectorShape
---@field [1] number
---@field [2] number
---@field [3] number

---@alias tts.VectorShape tts.CharVectorShape | tts.NumVectorShape | tts.Vector

---@class tts.Vector : tts.CharVectorShape, tts.NumVectorShape
---@overload fun(x: number, y: number, z: number): tts.Vector
---@overload fun(src: tts.VectorShape): tts.Vector
---@operator add(tts.CharVectorShape): tts.Vector
---@operator sub(tts.CharVectorShape): tts.Vector
---@operator mul(tts.Vector): tts.Vector
---@operator mul(number): tts.Vector
---@field __isVector true
Vector = {}

---@overload fun(src: tts.VectorShape): tts.Vector
---@param x number
---@param y number
---@param z number
---@return tts.Vector
function Vector.new(x, y, z) end

---@param k 'x' | 'y' | 'z'
---@return tts.Vector
function Vector:setAt(k, v) end

---@param x nil | number
---@param y nil | number
---@param z nil | number
---@return tts.Vector
function Vector:set(x, y, z) end

---@return number, number, number
function Vector:get() end

---@return tts.Vector
function Vector:copy() end

---@param other tts.VectorShape
---@return tts.Vector
function Vector:add(other) end

---@param v1 tts.Vector
---@param v2 tts.CharVectorShape
---@return tts.Vector
function Vector.__add(v1, v2) end

---@param other tts.CharVectorShape
---@return tts.Vector
function Vector:sub(other) end

---@param v1 tts.Vector
---@param v2 tts.CharVectorShape
---@return tts.Vector
function Vector.__sub(v1, v2) end

---@param other tts.CharVectorShape
---@return number
function Vector:dot(other) end

---@return number
function Vector:sqrMagnitude() end

---@return number
function Vector:magnitude() end

---@param factor number|tts.Vector
---@return tts.Vector
function Vector:scale(factor) end

---@overload fun(v1: tts.Vector, v2: tts.Vector): tts.Vector
---@overload fun(v: tts.Vector, scale: number): tts.Vector
---@overload fun(scale: number, v: tts.Vector): tts.Vector
---@param v tts.Vector
---@param scaleX number
---@param scaleY number
---@param scaleZ number
---@return tts.Vector
function Vector.__mul(v, scaleX, scaleY, scaleZ) end

---@param other tts.CharVectorShape
---@return number
function Vector:sqrDistance(other) end

---@param other tts.CharVectorShape
---@return number
function Vector:distance(other) end

---@param other any
---@param margin? number
---@return boolean
function Vector:equals(other, margin) end

---@param other any
---@param margin? number
---@return boolean
function Vector:__eq(other, margin) end

---@param prefix? string
---@return string
function Vector:string(prefix) end

---@return string
function Vector:__tostring() end

---@param other tts.Vector
---@return number
function Vector:angle(other) end

---@param maxLen number
---@return tts.Vector
function Vector:clamp(maxLen) end

---@param other tts.CharVectorShape
---@return tts.Vector
function Vector:cross(other) end

---@param from tts.Vector
---@param to tts.Vector
---@return tts.Vector
function Vector.between(from, to) end

---@param target tts.Vector
---@param t number
---@return tts.Vector
function Vector:lerp(target, t) end

---@param target tts.Vector
---@param maxDist number
---@return tts.Vector
function Vector:moveTowards(target, maxDist) end

---@return tts.Vector
function Vector:normalize() end

---@return tts.Vector
function Vector:normalized() end

---@param other tts.Vector
---@return tts.Vector
function Vector:project(other) end

---@param unitTarget tts.Vector
---@param maxDelta number
---@return tts.Vector
function Vector:rotateTowardsUnit(unitTarget, maxDelta) end

---@param target tts.Vector
---@param maxDelta number
---@return tts.Vector
function Vector:rotateTowards(target, maxDelta) end

---@param planeNormal tts.Vector
---@return tts.Vector
function Vector:reflect(planeNormal) end

---@param axis 'x' | 'y' | 'z'
---@param angle number
---@return tts.Vector
function Vector:rotateOver(axis, angle) end

---@param v1 tts.CharVectorShape
---@param v2 tts.CharVectorShape
---@return tts.Vector
function Vector.max(v1, v2) end

---@param v1 tts.CharVectorShape
---@param v2 tts.CharVectorShape
---@return tts.Vector
function Vector.min(v1, v2) end

---@return tts.Vector
function Vector:inverse() end

---@param planeNormal tts.Vector
---@return tts.Vector
function Vector:projectOnPlane(planeNormal) end

---@param binormalPlanar? tts.Vector
---@return tts.Vector, tts.Vector, tts.Vector
function Vector:orthoNormalize(binormalPlanar) end

---@overload fun(): number, number, number
---@param axis 'x' | 'y' | 'z'
---@return number
function Vector:heading(axis) end
