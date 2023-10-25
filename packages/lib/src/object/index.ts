import { createCustomCard } from "./card";
import { createCustomDeck, createDeckId } from "./deck";
import { createCustomModel } from "./model";
import { createCustomTile } from "./tile";

export type * from "./deck";

export const Forge = {
  createCard: createCustomCard,
  createDeck: createCustomDeck,
  createDeckId: createDeckId,
  createModel: createCustomModel,
  createTile: createCustomTile,
};
