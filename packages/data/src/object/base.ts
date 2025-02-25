import { type } from "arktype";

export const VectorData = type({
  x: "number",
  y: "number",
  z: "number",
});

export const TransformData = type({
  /** X-coordinate (left/right) of the position. */
  posX: "number",
  /** Y-coordinate (up/down) of the position. */
  posY: "number",
  /** Z-coordinate (front/back) of the position. */
  posZ: "number",
  /** Rotation on the x-axis. */
  rotX: "number",
  /** Rotation on the y-axis. */
  rotY: "number",
  /** Rotation on the z-axis. */
  rotZ: "number",
  /** Scale on the x-axis. */
  scaleX: "number",
  /** Scale on the y-axis. */
  scaleY: "number",
  /** Scale on the z-axis. */
  scaleZ: "number",
});
export type TransformData = typeof TransformData.infer;

export const ColorData = type({
  /** Red value between 0 and 1. */
  r: "number",
  /** Green value between 0 and 1. */
  g: "number",
  /** Blue value between 0 and 1. */
  b: "number",
  /** Alpha value between 0 and 1. */
  "a?": "number",
});
export type ColorData = typeof ColorData.infer;

export const SnapPointData = type({
  Position: VectorData,
  "Rotation?": VectorData,
  "Tags?": "string[]",
});
export type SnapPointData = typeof SnapPointData.infer;

export const UIAssetType = {
  /** The custom asset is an image. */
  Image: 0,
  /** The custom asset is a Unity assetbundle. */
  AssetBundle: 1,
} as const;

const UIAssetDataType = type.enumerated(UIAssetType.Image, UIAssetType.AssetBundle);

export const UIAssetData = type({
  Type: UIAssetDataType,
  /** Name of the custom asset. */
  Name: "string",
  /** URL to the custom asset. */
  URL: "string",
});
export type UIAssetData = typeof UIAssetData.infer;

export const MaterialType = {
  Plastic: 0,
  Wood: 1,
  Metal: 2,
  Cardboard: 3,
  Glass: 4,
} as const;

export const MaterialTypeValue = type.enumerated(
  MaterialType.Plastic,
  MaterialType.Wood,
  MaterialType.Metal,
  MaterialType.Cardboard,
  MaterialType.Glass
);

export type MaterialType = typeof MaterialTypeValue.infer;

export const ObjectDataBase = type({
  /** The unique ID of the object. */
  GUID: "string",
  /** The shown name of the object. */
  Nickname: "string",
  /** The shown description of the object. */
  "Description?": "string",
  /** The notes shown for the GM player of the object. */
  "GMNotes?": "string",
  /** The content of the hidden metadata field of the object. */
  "Memo?": "string",
  /** Tags assigned to the object. */
  "Tags?": "string[]",
  /** The position, rotation and scale of the object. */
  Transform: TransformData,
  /** The color of the object. */
  "ColorDiffuse?": ColorData,
  /** Snap points added to the object. */
  "AttachedSnapPoints?": SnapPointData.array(),
  /** The angle that is used for the alt preview. */
  "AltLookAngle?": VectorData,
  /** Whether the object is currently locked or not. */
  "Locked?": "boolean",
  /** Whether the object should snap to the grid. */
  "Grid?": "boolean",
  /** Whether the object should snap to snap points. */
  "Snap?": "boolean",
  /** Whether the object shows its name and description as a tooltip on hovering it. */
  "Tooltip?": "boolean",
  /** The attached Lua script. */
  "LuaScript?": "string",
  /** The current saved script state. */
  "LuaScriptState?": "string",
  /** The attached XML UI. */
  "XmlUI?": "string",
  /** Custom assets added to the object. */
  "CustomUIAssets?": UIAssetData.array(),
});
export type ObjectDataBase = typeof ObjectDataBase.infer;
