import { type } from "arktype";

import { ColorData, MaterialTypeValue, ObjectDataBase } from "./base.js";
import { BagObjectData } from "./bag.js";

export const ModelType = {
  Generic: 0,
  Figurine: 1,
  Dice: 2,
  Coin: 3,
  Board: 4,
  Chip: 5,
  Bag: 6,
  Infinite: 7,
} as const;

export const ModelTypeValue = type.enumerated(
  ModelType.Generic,
  ModelType.Figurine,
  ModelType.Dice,
  ModelType.Coin,
  ModelType.Board,
  ModelType.Chip,
  ModelType.Bag,
  ModelType.Infinite
);

export type ModelType = typeof ModelTypeValue.infer;

export type BagModelType = typeof ModelType.Bag | typeof ModelType.Infinite;

export const ModelObjectData = type({
  CustomMesh: {
    /** The path/URL for the .obj mesh used on the custom model. */
    MeshURL: "string",
    /** The path/URL for the diffuse image. */
    "DiffuseURL?": "string",
    /** The path/URL for the normals image. */
    "NormalURL?": "string",
    /** The path/URL for the collider mesh. */
    "ColliderURL?": "string",
    /** Whether the object model is convex. */
    "Convex?": "boolean",

    "MaterialIndex?": MaterialTypeValue,
    "TypeIndex?": ModelTypeValue,

    /** Whether the Object casts shadows. */
    "CastShadows?": "boolean",

    "CustomShader?": {
      "SpecularColor?": ColorData,
      "SpecularIntensity?": "number",
      "SpecularSharpness?": "number",
      "FresnelStrength?": "number",
    },
  },
});

export const ModelData = ObjectDataBase.and({
  Name: "'Custom_Model'",
}).and(ModelObjectData);

export const ModelBagData = ObjectDataBase.and({
  Name: "'Custom_Model_Bag'",
})
  .and(ModelObjectData)
  .and(BagObjectData);

export const ModelInfiniteBagData = ObjectDataBase.and({
  Name: "'Custom_Model_Infinite_Bag'",
}).and(ModelObjectData);
