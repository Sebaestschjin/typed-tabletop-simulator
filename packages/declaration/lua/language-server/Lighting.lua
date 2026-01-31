---@meta

---
--- Lighting, a static global class, is the in-game light of the map. It allows you to modify the lighting of the instance in the same way that the [in-game lighting menu](https://kb.tabletopsimulator.com/host-guides/lighting/) does. You call these functions like this: [`Lighting.apply()`](lua://tts__Lighting.apply).
---
--- For more information on lighting in Unity, [refer to the Unity documentation](https://docs.unity3d.com/Manual/LightingOverview.html).
---
--- **Example**
---
--- Make the lighting *bright* red.
--- ```
--- Lighting.light_intensity = 2
--- Lighting.setLightColor({r = 1, g = 0.6, b = 0.6})
--- Lighting.apply()
--- ```
---
---@class tts__Lighting
---@field ambient_intensity number The strength of the ambient light. Range = 0 to 4.
---@field ambient_type tts__Lighting_AmbientType The source of ambient light. 1 = background, 2 = gradient.
---@field light_intensity number The strength of the directional light shining down in the scene. Range = 0 to 4.
---@field lut_contribution number How much the LUT contributes to the light.
---@field lut_index integer The LUT index of the light.
---@field lut_url string The URL of the LUT.
---@field reflection_intensity number The strength of the reflections from the background. Range = 0 to 1.

---@class tts__Lighting --[[ repeated to avoid duplicate descriptions ]]
Lighting = {}

---@alias tts__Lighting_AmbientType
---| 1 Background
---| 2 Gradient

---
--- Applies pending changes made via the Lighting class.
---
---@return true
function Lighting.apply() end

---
--- Returns Color Table of the gradient equator. Not used if `ambient_type = 1`.
---
---@return tts__Color
function Lighting.getAmbientEquatorColor() end

---
--- Returns Color Table of the gradient ground. Not used if `ambient_type = 1`.
---
---@return tts__Color
function Lighting.getAmbientGroundColor() end

---
--- Returns Color Table of the gradient sky. Not used if `ambient_type = 1`.
---
---@return tts__Color
function Lighting.getAmbientSkyColor() end

---
--- Returns Color Table of the directional light, which shines straight down on the table.
---
---@return tts__Color
function Lighting.getLightColor() end

---
--- Sets the color of the gradient equator. Not used if `ambient_type = 1`.
---
---@param tint tts__ColorParameter
---@return true
function Lighting.setAmbientEquatorColor(tint) end

---
--- Sets the color of the gradient ground. Not used if `ambient_type = 1`.
---
---@param tint tts__ColorParameter
---@return true
function Lighting.setAmbientGroundColor(tint) end

---
--- Sets the color of the gradient sky. Not used if `ambient_type = 1`.
---
---@param tint tts__ColorParameter
---@return true
function Lighting.setAmbientSkyColor(tint) end

---
--- Sets the color of the directional light, which shines straight down on the table.
---
---@param tint tts__ColorParameter
---@return true
function Lighting.getLightColor(tint) end
