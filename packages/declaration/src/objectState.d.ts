/**
 * @module ObjectData
 */

/** Base type for all object data. */
interface ObjectData {
    /** The "unique" ID of the object. */
    GUID?: GUID;

    /** The type of the object. */
    Name: string;

    /** Contains the position, rotation and scale of the object. */
    Transform: TransformData;

    /** The name of the object that is also visible as part of the object's tooltip. */
    Nickname?: string;

    /** The description of the object that is also visible as part of the object's tooltip. */
    Description?: string;

    /** The hidden notes that are only visible to the GM player. */
    GMNotes?: string;

    /** Hidden notes only accessible via script. */
    Memo?: string;

    ColorDiffuse?: ColorData;

    /** Added tags for the object. */
    Tags?: string[];

    LayoutGroupSortIndex?: int;

    Value?: number;

    /** Whether the object is currently locked. */
    Locked?: boolean;

    /** Whether the object should snap to grid points. */
    Grid?: boolean;

    /** Whether the object should snap to snap points. */
    Snap?: boolean;

    IgnoreFoW?: boolean;

    MeasureMovement?: boolean;

    DragSelectable?: boolean;

    Autoraise?: boolean;

    Sticky?: boolean;

    Tooltip?: boolean;

    GridProjection?: boolean;

    HideWhenFaceDown?: boolean;

    Hands?: boolean;

    MaterialIndex?: MaterialType;

    MeshIndex?: int;

    Number?: int;

    /** The attached Lua script. */
    LuaScript?: string;

    /** The current saved script state. */
    LuaScriptState?: string;

    /** The attached XML UI. */
    XmlUI?: string;

    /** Objects attached to this object. */
    ChildObjects?: ObjectData[];

    AttachedSnapPoints?: SnapPointData[];
}

/**
 * Object data for a regular bag.
 */
interface BagData extends ObjectData {
    Bag?: {
        Order: BagOrder;
    };

    ContainedObjects?: ObjectData[];
}

interface BagInfiniteData extends ObjectData {
    ContainedObjects?: [ObjectData];
}

/**
 * Object data for a board.
 */
interface BoardData extends ObjectData {}

/**
 * Object data for a custom board.
 */
interface BoardCustomData extends ObjectData {
    CustomImage: {
        ImageURL: URI;

        WidthScale: float;
    };
}

/**
 * Object data for a custom card.
 */
interface CardCustomData extends ObjectData {
    CardID: int;

    CustomDeck: LuaTable<int, CustomDeckData>;
}

/**
 * Object data for a deck containing custom cards.
 */
interface DeckCustomData extends ObjectData {
    /** The card IDs (sic!) of all cards contained in this deck. */
    DeckIDs: int[];

    /** The data of contained cards. */
    ContainedObjects: CardCustomData[];

    /** Information about the custom decks within this deck indexed by their deck ID */
    CustomDeck: LuaTable<int, CustomDeckData>;
}

/**
 * Object data of a regular die.
 */
interface DieData extends ObjectData {
    RotationValues?: RotationValueData[];
}

/**
 * Object data of a custom die.
 */
interface DieCustomData extends DieData {
    CustomImage: {
        ImageURL: string;

        CustomDice: {
            Type: DieType;
        };
    };
}

interface FigurineCustomData extends ObjectData {
    CustomImage: {
        ImageURL: string;

        ImageSecondaryURL: string;

        ImageScalar: float;
    };
}

/**
 * Object data of a hand zone.
 */
interface HandZoneData extends ObjectData {}

/**
 * Object data of a custom model.
 */
