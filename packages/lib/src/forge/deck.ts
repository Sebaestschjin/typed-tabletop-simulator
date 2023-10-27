import { BaseProperties, createBaseObject } from "./baseObject";

let currentDeckId = 1337;

export interface CustomDeckProperties extends BaseProperties {
  type?: CardType;
  deckId?: number;
  front: string;
  back: string;
  width: number;
  height: number;
  cards: CardProperties[];
}

export interface CardProperties extends BaseProperties {
  index: number;
}

export const createDeckId = () => {
  return currentDeckId++;
};

export const createDeck = (properties: CustomDeckProperties): DeckCustomData => {
  const deckId = properties.deckId || createDeckId();

  const customDeck = {
    [deckId]: {
      Type: properties.type ?? CardType.RectangleRounded,
      FaceURL: properties.front,
      BackURL: properties.back,
      NumWidth: properties.width,
      NumHeight: properties.height,
      BackIsHidden: true,
      UniqueBack: false,
    },
  };

  const createCard = (card: CardProperties) => {
    return {
      ...createBaseObject(card, ObjectName.Card),
      CardID: getCardId(deckId, card),
      CustomDeck: customDeck,
    };
  };

  const cards: CardCustomData[] = properties.cards.map((c) => createCard(c)).reverse();
  const cardIds = cards.map((c) => c.CardID);

  return {
    ...createBaseObject(properties, ObjectName.DeckCustom),
    DeckIDs: cardIds,
    CustomDeck: customDeck,
    ContainedObjects: cards,
  };
};

const getCardId = (deckId: number, card: CardProperties): number => {
  const index = `${card.index}`.padStart(2, "0");
  return Number(`${deckId}${index}`);
};
