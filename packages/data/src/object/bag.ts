import { type } from "arktype";

import { ObjectDataBase } from "./base.js";

export const BagOrderType = {
  LIFO: 0,
  FIFO: 1,
  Random: 2,
} as const;

const BagOrder = type.enumerated(BagOrderType.LIFO, BagOrderType.FIFO, BagOrderType.Random);

export const BagObjectData = type({
  "Bag?": {
    Order: BagOrder,
  },
});

export const BagData = ObjectDataBase.and({
  Name: "'Bag'",
}).and(BagObjectData);

export const InfiniteBagData = ObjectDataBase.and({
  Name: "'Infinite_Bag'",
});
