import { ScaleProp, Vector2Prop, VectorProp } from "./base";

export type Converter<T> = (this: void, value: T) => [UIAttributeName, UIAttributeValue];
export type Converters = Record<string, Converter<any>>;

const rename = (newName: UIAttributeName): Converter<any> => {
  return (value: UIAttributeValue) => [newName, value];
};

const handlerName = (name: string) => `__uiHandler__${name}`;

const handlerFunction = (param: UIAttributeName): Converter<any> => {
  const myName = self === Global ? "Global" : self.getGUID();
  return () => [param, `${myName}/${handlerName(param)}`];
};

const vector2 = (name: UIAttributeName): Converter<Vector2Prop> => {
  return (value) => [name, `${value[0]} ${value[1]}`];
};

const vector3 = (name: UIAttributeName): Converter<VectorProp> => {
  return (value) => {
    const vector = Vector(value);
    return [name, `${vector.x} ${vector.y} ${vector.z}`];
  };
};

const scale: Converter<ScaleProp> = (value) => {
  if (typeof value === "number") {
    return ["scale", `${value} ${value} ${value}`];
  }

  return vector3("scale")(value);
};

export const convert = {
  rename: rename,
  handlerName,
  handlerFunction: handlerFunction,
  vector2: vector2,
  vector3: vector3,
  scale: scale,
};