interface ModelData extends ObjectData {
    CustomMesh: {
        /** The path/URL for the .obj mesh used on the custom model. */
        MeshURL: URI;

        /** The path/URL for the diffuse image. */
        DiffuseURL: URI;

        /** The path/URL for the normals image. */
        NormalURL?: URI;

        /** The path/URL for the collider mesh. */
        ColliderURL?: URI;

        /**
         * Whether the object model is convex.
         *
         * @defaultValue `false`
         */
        Convex?: boolean;

        /**
         * An Int representing the Object's material.
         *
         * @defaultValue [[MaterialType.Plastic]]
         */
        MaterialIndex?: MaterialType;

        /**
         * An Int representing the Object's type.
         *
         * @defaultValue [[ObjectType.Generic]]
         */
        TypeIndex?: ModelType;

        /**
         * Whether the Object casts shadows.
         *
         * @defaultValue `true`
         */
        CastShadows?: boolean;

        CustomShader?: {
            SpecularColor?: ColorData;

            SpecularIntensity?: float;

            SpecularSharpness?: float;

            FresnelStrength?: float;
        };
    };
    ContainedObjects?: ObjectData[];
}

/**
 * Object data of a scripting zone.
 */
interface ScriptingZoneData extends ObjectData {}

/**
 * Object data for a custom token.
 */
interface TokenData extends ObjectData {
    CustomImage: {
        ImageURL: string;

        CustomToken: {
            Thickness?: number;

            MergeDistancePixels?: number;

            StandUp?: boolean;

            Stackable?: boolean;
        };
    };
}

/**
 * Object data for a custom tile.
 */
interface TileData extends ObjectData {
    CustomImage: {
        ImageURL: string;

        ImageSecondaryURL?: string;

        CustomTile: {
            Type: TileType;

            Thickness?: number;

            Stackable?: boolean;

            Stretch?: boolean;
        };
    };
}

interface CustomDeckData {
    Type: CardType;

    FaceURL: string;

    BackURL: string;

    NumWidth: int;

    NumHeight: int;

    BackIsHidden: boolean;

    UniqueBack: boolean;
}

interface RotationValueData {
    Value: RotationValue;

    Rotation: VectorTable;
}

interface SnapPointData {
    Position: VectorTable;

    Rotation?: VectorTable;

    Tags?: string[];
}

/**
 * Data for the position, scale and rotation of an object.
 */
interface TransformData {
    /** X-coordinate (left/right) of the position. */
    posX: number;

    /** Y-coordinate (up/down) of the position. */
    posY: number;

    /** Z-coordinate (front/back) of the position. */
    posZ: number;

    /** Rotation on the x-axis. */
    rotX: number;

    /** Rotation on the y-axis. */
    rotY: number;

    /** Rotation on the z-axis. */
    rotZ: number;

    /** Scale on the x-axis. */
    scaleX: number;

    /** Scale on the y-axis. */
    scaleY: number;

    /** Scale on the z-axis. */
    scaleZ: number;
}

/**
 * Data for the color of an object.
 */
interface ColorData {
    /** Red value between 0 and 1. */
    r: float;

    /** Green value between 0 and 1. */
    g: float;

    /** Blue value between 0 and 1. */
    b: float;

    /** Alpha value between 0 and 1. */
    a: float;
}

/**
 * Possible order of objects inside a bag.
 */
declare const enum BagOrder {
    /** Last object put in is the first taken out (stack). */
    LIFO = 0,
    /** First object put in is the first taken out (queue). */
    FIFO = 1,
    /** Objects are taken out randomly. */
    Random = 2,
}

/**
 * Possible type for a card.
 */
declare const enum CardType {
    RectangleRounded = 0,
    Rectangle = 1,
    HexRounded = 2,
    Hex = 3,
    Circle = 4,
}

/**
 * Possible type for a die,
 */
declare const enum DieType {
    D4 = 0,
    D6 = 1,
    D8 = 2,
    D10 = 3,
    D12 = 4,
    D20 = 5,
}

/**
 * Possible type for a custom model.
 */
declare const enum ModelType {
    Generic = 0,
    Figurine = 1,
    Dice = 2,
    Coin = 3,
    Board = 4,
    Chip = 5,
    Bag = 6,
    Infinite = 7,
}

/**
 * Possible type for a tile.
 */
declare const enum TileType {
    Box = 0,
    Hex = 1,
    Circle = 2,
    Rounded = 3,
}
