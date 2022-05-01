/**
 * @module MusicPlayer
 */

/**
 * `MusicPlayer` is a static global class which allows you to control the in-game music playback i.e. the in-game "Music" menu.
 *
 * @noSelf
 */
declare interface MusicPlayerStatic {
    /** If all players loaded the current audioclip. */
    readonly loaded: boolean;

    /** The current state of the music player. */
    readonly player_status: MusicPlayerStatus;

    /** Current index of the playlist. -1 if no playlist audioclip is playing. */
    playlist_index: int;

    /** If the current audioclip should be repeated. */
    repeat_track: boolean;

    /** If the playlist should play shuffled. */
    shuffle: boolean;

    /**
     * Gets the currently loaded audioclip.
     */
    getCurrentAudioclip(): AudioClip;

    /**
     * Gets the current playlist.
     */
    getPlaylist(): AudioClip[];

    /**
     * Pause the current audioclip.
     *
     * @returns `true` if the music player is/was paused, otherwise `false`.
     */
    pause(): boolean;

    /**
     * Plays the current audioclip.
     *
     * @returns `true` if the music player is/was playing, otherwise `false`.
     */
    play(): boolean;

    /**
     * Sets/loads the specified audioclip.
     */
    setCurrentAudioclip(audioClip: AudioClip): boolean;

    /**
     * Sets the current playlist.
     */
    setPlaylist(playlist: AudioClip[]): boolean;

    /**
     * Skips to the beginning of the audioclip or if the play time is less than 3 seconds to the previous audioclip in playlist if possible.
     *
     * @returns `true` if skip was successful, otherwise `false`.
     */
    skipBack(): boolean;

    /**
     * Skips to the next audioclip in the current playlist.
     *
     * If the current audioclip is the last of the playlist, loops around to the first audioclip in the playlist.
     *
     * @returns `true` if skip was successful, otherwise `false`.
     */
    skipForward(): boolean;
}

declare interface AudioClip {
    /** The URL of the current audioclip. */
    url: URI;

    /** The title of the current audioclip. */
    title: string;
}

/** Possible status of the music player. */
declare type MusicPlayerStatus = "Stop" | "Play" | "Loading" | "Ready";

declare const MusicPlayer: MusicPlayerStatic;
