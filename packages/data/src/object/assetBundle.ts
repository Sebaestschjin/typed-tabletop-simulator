import { type } from "arktype";

import { MaterialTypeValue, ObjectDataBase } from "./base.js";
import { BagObjectData } from "./bag.js";
import { ModelTypeValue } from "./model.js";

export const AsseetBundleObjectData = type({
  CustomAssetbundle: {
    /** The URL to the main asset bundle. */
    AssetbundleURL: "string",
    /** The URL to the secondary asset bundle. */
    "AssetbundleSecondaryURL?": "string",
    /** The type of material for the object. */
    "MaterialIndex?": MaterialTypeValue,
    /** The type of object for the asset bundle. */
    "TypeIndex?": ModelTypeValue,
    /** The current looping effect. */
    "LoopingEffectIndex?": "number",
  },
});

export const AssetBundleData = ObjectDataBase.and({
  Name: "'Custom_Assetbundle'",
}).and(AsseetBundleObjectData);

export const AssetBundleBagData = ObjectDataBase.and({
  Name: "'Custom_Assetbundle_Bag'",
})
  .and(AsseetBundleObjectData)
  .and(BagObjectData);

export const AssetBundleInfiniteBagData = ObjectDataBase.and({
  Name: "'Custom_Assetbundle_Infinite_Bag'",
}).and(AsseetBundleObjectData);
