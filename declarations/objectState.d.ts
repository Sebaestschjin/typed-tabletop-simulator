/** Base type for all object data. */
interface ObjectData {
    /** The "unique" ID of the object. */
    GUID: string;
    /** The type of the object. */
    Name: string;
    /** Contains the position, rotation and scale of the object. */
    Transform: TransformData;
    /** The name of the object that is also visible as part of the object's tooltip. */
    Nickname: string;
    /** The description of the object that is also visible as part of the object's tooltip. */
    Description: string;
    /** The hidden notes that are only visible to the GM player. */
    GMNotes: string;
    /** Hidden notes only accessible via script. */
    Memo?: string;
    ColorDiffuse: ColorData;
    /** Added tags for the object. */
    Tags?: string[];
    LayoutGroupSortIndex: int;
    Value: number;
    /** Whether the object is currently locked. */
    Locked: boolean;
    /** Whether the object should snap to grid points. */
    Grid: boolean;
    /** Whether the object should snap to snap points. */
    Snap: boolean;
    IgnoreFoW: boolean;
    MeasureMovement: boolean;
    DragSelectable: boolean;
    Autoraise: boolean;
    Sticky: boolean;
    Tooltip: boolean;
    GridProjection: boolean;
    HideWhenFaceDown: boolean;
    Hands: boolean;
    MaterialIndex: int;
    MeshIndex: int;
    Number: int;
    /** The attached Lua script. */
    LuaScript: string;
    /** The current saved script state. */
    LuaScriptState: string;
    /** The attached XML UI. */
    XmlUI: string;
}

/** Object data for a regular bag. */
interface BagData extends ObjectData {
    Bag: {
        Order: BagOrder;
    };
    ContainedObjects?: ObjectData[];
}

/** Object data for a custom card. */
interface CardCustomData extends ObjectData {
    CardID: int;
    CustomDeck: LuaTable<int, CustomDeckData>;
}

/** Object data for a deck containing custom cards. */
interface DeckCustomData extends ObjectData {
    /** The card IDs (sic!) of all cards contained in this deck. */
    DeckIDs: int[];
    /** The data of contained cards. */
    ContainedObjects: CardCustomData[];
    /** Information about the custom decks within this deck indexed by their deck ID */
    CustomDeck: LuaTable<int, CustomDeckData>;
}

/** Object data for a custom token. */
interface TokenData extends ObjectData {
    CustomImage: TokenDataCustomImage;
}

interface TokenDataCustomImage {
    ImageURL: string;
    CustomToken: {
        Thickness: number;
        MergeDistancePixels: number;
        StandUp: boolean;
        Stackable: boolean;
    };
}

/** Object data for a custom tile. */
interface TileData extends ObjectData {
    CustomImage: TileDataCustomImage;
}

interface TileDataCustomImage {
    ImageURL: string;
    ImageSecondaryURL: string;
    CustomTile: {
        Type: TileType;
        Thickness: number;
        Stackable: boolean;
        Stretch: boolean;
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

declare const enum BagOrder {
    LIFO = 0,
    FIFO = 1,
    Random = 2,
}

declare const enum CardType {
    RectangleRounded = 0,
    Rectangle = 1,
    HexRounded = 2,
    Hex = 3,
    Circle = 4,
}

declare const enum TileType {
    Box = 0,
    Hex = 1,
    Circle = 2,
    Rounded = 3,
}

interface TransformData {
    posX: number;
    posY: number;
    posZ: number;
    rotX: number;
    rotY: number;
    rotZ: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
}

interface ColorData {
    r: number;
    g: number;
    b: number;
    a: number;
}
