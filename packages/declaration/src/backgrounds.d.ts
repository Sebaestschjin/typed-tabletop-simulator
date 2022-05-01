/**
 * `Backgrounds` is a global which provides the ability to interact with the background.
 *
 * @module Backgrounds
 *
 * @noSelf
 */
declare interface BackgroundsStatic {
    /**
     * Returns the current background name.
     */
    getBackground(): string;

    /**
     * Returns the image URL of the current custom background, or nil if the current background is not custom.
     */
    getCustomURL(): URI;

    /**
     * Replaces the current background with the background matching the specified `name`.
     *
     * @param name The new background name.
     */
    setBackground(name: string): boolean;

    /**
     * Replaces the current background with a custom background loaded from the specified `url`.
     *
     * @param url The new custom background.
     */
    setCustomURL(url: URI): boolean;
}

declare const Backgrounds: BackgroundsStatic;
