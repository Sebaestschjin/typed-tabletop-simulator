import { BaseProperties, createBaseObject } from "./baseObject";

export interface CustomModelProperties extends BaseProperties {
  type: ModelType;
  model: string;
  texture: string;
  collider?: string;
  material?: MaterialType;
  content?: ObjectData[];
}

export const createModel = (properties: CustomModelProperties) => {
  let typeName = ObjectName.Model;
  if (properties.type === ModelType.Bag) {
    typeName = ObjectName.ModelBag;
  } else if (properties.type === ModelType.Infinite) {
    typeName = ObjectName.ModelInfiniteBag;
  }

  return {
    ...createBaseObject(properties, typeName),
    CustomMesh: {
      TypeIndex: properties.type,
      MeshURL: properties.model,
      DiffuseURL: properties.texture,
      ColliderURL: properties.collider,
      MaterialIndex: properties.material,
    },
    ContainedObjects: properties.content,
  };
};
