import { AssetBundleData, BagModelType, MaterialType, ModelType, ObjectData } from "@typed-tabletop-simulator/data";

import { BaseProperties, createBaseObject } from "./baseObject";

export type AssetBundleProperties = AssetBundleBaseProperties | AssetBundleBagProperties;

interface AssetBundleBaseProperties extends BaseProperties, SharedProperties {
  type: Exclude<ModelType, BagModelType>;
}

interface AssetBundleBagProperties extends BaseProperties, SharedProperties {
  type: BagModelType;
  content: ObjectData[];
}

interface SharedProperties {
  /** URL to the primary asset bundle. */
  bundle: string;
  /** URL to the secondary asset bundle. */
  secondaryBundle?: string;
  /** The type of material. */
  material?: MaterialType;
  /** The index of the current looping index. */
  loopingEffect?: number;
}

export const createAssetBundle = (properties: AssetBundleProperties): AssetBundleData => {
  const base = createBaseObject(properties);
  const asset = {
    CustomAssetbundle: {
      AssetbundleURL: properties.bundle,
      AssetbundleSecondaryURL: properties.secondaryBundle,
      TypeIndex: properties.type,
      MaterialIndex: properties.material,
      LoopingEffectIndex: properties.loopingEffect,
    },
  };

  if (properties.type === ModelType.Bag) {
    return {
      Name: "Custom_Assetbundle_Bag",
      ...base,
      ...asset,
      ContainedObjects: properties.content,
    };
  }
  if (properties.type === ModelType.Infinite) {
    return {
      Name: "Custom_Assetbundle_Infinite_Bag",
      ...base,
      ...asset,
      ContainedObjects: properties.content,
    };
  }

  return {
    Name: "Custom_Assetbundle",
    ...base,
    ...asset,
  };
};
