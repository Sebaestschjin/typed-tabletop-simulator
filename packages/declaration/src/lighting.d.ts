/**
 * @module Lighting
 */
/**
 * `Lighting`, a static global class, is the in-game light of the map.
 *
 * It allows you to modify the lighting of the instance in the same way that the in-game lighting menu does.
 * You call these functions like this: `Lighting.apply()`.
 *
 * For more information on lighting in Unity, refer to the Unity documentation.
 *
 * @noSelf
 */
declare interface LightingStatic {
    /**
     * The strength of the ambient light.
     * Range = 0 to 4.
     */
    ambient_intensity: float;

    /** The source of ambient light. */
    ambient_type: AmbientType;

    /**
     * The strength of the directional light shining down in the scene.
     * Range = 0 to 4.
     */
    light_intensity: float;

    /**
     * The strength of the reflections from the background.
     * Range = 0 to 1.
     */
    reflection_intensity: float;

    /**
     * Applies pending changes made via the Lighting class.
     */
    apply(): boolean;

    /**
     * Returns Color Table of the gradient equator.
     *
     * Not used if ambient type is Background.
     */
    getAmbientEquatorColor(): Color;

    /**
     * Returns Color Table of the gradient ground.
     *
     * Not used if ambient type is Background.
     */
    getAmbientGroundColor(): Color;

    /**
     * Returns Color Table of the gradient sky.
     *
     * Not used if ambient type is Background.
     */
    getAmbientSkyColor(): Color;

    /**
     * Returns Color Table of the directional light, which shines straight down on the table.
     */
    getLightColor(): Color;

    /**
     * Sets the color of the gradient equator.
     *
     * Not used if ambient type is Background.
     *
     * @param color The new color.
     */
    setAmbientEquatorColor(color: Color): boolean;

    /**
     * Sets the color of the gradient ground.
     *
     * Not used if ambient type is Background.
     *
     * @param color The new color.
     */
    setAmbientGroundColor(color: Color): boolean;

    /**
     * Sets the color of the gradient sky.
     *
     * Not used if ambient type is Background.
     *
     * @param color The new color.
     */
    setAmbientSkyColor(color: Color): boolean;

    /**
     * Sets the color of the directional light, which shines straight down on the table.
     *
     * @param color The new color.
     */
    setLightColor(color: Color): boolean;
}

declare const enum AmbientType {
    Background = 1,
    Gradient = 2,
}

declare const Lighting: LightingStatic;
