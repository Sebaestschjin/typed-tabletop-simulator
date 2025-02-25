import { BagData, ObjectData } from "@typed-tabletop-simulator/data";

import { BaseProperties, createBaseObject } from "./baseObject";

/**
 * Properties for creating new bag objects.
 */
export interface BagProperties extends BaseProperties {
  /** Content inside the bag. */
  content?: ObjectData[];
}

/**
 * Creates a new bag object.
 *
 * @param properties The properties of the bag.
 */
export const createBag = (properties: BagProperties): BagData => {
  return {
    Name: "Bag",
    ...createBaseObject(properties),
    ContainedObjects: properties.content ?? [],
  };
};
