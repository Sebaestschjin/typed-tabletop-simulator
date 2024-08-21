import math from "../math";

export interface BaseProperties {
  guid?: string;
  name: string;
  description?: string;
  memo?: string;
  gmNotes?: string;
  tags?: string[];
  position?: VectorTable;
  rotation?: VectorTable;
  scale?: VectorTable | number;
  locked?: boolean;
  color?: ColorData | string;
  viewAngle?: VectorTable;
  assets?: Asset[];
  snapPoints?: SnapPoint[];
  script?: string;
  ui?: string;
  tooltip?: boolean;
}

export type Asset = ImageAsset | AssetBundleAsset;

/**
 * A snappoint.
 * Either just the position of the snappoint or a complete definition with rotation or tags.
 */
export type SnapPoint =
  | VectorTable
  | {
      position: VectorTable;
      rotation?: VectorTable;
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

export const createBaseObject = (properties: BaseProperties, type: ObjectName): ObjectData => {
  return {
    GUID: properties.guid ?? createGuid(),
    Name: type,
    Nickname: properties.name,
    Description: properties.description,
    GMNotes: properties.gmNotes,
    Memo: properties.memo,
    Tags: properties.tags,
    Transform: createTransform(properties),
    Locked: properties.locked,
    ColorDiffuse: properties.color ? createColor(properties.color) : undefined,
    AltLookAngle: properties.viewAngle,
    Tooltip: properties.tooltip,
    CustomUIAssets: createAssets(properties),
    AttachedSnapPoints: createSnapPoints(properties),
    LuaScript: properties.script,
    XmlUI: properties.ui,
  };
};

export const createGuid = () => {
  return "123456";
};

export const createTransform = (properties: BaseProperties) => {
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

export const createColor = (color: ColorData | string): ColorData => {
  if (typeof color === "string") {
    color = color.replace("#", "");
    const [r, g, b] = [color.slice(0, 2), color.slice(2, 4), color.slice(4, 6)];
    const a = color.length > 6 ? color.slice(6) : undefined;
    color = { r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16), a: a ? parseInt(a, 16) : undefined };
  }

  if (color.r > 1 || color.g > 1 || color.b > 1) {
    const adjust = (value: number) => math.round(value / 255, 4);

    return {
      r: adjust(color.r),
      g: adjust(color.g),
      b: adjust(color.b),
      a: color.a ? adjust(color.a) : undefined,
    };
  }

  return color;
};

export const addAsset = (object: ObjectData, asset: Asset) => {
  object.CustomUIAssets ??= [];

  const newAsset = createAsset(asset);

  if (!object.CustomUIAssets.find((a) => a.Name === newAsset.Name || a.URL === newAsset.URL)) {
    object.CustomUIAssets.push(newAsset);
  }
};

const createSnapPoints = (properties: BaseProperties): Maybe<SnapPointData[]> => {
  if (!properties.snapPoints) {
    return undefined;
  }

  return properties.snapPoints.map(createSnapPoint);
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

const createAsset = (asset: Asset) => {
  if ("image" in asset) {
    return {
      Type: 0,
      Name: asset.name,
      URL: asset.image,
    };
  }
  return {
    Type: 1,
    Name: asset.name,
    URL: asset.assetBundle,
  };
};
