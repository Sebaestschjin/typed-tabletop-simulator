import { BaseProperties, createBaseObject } from "./baseObject";

type BagType = ModelType.Bag | ModelType.Infinite;

export type AssetBundleProperties = AssetBundleBaseProperties | AssetBundleBagProperties;

interface AssetBundleBaseProperties extends BaseProperties, SharedProperties {
  type: Exclude<ModelType, BagType>;
}

interface AssetBundleBagProperties extends BaseProperties, SharedProperties {
  type: BagType;
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
  const customAssetBundle: AssetBundleBaseData = {
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
      ...createBaseObject(properties, ObjectName.AssetBundleBag),
      ...customAssetBundle,
      ContainedObjects: properties.content,
    } as AssetBundleData;
  }
  if (properties.type === ModelType.Infinite) {
    return {
      ...createBaseObject(properties, ObjectName.AssetBundleInfiniteBag),
      ...customAssetBundle,
      ContainedObjects: properties.content,
    } as AssetBundleData;
  }

  return {
    ...createBaseObject(properties, ObjectName.AssetBundle),
    ...customAssetBundle,
  } as AssetBundleData;
};
