import { ObjectDataBase } from "./base.js";
import { CustomDecksData } from "./deck.js";

export const CardData = ObjectDataBase.and({
  Name: "'Card'",
  CardID: "number",
  CustomDeck: CustomDecksData,
});
