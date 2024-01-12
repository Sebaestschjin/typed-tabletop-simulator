import type { AxialCoordinate, OffsetCoordinate, Point } from "./grid";
import { HexGrid } from "./hexGrid";

class FlatHexGrid extends HexGrid {
  positionToGrid = (point: Point): AxialCoordinate => {
    const q = ((2 / 3) * point.x) / this.size;
    const r = ((-1 / 3) * point.x + (Math.sqrt(3) / 3) * point.y) / this.size;

    return { q: q, r: r };
  };

  gridToPosition = (coord: AxialCoordinate): Point => {
    const size = this.size;
    const x = size * ((3 / 2) * coord.q);
    const y = size * ((Math.sqrt(3) / 2) * coord.q + Math.sqrt(3) * coord.r);

    return { x: x, y: y };
  };

  toOffset(coord: AxialCoordinate): OffsetCoordinate {
    const q = coord.q;
    const r = coord.r + (coord.q - this.oddValue(coord.q)) / 2;
    return { q: q, r: r };
  }

  toAxial(coord: OffsetCoordinate): AxialCoordinate {
    const q = coord.q;
    const r = coord.r - (coord.q - this.oddValue(coord.q)) / 2;
    return { q: q, r: r };
  }
}

export default FlatHexGrid;
