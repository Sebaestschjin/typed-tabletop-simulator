import { BaseProperties, createBaseObject } from "./baseObject";

export interface BagProperties extends BaseProperties {
  content?: ObjectData[];
}

export const createBag = (properties: BagProperties): BagData => {
  return {
    ...createBaseObject(properties, ObjectName.Bag),
    ContainedObjects: properties.content,
  };
};
