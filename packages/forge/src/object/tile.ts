import { TileData, TileType } from "@typed-tabletop-simulator/data";

import { BaseProperties, createBaseObject } from "./baseObject.js";

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
    Name: "Custom_Tile",
    ...createBaseObject(properties),
    CustomImage: {
      ImageURL: properties.front,
      ImageSecondaryURL: properties.back ?? properties.front,
      CustomTile: {
        Type: properties.type ?? TileType.Box,
        Thickness: properties.thickness ?? 0.1,
        Stackable: properties.stackable ?? false,
        Stretch: properties.stretch ?? true,
      },
    },
  };
};
