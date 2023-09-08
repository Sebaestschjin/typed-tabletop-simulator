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

  AttachedVectorLines?: VectorLineData[];

  States?: {
    [index: number]: ObjectData;
  };
}

/**
 * Object data for a custom asset bundle.
 */
interface AssetBundleData extends ObjectData {
  CustomAssetbundle: {
    AssetbundleURL: URI;

    AssetbundleSecondaryURL?: URI;

    MaterialIndex?: MaterialType;

    TypeIndex?: ModelType;

    LoopingEffectIndex?: int;
  };
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

/**
 * Object data for an infinite bag.
 */
interface BagInfiniteData extends ObjectData {
  ContainedObjects?: [ObjectData];
}

/**
 * Object data for a custom board.
 */
interface BoardCustomData extends ObjectData {
  CustomImage: {
    ImageURL: URI;

    WidthScale: float;
  };
}

interface BookData extends ObjectData {
  CustomPDF: {
    /**
     * URI for the PDF file.
     */
    PDFUrl: URI;

    /**
     * Currently selected page.
     */
    PDFPage: int;

    /**
     * The page numbers displayed in the Custom PDF UI are offset by this amount.
     */
    PDFPageOffset: int;
  };
}

/**
 * Object data for the tablet object.
 */
interface BrowserData extends ObjectData {
  Tablet: {
    PageURL: string;
  };
}

/**
 * Object data for a custom card.
 */
interface CardCustomData extends ObjectData {
  CardID: int;

  CustomDeck: LuaTable<int, CustomDeckData>;
}

interface ClockData extends ObjectData {
  Clock: {
    Mode: ClockMode;

    SecondsPassed: int;

    Paused: boolean;
  };
}

interface CounterData extends ObjectData {
  Counter: {
    value: int;
  };
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

interface LayoutZoneData extends ObjectData {
  LayoutZone: {
    /** Options set for this Layout Zone. */
    Options?: {
      /**
       * The directions the groups in the zone expand into. This will determine the origin corner.
       *
       * @defaultValue [[LayoutZoneDirection.RightDown]]
       */
      Direction?: LayoutZoneDirection;

      /**
       * The direction the objects within a group will expand into.
       *
       * @defaultValue [[LayoutZoneGroupDirection.East]]
       */
      MeldDirection?: LayoutZoneGroupDirection;

      /**
       * Determines whether newly added objects are turned face-up or face-down.
       *
       * @defaultValue [[LayoutZoneFacing.FaceUp]]
       */
      NewObjectFacing?: LayoutZoneFacing;

      /**
       * Face-Up objects dropped on zone will be laid out.
       *
       * @defaultValue `true`
       */
      TriggerForFaceUp?: boolean;

      /**
       * Face-Down objects dropped on zone will be laid out.
       *
       * @defaultValue `true`
       */
      TriggerForFaceDown?: boolean;

      /**
       * Non-card objects dropped on zone will be laid out.
       *
       * @defaultValue `false`
       */
      TriggerForNonCards?: boolean;

      /**
       * When moving an object from one full group to another, the object you drop on will be moved to the original group.
       *
       * @defaultValue `true`
       */
      AllowSwapping?: boolean;

      /**
       * When new objects are added to a zone, they will be gathered into groups of this many objects.
       *
       * @defaultValue 13
       */
      MaxObjectsPerNewGroup?: int;

      /**
       * Each group in the zone may not contain more than this number of objects.
       *
       * @defaultValue 0
       */
      MaxObjectsPerGroup?: int;

      /**
       * How groups are sorted internally.
       *
       * @defaultValue [[LayoutZoneSort.Name]]
       */
      MeldSort?: LayoutZoneSort;

      /**
       * When enabled the sort order inside a group is reversed.
       *
       * @defaultValue `false`
       */
      MeldReverseSort?: boolean;

      /**
       * When enabled all groups will be sorted when laid out, rather than only newly added groups.
       *
       * @defaultValue `false`
       */
      MeldSortExisting?: boolean;

      /**
       * When picked up, cards above the grabbed card will also be lifted.
       *
       * @defaultValue `false`
       */
      StickyCards?: boolean;

      /**
       * How far each object in a group is moved horizontally from the previous object.
       *
       * @defaultValue `0.6`
       */
      HorizontalSpread?: float;

      /**
       * How far each object in a group is moved vertically from the previous object.
       *
       * @defaultValue `0`
       */
      VerticalSpread?: float;

      /**
       * How much horizontal space is inserted between groups.
       *
       * @defaultValue `1`
       */
      HorizontalGroupPadding?: float;

      /**
       * How much vertical space is inserted between groups.
       *
       * @defaultValue `1`
       */
      VerticalGroupPadding?: float;

      /**
       * Decks added to the zone will be split into their individual cards.
       *
       * @defaultValue `true`
       */
      SplitAddedDecks?: boolean;

      /**
       * Whether cards added to the zone should be combined into decks.
       *
       * You may specify the number of cards per deck.
       *
       * @defaultValue `false`
       */
      CombineIntoDecks?: boolean;

      /**
       * Sets the size of decks made by the layout zone when it combines newly added cards.
       *
       * @defaultValue `0`
       */
      CardsPerDeck?: int;

      /**
       * Objects added to a group will be aligned up or right, different from the preceding object in the group.
       *
       * Used, for example, in trick-taking games to make counting easier.
       *
       * @defaultValue `false`
       */
      AlternateDirection?: boolean;

      /**
       * Objects will be randomized whenever they are laid out.
       *
       * @defaultValue `false`
       */
      Randomize?: boolean;

      /**
       * When enabled, if ever a group is picked up or removed the rest of the layout will trigger to fill in the gap.
       *
       * @defaultValue `false`
       */
      InstantRefill?: boolean;

      /**
       * The zone will not automatically lay out objects: it must be triggered manually.
       *
       * @defaultValue `false`
       */
      ManualOnly?: boolean;
    };
    GroupsInZone?: Array<GUID[]>;
  };
}

/**
 * Object data of a custom model.
 */
interface ModelData extends ObjectData {
  CustomMesh: {
    /** The path/URL for the .obj mesh used on the custom model. */
    MeshURL: URI;

    /** The path/URL for the diffuse image. */
    DiffuseURL?: URI;

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

interface RPGFigurineData extends ObjectData {
  /** Whether the mode is switched on the figurine. */
  RPGmode: boolean;

  /** Whether the dead mode is entered for the figurine. */
  RPGdead: boolean;
}

/**
 * Object data of a scripting zone.
 */
interface ScriptingZoneData extends ObjectData {}

/**
 * Object data of a 3D text object.
 */
interface TextData extends ObjectData {
  Text: {
    /** The text shown on the 3D text object. */
    Text: string;

    /** The color of the text. */
    colorstate: ColorRGB;

    /** The font size of the text. */
    fontSize: int;
  };
}

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

/**
 * Data for a rotation value of a die.
 */
interface RotationValueData {
  Value: RotationValue;

  Rotation: VectorTable;
}

/**
 * Data for an attached snap point.
 */
interface SnapPointData {
  Position: VectorTable;

  Rotation?: VectorTable;

  Tags?: string[];
}

/**
 * Data for a drawn vector line.
 */
interface VectorLineData {
  points3: VectorTable[];

  color: ColorRGB;

  thickness: float;

  rotation: VectorTable;

  loop?: boolean;
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
interface PlayerColorData {
  /** Red value between 0 and 1. */
  r: float;

  /** Green value between 0 and 1. */
  g: float;

  /** Blue value between 0 and 1. */
  b: float;
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

interface PositionData {
  x: float;
  y: float;
  z: float;
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
