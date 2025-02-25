import { type } from "arktype";
import { ObjectDataBase } from "./base.js";

export const TileType = {
  Box: 0,
  Hex: 1,
  Circle: 2,
  Rounded: 3,
} as const;

export const TileTypeValue = type.enumerated(TileType.Box, TileType.Hex, TileType.Circle, TileType.Rounded);
export type TileType = typeof TileTypeValue.infer;

export const TileData = ObjectDataBase.and({
  Name: "'Custom_Tile'",
  CustomImage: {
    ImageURL: "string",
    "ImageSecondaryURL?": "string",
    CustomTile: {
      Type: TileTypeValue,
      "Thickness?": "number",
      "Stackable?": "boolean",
      "Stretch?": "boolean",
    },
  },
});
