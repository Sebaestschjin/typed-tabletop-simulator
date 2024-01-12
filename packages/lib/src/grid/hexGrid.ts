import { GameGrid } from "./gameGrid";

export abstract class HexGrid extends GameGrid {
  protected oddValue = (value: number): number => {
    return value % 2 == 0 ? 0 : 1;
  };
}
