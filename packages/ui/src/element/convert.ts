import { OffsetProp, ScaleProp, ShadowProp, Vector2Prop, VectorProp } from "./base";

export type KeyValuePair = [UIAttributeName, UIAttributeValue];
export type ConvertResult = KeyValuePair | KeyValuePair[];
export type Converter<T> = (this: void, value: T) => ConvertResult;
export type Converters = Record<string, Converter<any>>;

const concat = <T>(name: UIAttributeName): Converter<T[]> => {
  return (value) => [name, value.join("|")];
};

const handlerName = (name: string) => `__uiHandler__${name}`;

const handlerFunction = (param: UIAttributeName): Converter<any> => {
  const myName = self === Global ? "Global" : self.getGUID();
  return () => [param, `${myName}/${handlerName(param)}`];
};

const offset: Converter<OffsetProp> = (value) => {
  if (typeof value === "string") {
    return ["rectAlignment", value];
  }

  const alignment = value[2];
  const offset = vector2("offsetXY")([value[0], value[1]]) as KeyValuePair;
  if (alignment) {
    return [offset, ["rectAlignment", alignment]];
  }

  return offset;
};

const rename = (newName: UIAttributeName): Converter<any> => {
  return (value: UIAttributeValue) => [newName, value];
};

const scale: Converter<ScaleProp> = (value) => {
  if (typeof value === "number") {
    return ["scale", `${value} ${value} ${value}`];
  }

  return vector3("scale")(value);
};

const shadow: Converter<ShadowProp> = (value) => {
  if (typeof value === "number") {
    value = [value, -value];
  }

  return vector2("shadowDistance")(value);
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

const toggle = (
  name: UIAttributeName,
  trueValue: UIAttributeValue,
  falseValue: UIAttributeValue
): Converter<boolean> => {
  return (value) => [name, value ? trueValue : falseValue];
};

export const convert = {
  concat,
  handlerName,
  handlerFunction,
  offset,
  rename,
  scale,
  shadow,
  toggle,
  vector2,
  vector3,
};
