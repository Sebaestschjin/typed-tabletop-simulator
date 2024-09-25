interface AssetBundleBaseData {
  CustomAssetbundle: {
    /** The URL to the main asset bundle. */
    AssetbundleURL: URI;
    /** The URL to the secondary asset bundle. */
    AssetbundleSecondaryURL?: URI;
    /** The type of material for the object. */
    MaterialIndex?: MaterialType;
    /** The type of object for the asset bundle. */
    TypeIndex?: ModelType;
    /** The current looping effect. */
    LoopingEffectIndex?: int;
  };
}

type AssetBundleData = AssetBundleRegularData | AssetBundleBagData | AssetBundleInfiniteBagData;

interface AssetBundleRegularData extends AssetBundleBaseData, ObjectData {
  Name: ObjectName.AssetBundle;
}

interface AssetBundleBagData extends AssetBundleBaseData, BagData {
  Name: ObjectName.AssetBundleBag;
}

interface AssetBundleInfiniteBagData extends AssetBundleBaseData, BagData {
  Name: ObjectName.AssetBundleInfiniteBag;
}
