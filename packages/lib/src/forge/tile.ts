import { BaseProperties, createBaseObject } from "./baseObject";

export interface TileProperties extends BaseProperties {
  front: string;
  back?: string;
  type?: TileType;
  thickness?: number;
  stackable?: boolean;
  stretch?: boolean;
}

export const createTile = (properties: TileProperties): TileData => {
  return {
    ...createBaseObject(properties, ObjectName.Tile),
    CustomImage: {
      CustomTile: {
        Type: properties.type ?? TileType.Box,
        Thickness: properties.thickness ?? 0.1,
        Stackable: properties.stackable ?? false,
        Stretch: properties.stretch ?? true,
      },
      ImageURL: properties.front,
      ImageSecondaryURL: properties.back ?? properties.front,
    },
  };
};
