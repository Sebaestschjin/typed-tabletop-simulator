import { type } from "arktype";

import { BagData, InfiniteBagData } from "./bag.js";
import { BookData } from "./book.js";
import { BrowserData } from "./browser.js";
import { CardData } from "./card.js";
import { DeckData } from "./deck.js";
import { DieData } from "./die.js";
import { ModelBagData, ModelData, ModelInfiniteBagData } from "./model.js";
import { TileData } from "./tile.js";
import { AssetBundleBagData, AssetBundleData, AssetBundleInfiniteBagData } from "./assetBundle.js";

// currently ignored object types
// * boards
// * single custom cards
// * clocks
// * counter

const ObjectData = type.module({
  objectData: `
asset
| assetBag
| assetInfinite
| bag
| bagInfinite
| book
| browser
| card
| die
| deck
| model
| modelBag
| modelInfinite
| tile`,
  container: "assetBag | assetInfinite | bag | bagInfinite | modelBag | modelInfinite | deck",
  content: [
    "children",
    "&",
    {
      ContainedObjects: "objectData[]",
    },
  ],
  children: {
    "ChildObjects?": "objectData[]",
  },
  asset: [AssetBundleData, "&", "children"],
  assetBag: [AssetBundleBagData, "&", "content"],
  assetInfinite: [AssetBundleInfiniteBagData, "&", "content"],
  bag: [BagData, "&", "content"],
  bagInfinite: [InfiniteBagData, "&", "content"],
  book: [BookData, "&", "children"],
  browser: [BrowserData, "&", "children"],
  card: [CardData, "&", "children"],
  deck: [DeckData, "&", { ContainedObjects: "card[]" }],
  die: [DieData, "&", "children"],
  tile: [TileData, "&", "children"],
  model: [ModelData, "&", "children"],
  modelBag: [ModelBagData, "&", "content"],
  modelInfinite: [ModelInfiniteBagData, "&", "content"],
});

export type ObjectData = typeof ObjectData.objectData.infer;
export type ObjectName = ObjectData["Name"];
export type ContainerData = typeof ObjectData.container.infer;

export type AssetBundleData =
  | typeof ObjectData.asset.infer
  | typeof ObjectData.assetBag.infer
  | typeof ObjectData.assetInfinite.infer;
export type BagData = typeof ObjectData.bag.infer;
export type BagInfiniteData = typeof ObjectData.bagInfinite.infer;
export type CardData = typeof ObjectData.card.infer;
export type DeckData = typeof ObjectData.deck.infer;
export type ModelData =
  | typeof ObjectData.model.infer
  | typeof ObjectData.modelBag.infer
  | typeof ObjectData.modelInfinite.infer;
export type ModelDataName = ModelData["Name"];
export type InfiniteBagData = typeof ObjectData.bagInfinite.infer;
export type TileData = typeof ObjectData.tile.infer;

export { MaterialType, UIAssetType } from "./base.js";
export type { ObjectDataBase, SnapPointData, UIAssetData } from "./base.js";

export { CardType } from "./deck.js";
export { ModelType, BagModelType } from "./model.js";
export { TileType } from "./tile.js";
