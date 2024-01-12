import FlatHexGrid from "./flatHexGrid";
import { GameGrid } from "./gameGrid";
import PointyHexGrid from "./pointyHexGrid";

export interface AxialCoordinate {
  q: number;
  r: number;
}

export interface OffsetCoordinate {
  q: number;
  r: number;
}

export interface Point {
  x: number;
  y: number;
}

export const getCurrentGrid = (): GameGrid => {
  switch (Grid.type) {
    case GridType.HorizontalHexes:
      return new FlatHexGrid(Grid.sizeX / 2);
    case GridType.VerticalHexes:
      return new PointyHexGrid(Grid.sizeX / 2);
    default:
      throw `Can not create a grid for grid: ${Grid.type}`;
  }
};
