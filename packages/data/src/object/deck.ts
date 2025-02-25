import { type } from "arktype";

import { ObjectDataBase } from "./base.js";

export const CardType = {
  RectangleRounded: 0,
  Rectangle: 1,
  HexRounded: 2,
  Hex: 3,
  Circle: 4,
} as const;

const CardTypeValue = type.enumerated(
  CardType.RectangleRounded,
  CardType.Rectangle,
  CardType.HexRounded,
  CardType.Hex,
  CardType.Circle
);
export type CardType = typeof CardTypeValue.infer;

export const CustomDeckData = type({
  Type: CardTypeValue,
  FaceURL: "string",
  BackURL: "string",
  NumWidth: "number",
  NumHeight: "number",
  BackIsHidden: "boolean",
  UniqueBack: "boolean",
});

export const CustomDecksData = type.Record("string", CustomDeckData);

export const DeckData = ObjectDataBase.and({
  Name: "'DeckCustom'",
  DeckIDs: "number[]",
  CustomDeck: CustomDecksData,
});
