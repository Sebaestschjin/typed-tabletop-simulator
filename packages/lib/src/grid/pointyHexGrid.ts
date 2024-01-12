import type { AxialCoordinate, OffsetCoordinate, Point } from "./grid";
import { HexGrid } from "./hexGrid";

class PointyHexGrid extends HexGrid {
  positionToGrid = (point: Point): AxialCoordinate => {
    const q = ((Math.sqrt(3) / 3) * point.x - (1 / 3) * point.y) / this.size;
    const r = ((2 / 3) * point.y) / this.size;

    return { q: q, r: r };
  };

  gridToPosition = (coord: AxialCoordinate): Point => {
    const x = this.size * (Math.sqrt(3) * coord.q + (Math.sqrt(3) / 2) * coord.r);
    const y = this.size * ((3 / 2) * coord.r);

    return { x: x, y: y };
  };

  toOffset(coord: AxialCoordinate): OffsetCoordinate {
    const q = coord.q + (coord.r - this.oddValue(coord.r)) / 2;
    const r = coord.r;
    return { q: q, r: r };
  }

  toAxial(coord: OffsetCoordinate): AxialCoordinate {
    const q = coord.q - (coord.r - this.oddValue(coord.r)) / 2;
    const r = coord.r;
    return { q: q, r: r };
  }
}

export default PointyHexGrid;
