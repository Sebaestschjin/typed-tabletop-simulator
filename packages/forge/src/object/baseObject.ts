import {
  ObjectData,
  ObjectDataBase,
  ObjectName,
  SnapPointData,
  UIAssetData,
  UIAssetType,
} from "@typed-tabletop-simulator/data";

import { Color, Maybe, Vector } from "../types";
import { round } from "../util";

/**
 * Base properties for creating new objects.
 */
export interface BaseProperties {
  /** The global ID of the object. Will be generated if not set. */
  guid?: string;
  /** The diplay name of the object. */
  name: string;
  /** The additional description of the object. */
  description?: string;
  /** Metadata added to the object. If given as an object it will be serialized into JSON. */
  metadata?: string | object;
  /** Notes added to the object. */
  notes?: string;
  /** Tags added to the object giving it certain traits. */
  tags?: string[];
  /** The position where the object is at. */
  position?: Vector;
  /** The rotation of the object. */
  rotation?: Vector;
  /** The scale of the object. If given a single number all axes will get the given scale. */
  scale?: Vector | number;
  /** Determines if the object is currently locked. */
  locked?: boolean;
  /** The color of the object. Can be an RGB table or a hex color. */
  color?: Color | string;
  /** The angle used for the preview view of the object. */
  viewAngle?: Vector;
  /** UI assets added to the object. */
  assets?: Asset[];
  /** Snap points added to the object. */
  snapPoints?: SnapPoint[];
  /** Script code added to the object. */
  script?: string;
  /** Current state used for the script. If given as an object it will be serialized into JSON. */
  state?: string | object;
  /** UI script added to the object. */
  ui?: string;
  /** Determines whether this objects shows a tooltip when hovered. */
  tooltip?: boolean;
}

type Metadata = string | object;

export type Asset = ImageAsset | AssetBundleAsset;

/**
 * A snappoint.
 * Either just the position of the snappoint or a complete definition with rotation and/or tags.
 */
export type SnapPoint =
  | Vector
  | {
      position: Vector;
      rotation?: Vector;
      tags?: string[];
    };

interface ImageAsset {
  name: string;
  image: string;
}

interface AssetBundleAsset {
  name: string;
  assetBundle: string;
}

export const createBaseObject = (properties: BaseProperties): ObjectDataBase => {
  return {
    GUID: properties.guid ?? createGuid(),
    Nickname: properties.name,
    Description: properties.description,
    GMNotes: properties.notes,
    Memo: parseMetadata(properties.metadata),
    Tags: properties.tags,
    Transform: createTransform(properties),
    Locked: properties.locked,
    ColorDiffuse: properties.color ? createColor(properties.color) : undefined,
    AltLookAngle: properties.viewAngle,
    Tooltip: properties.tooltip,
    CustomUIAssets: createAssets(properties),
    AttachedSnapPoints: createSnapPoints(properties),
    LuaScript: properties.script,
    LuaScriptState: parseMetadata(properties.state),
    XmlUI: properties.ui,
  };
};

/**
 * Creates a stated object from the given object data.
 *
 * @param objects The list of objects to add as states. The order in this list will represent the state numbers.
 * @param startingState The index of `objects` of the object which should be the current object. Defaults to the first entry.
 */
// export const createStates = (objects: ObjectData[], startingState: number = 0): ObjectData => {
//   const baseObject = objects[startingState];

//   baseObject.States = {};

//   for (let i = 0; i < objects.length; i++) {
//     if (i === startingState) {
//       continue;
//     }

//     const stateId = i + 1;
//     baseObject.States[stateId] = objects[i];
//   }

//   return baseObject;
// };

const createGuid = () => {
  return "123456";
};

const createTransform = (properties: BaseProperties) => {
  const position = properties.position || { x: 0, y: 0, z: 0 };
  const rotation = properties.rotation || { x: 0, y: 0, z: 0 };
  let scale = properties.scale || 1;
  if (typeof scale === "number") {
    scale = { x: scale, y: scale, z: scale };
  }

  return {
    posX: position.x,
    posY: position.y,
    posZ: position.z,
    rotX: rotation.x,
    rotY: rotation.y,
    rotZ: rotation.z,
    scaleX: scale.x,
    scaleY: scale.y,
    scaleZ: scale.z,
  };
};

const createColor = (color: Color | string): Color => {
  if (typeof color === "string") {
    color = color.replace("#", "");
    const [r, g, b] = [color.slice(0, 2), color.slice(2, 4), color.slice(4, 6)];
    const a = color.length > 6 ? color.slice(6) : undefined;
    color = { r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16), a: a ? parseInt(a, 16) : undefined };
  }

  if (color.r > 1 || color.g > 1 || color.b > 1) {
    const adjust = (value: number) => round(value / 255, 4);

    return {
      r: adjust(color.r),
      g: adjust(color.g),
      b: adjust(color.b),
      a: color.a ? adjust(color.a) : undefined,
    };
  }

  return color;
};

const parseMetadata = (metadata: Maybe<Metadata>): Maybe<string> => {
  if (!metadata) {
    return undefined;
  }

  if (typeof metadata === "string") {
    return metadata;
  }

  return JSON.stringify(metadata);
};

const createSnapPoints = (properties: BaseProperties): Maybe<SnapPointData[]> => {
  if (!properties.snapPoints) {
    return undefined;
  }

  return properties.snapPoints.map((s) => createSnapPoint(s));
};

const createSnapPoint = (snapPoint: SnapPoint): SnapPointData => {
  if ("position" in snapPoint) {
    return {
      Position: { ...snapPoint.position },
      Rotation: snapPoint.rotation ? { ...snapPoint.rotation } : undefined,
      Tags: snapPoint.tags,
    };
  }

  return {
    Position: snapPoint,
  };
};

const createAssets = (properties: BaseProperties) => {
  return properties.assets?.map((a) => createAsset(a));
};

const createAsset = (asset: Asset): UIAssetData => {
  if ("image" in asset) {
    return {
      Type: UIAssetType.Image,
      Name: asset.name,
      URL: asset.image,
    };
  }
  return {
    Type: UIAssetType.AssetBundle,
    Name: asset.name,
    URL: asset.assetBundle,
  };
};
