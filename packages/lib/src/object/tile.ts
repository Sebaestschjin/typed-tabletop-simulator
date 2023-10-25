import { BaseProperties, createBaseObject } from "./baseObject";

export interface TileProperties extends BaseProperties {
  front: string;
  back: string;
  thickness: number;
  stackable?: boolean;
}

export const createCustomTile = (properties: TileProperties): TileData => {
  return {
    ...createBaseObject(properties, ObjectName.Tile),
    CustomImage: {
      CustomTile: {
        Type: TileType.Box,
        Thickness: properties.thickness,
        Stackable: properties.stackable ?? true,
      },
      ImageURL: properties.front,
      ImageSecondaryURL: properties.back,
    },
  };
};
