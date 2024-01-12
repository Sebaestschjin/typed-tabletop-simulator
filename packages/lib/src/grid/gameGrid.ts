import type { AxialCoordinate, OffsetCoordinate, Point } from "./grid";

export abstract class GameGrid {
  public readonly size: number;

  abstract positionToGrid(point: Point): AxialCoordinate;
  abstract gridToPosition(coord: AxialCoordinate): Point;
  abstract toOffset(coord: AxialCoordinate): OffsetCoordinate;
  abstract toAxial(coord: OffsetCoordinate): AxialCoordinate;

  constructor(size: number) {
    this.size = size;
  }

  round = (coordinate: AxialCoordinate): AxialCoordinate => {
    const qGrid = Math.round(coordinate.q);
    const rGrid = Math.round(coordinate.r);
    coordinate.q -= qGrid;
    coordinate.r -= rGrid;

    if (Math.abs(coordinate.q) >= Math.abs(coordinate.r)) {
      return { q: qGrid + Math.round(coordinate.q + 0.5 * coordinate.r), r: rGrid };
    }

    return { q: qGrid, r: rGrid + Math.round(coordinate.q + 0.5 * coordinate.r) };
  };
}
