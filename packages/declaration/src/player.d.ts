/**
 * @module Player
 */

type PlayerColor =
    | "Black"
    | "Blue"
    | "Brown"
    | "Green"
    | "Grey"
    | "Orange"
    | "Pink"
    | "Purple"
    | "Red"
    | "Teal"
    | "White"
    | "Yellow";

type PlayerTeam = "" | "Clubs" | "Diamonds" | "Hearts" | "Spades" | "Jokers";

/** @noSelf */
declare interface Player {
    /** If the player is promoted or the host of the game. */

    readonly admin: boolean;

    /** If the player is blindfolded. */
    blindfolded: boolean;

    /** The player's Player Color. */

    readonly color: PlayerColor;

    /**	If the player is the host. */
    readonly host: boolean;

    /**
     * The lift height for the player.
     *
     * This is how far an object is raised when held in a player's hand.
     * Value is ranged 0 to 1.
     */
    lift_height: number;

    /** If the current player is promoted. */

    promoted: boolean;

    /** If a player is currently seated at this color. */

    readonly seated: boolean;

    /**
     * The Steam ID of the player.
     *
     * This is unique to each player's Steam account.
     */
    readonly steam_id: string;

    /** The Steam name of the player. */
    readonly steam_name: string;

    /** The team of the player. */
    team: PlayerTeam;

    /** Makes a Player's camera follow an Object. */
    attachCameraToObject(params: { object: TTSObject; offset: Vector }): boolean;

    /** Print message on Player's screen and their game chat log. */
    broadcast(message: string, message_color?: Color): boolean;

    /** Changes player to this Player Color (seat). */
    changeColor(player_color: string): boolean;

    /** Clears a player's current selection. */
    clearSelectedObjects(): boolean;

    /** Number of hand zones owned by this color. */
    getHandCount(): int;

    /** Returns a Table of Objects that are in this hand zone. */
    getHandObjects(hand_index?: int): TTSObject[];

    /** Returns a Table of data on this hand zone. */
    getHandTransform(hand_index?: int): {
        /** Position of the hand zone. */
        position: Vector;
        /** Rotation of the hand zone. */
        rotation: Vector;
        /** Scale of the hand zone. */
        scale: Vector;
        /** Forward direction of the hand zone. */
        forward: Vector;
        /** Right direction of the hand zone. */
        right: Vector;
        /** Up direction of the hand zone. */
        up: Vector;
    };

    /** Objects a Player is holding in their hand. */
    getHoldingObjects(): TTSObject[];

    /** Object that the Player's pointer is hovering over. */
    getHoverObject(): Maybe<TTSObject>;

    /** Player's pointer coordinates. */
    getPointerPosition(): Vector;

    /** Player's pointer rotation on Y axis. */
    getPointerRotation(): Vector;

    /** Objects that the Player has selected with an area selection. */
    getSelectedObjects(): TTSObject[];

    /** Kicks Player out of the room. */
    kick(): boolean;

    /** Moves a Player's camera, forcing 3'rd person camera mode. */
    lookAt(params: {
        /** Position to center the camera on. */
        position: Vector;
        /** Pitch angle of the camera. 0 to 90. */
        pitch?: number;
        /** Yaw angle of the camera. 0 to 360. */
        yaw?: number;
        /** Distance the camera is from the position Vector. */
        distance?: number;
    }): boolean;

    /** Mutes or unmutes Player, preventing/allowing voice chat. */
    mute(): boolean;

    /** Emulates the player using the ping tool at the given position (tapping Tab). */
    pingTable(position: Vector): boolean;

    /** Prints a message into the Player's game chat. */
    print(message: string, color?: Color): boolean;

    /** Promotes/demotes a Player. Promoted players have access to most host privileges. */
    promote(): boolean;

    /** Sets the player's camera mode. */
    setCameraMode(mode: CameraMode): boolean;

    /** Sets transform elements of a hand zone. */
    setHandTransform(
        params: {
            /** Position of the hand zone. */
            position?: Vector;
            /** Rotation of the hand zone. */
            rotation?: Vector;
            /** Scale of the hand zone. */
            scale?: Vector;
        },
        /** Index, representing which hand zone to modify. */
        hand_index?: int
    ): boolean;

    /** Sets the UI theme for the player. */
    setUITheme(theme: string): boolean;
}

/** @noSelf */
declare interface PlayerManager {
    /** Returns the player currently seated for player color White */
    White: Maybe<Player>;

    /** Returns the player currently seated for player color Brown */
    Brown: Maybe<Player>;

    /** Returns the player currently seated for player color Red */
    Red: Maybe<Player>;

    /** Returns the player currently seated for player color Orange */
    Orange: Maybe<Player>;

    /** Returns the player currently seated for player color Yellow */
    Yellow: Maybe<Player>;

    /** Returns the player currently seated for player color Green */
    Green: Maybe<Player>;

    /** Returns the player currently seated for player color Teal */
    Teal: Maybe<Player>;

    /** Returns the player currently seated for player color Blue */
    Blue: Maybe<Player>;

    /** Returns the player currently seated for player color Purple */
    Purple: Maybe<Player>;

    /** Returns the player currently seated for player color Pink */
    Pink: Maybe<Player>;

    /** Returns the player currently seated for player color Black */
    Black: Maybe<Player>;

    /**
     * Returns a table of strings of every valid seat color at the current table.
     *
     * Returned colors are in the default order.
     */
    getAvailableColors(): PlayerColor[];

    /**
     * Returns a table of strings of every possible seat color.
     *
     * Returned colors are in the default order.
     */
    getColors(): PlayerColor[];

    /**
     * Returns a table of all Player instances.
     */
    getPlayers(): Player[];

    /**
     * Returns a table of all spectator (Grey) Player instances.
     */
    getSpectators(): Player[];
}

declare const Player: PlayerManager;

// TODO actually those values are part of the PlayerManager, I just don't know yet, how I can easily put that there
declare const enum PlayerAction {
    /** Copy (or commence cloning) the targets. */
    Copy = 0,

    /** Cut (copy and delete) the targets. */
    Cut = 1,

    /** Delete the targets. */
    Delete = 2,

    /** Incrementally rotate the targets counter-clockwise around their flip axes, typically the scene's Z-axis. */
    FlipIncrementalLeft = 3,

    /** Incrementally rotate the targets clockwise around their flip axes, typically the scene's Z-axis. */
    FlipIncrementalRight = 4,

    /**
     * Rotate the targets 180 degrees around their flip axes, typically the scene's Z-axis i.e. toggle the targets between face up and face down.
     */
    FlipOver = 5,

    /** Group the targets. */
    Group = 6,

    /** Paste (spawn) the targets. */
    Paste = 7,

    /** Pick up the targets. */
    PickUp = 8,

    /** Randomize the targets. */
    Randomize = 9,

    /**
     * Rotate the targets incrementally, typically counter-clockwise around the scene's Y-axis.
     *
     * Instead of being rotated exclusively around the Y-axis, dice will be rotated to the previous rotation value.
     */
    RotateIncrementalLeft = 10,

    /**
     * Rotate the targets incrementally, typically clockwise around the scene's Y-axis.
     *
     * Instead of being rotated exclusively around the Y-axis, dice will be rotated to the next rotation value.
     */
    RotateIncrementalRight = 11,

    /** Rotate the targets 180 degrees around the scene's Y-axis. */
    RotateOver = 12,

    /** Add the targets to the player's selection. */
    Select = 13,

    /** Move the targets underneath objects below them on table. */
    Under = 14,
}
