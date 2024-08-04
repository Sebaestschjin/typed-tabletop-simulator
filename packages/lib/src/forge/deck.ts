import { BaseProperties, createBaseObject } from "./baseObject";

// The latest generated deck id. Will be incremented by 1 each time a new deck is created.
let currentDeckId = 1337;

// The list of alread created decks ids based on the URL to the front image.
const createdDeckIds = new Map<string, number>();

export interface CustomDeckProperties extends BaseProperties {
  /** The type of each card. */
  type?: CardType;
  /** URL to the front image of the deck sheet. */
  front: string;
  /** URL to the back image of the deck sheet. */
  back: string;
  /** If `true`, the back image is considered to be a sheet iteself instead of a single image. */
  uniqueBack?: boolean;
  /** Number of cards in each row of the sheet. */
  width: number;
  /** Number of cards in each column of the sheet. */
  height: number;
  /** The cards inside the deck. */
  cards: CardProperties[];
}

export interface CardProperties extends BaseProperties {
  /** Zero-based index of the card in the sheet. */
  index: number;
}

/**
 * Creates a new deck with the given properties.
 *
 * By default the `BackIsHidden` property is set to `true`.
 */
export const createDeck = (properties: CustomDeckProperties): DeckCustomData => {
  const deckId = getDeckId(properties);

  const customDeck = {
    [deckId]: {
      Type: properties.type ?? CardType.RectangleRounded,
      FaceURL: properties.front,
      BackURL: properties.back,
      NumWidth: properties.width,
      NumHeight: properties.height,
      BackIsHidden: true,
      UniqueBack: properties.uniqueBack ?? false,
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

/**
 * Combines the given decks into a single deck. The result deck has the properties (name, tags, etc.) of the first deck in the list.
 * Only the cards of the other decks will be added to the first deck.
 *
 * *NOTE*: This operation mutates the first deck!
 */
export const combineDecks = (decks: DeckCustomData[]): DeckCustomData => {
  const baseDeck = decks[0];

  for (let i = 1; i < decks.length; i++) {
    const deck = decks[i];
    baseDeck.ContainedObjects.push(...deck.ContainedObjects);
    baseDeck.DeckIDs.push(...deck.DeckIDs);
    baseDeck.CustomDeck = { ...baseDeck.CustomDeck, ...deck.CustomDeck };
  }

  return baseDeck;
};

declare const console: any;

const getDeckId = (deck: CustomDeckProperties): number => {
  const existing = createdDeckIds.get(deck.front);
  if (existing) {
    return existing;
  }

  createdDeckIds.set(deck.front, currentDeckId);
  currentDeckId++;
  return currentDeckId - 1;
};

const getCardId = (deckId: number, card: CardProperties): number => {
  const index = `${card.index}`.padStart(2, "0");
  return Number(`${deckId}${index}`);
};
