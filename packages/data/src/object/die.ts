import { type } from "arktype";

import { ObjectDataBase, VectorData } from "./base.js";

export const DieType = {
  D4: 0,
  D6: 1,
  D8: 2,
  D10: 3,
  D12: 4,
  D20: 5,
} as const;

const DieTypeValue = type.enumerated(DieType.D4, DieType.D6, DieType.D8, DieType.D10, DieType.D12, DieType.D20);

const RotationValueData = type({
  Value: "number | string",
  Rotation: VectorData,
});

export const DieData = ObjectDataBase.and({
  Name: "'Custom_Dice'",
  "RotationValues?": RotationValueData.array(),
  CustomImage: {
    ImageURL: "string",
    CustomDice: {
      Type: DieTypeValue,
    },
  },
});
