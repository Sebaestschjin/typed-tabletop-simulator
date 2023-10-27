import { BaseProperties, createBaseObject } from "./baseObject";

export interface CardProperties extends BaseProperties {
  front: string;
  back: string;
}

export const createCard = (properties: CardProperties) => {
  return createBaseObject(properties, ObjectName.CardCustom);
};
