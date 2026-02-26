import { createAssetBundle } from "./object/assetBundle.js";
import { createBag } from "./object/bag.js";
import { createDeck } from "./object/deck.js";
import { createModel } from "./object/model.js";
import { createSaveFile } from "./object/saveFile.js";
import { createTile } from "./object/tile.js";
import { createStates } from "./object/baseObject.js";

export type { Asset } from "./object/baseObject.js";

export default {
  createAssetBundle,
  createBag,
  createDeck,
  createModel,
  createStates,
  createTile,
  createSaveFile,
};
