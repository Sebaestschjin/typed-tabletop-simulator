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
  color?: ColorData;
  viewAngle?: VectorTable;
  assets?: Asset[];
  script?: string;
  ui?: string;
}

export type Asset = ImageAsset | AssetBundleAsset;

interface ImageAsset {
  name: string;
  image: string;
}

interface AssetBundleAsset {
  name: string;
  assetBundle: string;
}

export const createBaseObject = (properties: BaseProperties, type: ObjectName) => {
  return {
    GUID: properties.guid || createGuid(),
    Name: type,
    Nickname: properties.name,
    Description: properties.description,
    GMNotes: properties.gmNotes,
    Memo: properties.memo,
    Tags: properties.tags,
    Transform: createTransform(properties),
    ColorDiffuse: properties.color,
    AltLookAngle: properties.viewAngle,
    CustomUIAssets: createAssets(properties),
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

export const addAsset = (object: ObjectData, asset: Asset) => {
  object.CustomUIAssets ??= [];

  const newAsset = createAsset(asset);

  if (!object.CustomUIAssets.find((a) => a.Name === newAsset.Name || a.URL === newAsset.URL)) {
    object.CustomUIAssets.push(newAsset);
  }
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
