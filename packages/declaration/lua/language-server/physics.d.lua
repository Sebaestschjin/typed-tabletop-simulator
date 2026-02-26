---@meta

---@alias tts.Physics.Cast.Type
---| 1 Ray
---| 2 Sphere
---| 3 Box

---@class tts.Physics.Cast.Base.Options
---@field type tts.Physics.Cast.Type
---@field origin? tts.VectorShape Position of the starting point. Default (0,0,0)
---@field direction tts.VectorShape A direction for the cast to move in.
---@field max_distance? number How far the cast will travel. Default Infinity
---@field debug? boolean If the cast is visualized for the user. Default false

---@class tts.Physics.Cast.Ray.Options : tts.Physics.Cast.Base.Options
---@field type 1 Ray

---@class tts.Physics.Cast.Sphere.Options : tts.Physics.Cast.Base.Options
---@field type 2 Sphere
---@field size? tts.VectorShape size.x specifies the diameter of the sphere. Default (0,0,0)

---@class tts.Physics.Cast.Box.Options : tts.Physics.Cast.Base.Options
---@field type 3 Box
---@field size? tts.VectorShape Size of the box. Default (0,0,0)
---@field orientation? tts.VectorShape Euler angles (in degrees) specifying the rotation of the box. Default (0,0,0)

---@alias tts.Physics.Cast.Options tts.Physics.Cast.Ray.Options | tts.Physics.Cast.Sphere.Options | tts.Physics.Cast.Box.Options

---@class tts.Physics.Cast.Result
---@field point tts.Vector Position the cast impacted the Object.
---@field normal tts.Vector The surface normal of the impact point.
---@field distance number Distance between cast origin and impact point.
---@field hit_object tts.Object An Object reference to the Object hit by the cast.

---@class tts.Physics
---@field play_area number The play area being used (i.e. how far from middle you can get). Values from 0-1. Default 0.5
Physics = {}

--- Returns an array (of up to 1000) intersections.
---@param parameters tts.Physics.Cast.Options
---@return tts.Physics.Cast.Result[]
function Physics.cast(parameters) end

--- Returns a Vector representing the direction and magnitude of gravity.
---@return tts.Vector
function Physics.getGravity() end

--- Sets the direction and magnitude of gravity.
---@param gravity tts.VectorShape
---@return boolean
function Physics.setGravity(gravity) end
