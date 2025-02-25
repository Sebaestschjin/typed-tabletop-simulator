/**
 * A bag object.
 *
 * @category Object Type
 */
declare interface TTSBag<B extends BagBaseData> extends TTSBaseObject {
  type: ObjectType.Bag;

  Container: ContainerBehavior;

  getObjects(): ContainedObjectInfo[];

  getData(): B;
}

/**
 * An infinite bag object.
 *
 * @category Object Type
 */
declare interface TTSBagInfinite extends TTSBaseObject {
  type: ObjectType.Infinite;

  Container: ContainerBehavior;

  getObjects(): [ContainedObjectInfo];

  getData(): BagInfiniteData;
}

/**
 * Object data for a regular bag.
 */
interface BagBaseData extends BaseObjectData {
  Bag?: {
    Order: BagOrder;
  };

  ContainedObjects?: ObjectData[];
}

/**
 * Object data for an infinite bag.
 */
interface BagInfiniteBaseData extends BaseObjectData {
  ContainedObjects?: [ObjectData];
}

/**
 * Object data for the regular bag component.
 */
interface BagData extends BagBaseData {
  Name: ObjectName.Bag;
}

/**
 * Object data for the regular infinite bag component.
 */
interface BagInfiniteData extends BagInfiniteBaseData {
  Name: ObjectName.InfiniteBag;
}
