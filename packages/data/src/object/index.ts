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

const _ObjectData = type.module({
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
type _ObjectData = typeof _ObjectData.objectData.infer;

const States = type({
  "States?": type.Record("string", _ObjectData.objectData),
})
type States = typeof States.infer;

export const ObjectData = _ObjectData.objectData.and(States)
export type ObjectData = _ObjectData & States;
export type ObjectName = ObjectData["Name"];
export type ContainerData = typeof _ObjectData.container.infer & States;

export type AssetBundleData =
  (
    | typeof _ObjectData.asset.infer
    | typeof _ObjectData.assetBag.infer
    | typeof _ObjectData.assetInfinite.infer)
  & States;
export type BagData = typeof _ObjectData.bag.infer & States;
export type BagInfiniteData = typeof _ObjectData.bagInfinite.infer & States;
export type CardData = typeof _ObjectData.card.infer & States;
export type DeckData = typeof _ObjectData.deck.infer & States;
export type ModelData =
  (
    | typeof _ObjectData.model.infer
    | typeof _ObjectData.modelBag.infer
    | typeof _ObjectData.modelInfinite.infer) & States;
export type ModelDataName = ModelData["Name"];
export type InfiniteBagData = typeof _ObjectData.bagInfinite.infer & States;
export type TileData = typeof _ObjectData.tile.infer & States;

export { MaterialType, UIAssetType } from "./base.js";
export type { ObjectDataBase, SnapPointData, UIAssetData } from "./base.js";

export { CardType } from "./deck.js";
export { ModelType, type BagModelType } from "./model.js";
export { TileType } from "./tile.js";
