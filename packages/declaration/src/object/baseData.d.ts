/** Base type for all object data. */
interface BaseObjectData {
  /** The "unique" ID of the object. */
  GUID?: GUID;

  /** The type of the object. */
  Name: ObjectName;

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

  AttachedDecals?: DecalData[];

  AttachedSnapPoints?: SnapPointData[];

  AttachedVectorLines?: VectorLineData[];

  States?: {
    [index: number]: ObjectData;
  };

  CustomUIAssets?: CustomUIAsset[];

  AltLookAngle?: VectorTable;
}
