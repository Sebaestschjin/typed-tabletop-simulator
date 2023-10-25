import { BaseProperties, createBaseObject } from "./baseObject";

export interface CardProperties extends BaseProperties {
  front: string;
  back: string;
}

export const createCustomCard = (properties: CardProperties) => {
  return createBaseObject(properties, ObjectName.CardCustom);
};
