import { MaterialType, ModelData, ModelDataName, ModelType, ObjectData } from "@typed-tabletop-simulator/data";

import { BaseProperties, createBaseObject } from "./baseObject";

export interface CustomModelProperties extends BaseProperties {
  type: ModelType;
  model: string;
  texture: string;
  collider?: string;
  material?: MaterialType;
  convex?: boolean;
  content?: ObjectData[];
}

export const createModel = (properties: CustomModelProperties): ModelData => {
  const base = createBaseObject(properties);
  const mesh = {
    CustomMesh: {
      TypeIndex: properties.type,
      MeshURL: properties.model,
      DiffuseURL: properties.texture,
      ColliderURL: properties.collider,
      MaterialIndex: properties.material,
      Convex: properties.convex ?? true,
    },
  };

  if (properties.type === ModelType.Bag) {
    return {
      Name: "Custom_Model_Bag",
      ...base,
      ...mesh,
      ContainedObjects: properties.content ?? [],
    };
  }

  if (properties.type === ModelType.Infinite) {
    return {
      Name: "Custom_Model_Infinite_Bag",
      ...base,
      ...mesh,
      ContainedObjects: properties.content ?? [],
    };
  }

  return {
    Name: "Custom_Model",
    ...base,
    ...mesh,
  };
};
