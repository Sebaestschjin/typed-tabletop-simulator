/**
 * Contains information about 3D vectors.
 *
 * @module Vector
 */

/** A table with 3 numeric components that acts as a [[Vector]]. */
type VectorNumeric = [float, float, float];

type VectorAxis = "x" | "y" | "z";

type VectorComponent = VectorAxis | 1 | 2 | 3;

/** A table with 3 named components that acts as a [[Vector]]. */
type VectorTable = {
  x: float;
  y: float;
  z: float;
};

/** A vector parameter that can be a table with numeric or named components, or an actual [[Vector]]. */
type VectorShape = VectorNumeric | VectorTable | Vector;

/**
 * Representation of 3D vectors and points.
 *
 * This structure is used to pass 3D positions and directions around. It also contains functions for doing common vector operations.
 *
 * Besides the functions listed below, other classes can be used to manipulate vectors and points as well.
 */
declare interface Vector {
  /**
   * Sets a component to value and returns self.
   *
   * @param key Index of component (`1`, `2` or `3` for `x`, `y` or `z`).
   * @param value New value.
   *
   * @example
   * ```lua
   * local vec = Vector(1, 2, 3)
   * vec:setAt(1, 4):setAt('y', 3)
   * print(vec) --> Vector: { 4, 3, 3 }
   * ```
   *
   * ```ts
   * const vec = Vector(1, 2, 3);
   * vec.setAt(1, 4).setAt('y', 3);
   * print(vec); // Vector: { 4, 3, 3 }
   * ```
   */
  setAt(key: VectorComponent, value: float): this;

  /**
   * Sets x, y, z components to given values and returns self.
   *
   * Providing a `nil` value makes it ignore that argument.
   *
   * @param x New value of X component.
   * @param y New value of Y component.
   * @param z New value of Z component.
   */
  set(x?: float, y?: float, z?: float): this;

  /**
   * Returns `x`, `y`, `z` components as three separate values.
   */
  get(): LuaMultiReturn<[float, float, float]>;

  /**
   * Returns a separate [[Vector]] with identical component values
   */
  copy(): Vector;

  /**
   * Adds components of `other` to `self` and returning `self`.
   *
   * @param other The vector to add.
   */
  add(other: Vector): this;

  /**
   * Subtracts components of `other` from `self` and returning `self`.
   *
   * @param other The vector to subtract
   */
  sub(other: Vector): this;

  /**
   * Multiplies self-components by corresponding components from `other` and returning self.
   *
   * Every component in the result is a component of the vector multiplied by the same component of `other`.
   *
   * @param other The vector to scale by.
   */
  scale(other: Vector): this;

  /**
   * Multiplies self-components by the given factor.
   *
   * Every component in the result is a component of the vector multiplied by the given factor.
   *
   * @param factor The factor to scale by.
   */
  scale(factor: float): this;

  /**
   * If self-magnitude is higher than provided limit, scale self-down to match it and returning self.
   *
   * @param limit The numeric max magnitude.
   */
  clamp(limit: float): this;

  /**
   * Makes this vector have a magnitude of 1 and returning self.
   *
   * When normalized, a vector keeps the same direction but its length is 1.0.
   *
   * Note that this function will change the current vector. If you want to keep the current vector unchanged, use [[normalized()]] method.
   */
  normalize(): this;

  /**
   * Make self into projection on another vector and return self.
   *
   * To understand vector projection, imagine that `other` is resting on a line pointing in its direction.
   * Somewhere along that line will be the nearest point to the tip of vector. The projection is just `other` rescaled so that it reaches that point on the line.
   *
   * @param other The normal vector.
   */
  project(other: Vector): this;

  /**
   * Projects a vector onto a plane defined by a normal orthogonal to the plane and return self.
   *
   * A Vector stores the position of the given vec in 3d space.
   * A second Vector is given by `other` and defines a direction from a plane towards vector that passes through the origin.
   * Vector.projectOnPlane uses the two Vector values to generate the position of vector in the otherVec direction, and return the location of the Vector on the plane.
   *
   * @param other The plane normal vector.
   */
  projectOnPlane(other: Vector): this;

  /**
   * Make self into reflection on another vector and return self.
   *
   * The `other` vector defines a plane (a plane's normal is the vector that is perpendicular to its surface).
   * The vec vector is treated as a directional arrow coming in to the plane.
   * The returned value is a vector of equal magnitude to vec but with its direction reflected.
   *
   * @param other The normal vector.
   */
  reflect(other: Vector): this;

  /**
   * Multiply self-components by -1.
   */
  inverse(): this;

  /**
   * Move self towards another vector, but only up to a provided distance limit and return self.
   *
   * @param other The position to move towards.
   * @param maxDistance The distance limit.
   */
  moveTowards(other: Vector, maxDistance: float): this;

  /**
   * Rotate self towards another vector, but only up to a provided angle limit and return self.
   *
   * This function is similar to [[moveTowards()]] except that the vector is treated as a direction rather than a position.
   * The current vector will be rotated round toward the target direction by an angle of `maxAngle`, although it will land exactly on the target rather than overshoot.
   * If the magnitudes of current and target are different, then the magnitude of the result will be linearly interpolated during the rotation.
   * If a negative value is used for `maxAngle`, the vector will rotate away from target until it is pointing in exactly the opposite direction, then stops.
   *
   * @param other The position to rotate towards.
   * @param maxAngle The maximum angle in degree allowed for this rotation.
   */
  rotateTowards(other: Vector, maxAngle: float): this;

  /**
   * Same as [[rotateTowards()]], but only works correctly if target Vector is normalized and return self.
   *
   * Less expensive than [[rotateTowards()]].
   *
   * @param other The position to rotate towards.
   * @param maxAngle The maximum angle in degree allowed for this rotation.
   */
  rotateTowardsUnit(other: Vector, maxAngle: float): this;

  /**
   * Rotate a Vector `angle` degrees over given `axis` (can be `"x"`, `"y"`, `"z"`) and return self.
   *
   * @param axis The axis to rotate around.
   * @param angle The angle in degree for this rotation.
   */
  rotateOver(axis: VectorAxis, angle: float): this;

  /**
   * Same as [[VectorStatic.dot]] with this vector as the first parameter.
   */
  dot(other: Vector): float;

  /**
   * Same as [[VectorStatic.magnitude]] with this vector as the first parameter.
   */
  magnitude(): float;

  /**
   * Same as [[VectorStatic.sqrMagnitude]] with this vector as the first parameter.
   */
  sqrMagnitude(): float;

  /**
   * Same as [[VectorStatic.distance]] with this vector as the first parameter.
   */
  distance(other: Vector): float;

  /**
   * Same as [[VectorStatic.sqrtDistance]] with this vector as the first parameter.
   */
  sqrDistance(other: Vector): float;

  /**
   * Same as [[VectorStatic.equals]] with this vector as the first parameter.
   */
  equals(other: Vector, margin?: float): boolean;

  /**
   * Same as [[VectorStatic.string]] with this vector as the first parameter.
   */
  string(prefix?: string): string;

  /**
   * Same as [[VectorStatic.angle]] with this vector as the first parameter.
   */
  angle(other: Vector): float;

  /**
   * Same as [[VectorStatic.cross]] with this vector as the first parameter.
   */
  cross(other: Vector): Vector;

  /**
   * Same as [[VectorStatic.lerp]] with this vector as the first parameter.
   */
  lerp(other: Vector, t: float): Vector;

  /**
   * Same as [[VectorStatic.normalized]] with this vector as the first parameter.
   */
  normalized(): Vector;

  /**
   * Same as [[VectorStatic.orthoNormalize]] with this vector as the first parameter.
   */
  orthoNormalize(binormalPlaner?: Vector): LuaMultiReturn<[Vector, Vector, Vector]>;

  /**
   * Same as [[VectorStatic.heading]] with this vector as the first parameter.
   */
  heading(): LuaMultiReturn<[float, float, float]>;

  /**
   * Same as [[VectorStatic.heading]] with this vector as the first parameter.
   */
  heading(axis: VectorAxis): float;

  /** The x-coordinate. */
  x: number;
  /** The y-coordinate. */
  y: number;
  /** The z-coordinate. */
  z: number;
}

/**
 * Static methods for the [[Vector]] class.
 *
 * @noSelf
 */
declare interface VectorStatic {
  /**
   * Same as `Vector(x, y, z)`.
   *
   * @information
   * The actual `new` function in Lua also supports using one of the other constructors, but this isn't really
   * expressable in TypeScript.
   */
  new: (x: float, y: float, z: float) => Vector;

  /** Return a vector with specified (x, y, z) components. */
  (this: void, x: float, y: float, z: float): Vector;

  /** Return a vector with x/y/z or 1/2/3 components from source table (x/y/z first). */
  (this: void, values: VectorShape): Vector;

  /**
   * Returns a vector that is made from the smallest components of two vectors.
   */
  min(a: Vector, b: Vector): Vector;

  /**
   * Returns a vector that is made from the largest components of two vectors.
   */
  max(a: Vector, b: Vector): Vector;

  /**
   * Return a vector pointing from `a` to `b`.
   * @param a
   * @param b
   */
  between(a: Vector, b: Vector): Vector;

  /**
   * Returns a new Vector that is a sum of two vectors.
   */
  add: LuaAddition<Vector, Vector, Vector>;

  /**
   * Returns a new Vector that is a difference of two vectors.
   */
  subtract: LuaSubtraction<Vector, Vector, Vector>;

  /**
   * Returns a new Vector that is one with each component multiplied by the given factor.
   */
  multiply: LuaMultiplication<Vector, float, Vector>;

  /**
   * Return the dot product of two vectors.
   *
   * The dot product is a float value equal to the magnitudes of the two vectors multiplied together and then multiplied by the cosine of the angle between them.
   * For normalized vectors Dot returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions and zero if the vectors are perpendicular.
   *
   * @param a The first vector.
   * @param b The second vector.
   */
  dot(a: Vector, b: Vector): float;

  /**
   * Returns the length of a vector.
   *
   * @param vector The vector.
   */
  magnitude(vector: Vector): float;

  /**
   * Returns the squared length of a vector.
   *
   * @param vector The vector.
   */
  sqrMagnitude(vector: Vector): float;

  /**
   * Returns distance between two points.
   *
   * @param a The first vector.
   * @param b The second vector.
   */
  distance(a: Vector, b: Vector): float;

  /**
   * Returns squared distance between two points.
   *
   * @param a The first vector.
   * @param b The second vector.
   */
  sqrDistance(a: Vector, b: Vector): float;

  /**
   * Returns true if two vectors are approximately equal.
   *
   * The margin argument is optional and defaults to tolerating a difference of `~0.03` in both vector magnitude.
   *
   * @param a The first vector.
   * @param b The second vector.
   * @param margin Numeric tolerance. Defaults to `0.03`
   */
  equals(a: Vector, b: Vector, margin?: float): boolean;

  /**
   * Return string describing self, optional string prefix.
   *
   * @information
   * The actual return type of this function is a multi-return of `string, float`, which is due to it's implementation.
   * The type here is changed to `string`, because it makes it easier to use in Typescript than the multi-return type.
   *
   * @param vector The vector.
   * @param prefix The prefix of return string.
   */
  string(vector: Vector, prefix?: string): string;

  /**
   * Returns the angle in degrees between two vectors.
   *
   * The angle returned is the unsigned angle between the two vectors.
   * This means the smaller of the two possible angles between the two vectors is used.
   * The result is never greater than 180 degrees.
   *
   * @param a The first vector.
   * @param b The second vector.
   */
  angle(a: Vector, b: Vector): float;

  /**
   * Return a cross-product vector of two vectors.
   *
   * The cross product of two vectors results in a third vector which is perpendicular to the two input vectors.
   * The result's magnitude is equal to the magnitudes of the two inputs multiplied together and then multiplied by the sine of the angle between the inputs.
   * You can determine the direction of the result vector using the "left hand rule".
   *
   * @param a The first vector.
   * @param b The second vector.
   */
  cross(a: Vector, b: Vector): Vector;

  /**
   * Linearly interpolates between two points.
   *
   * Interpolates between the points `a` and `b` by the interpolant `t`.
   * The parameter `t` is clamped to the range `[0, 1]`.
   * This is most commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).
   *
   * @param a The first vector.
   * @param b The second vector.
   * @param t Fraction
   *
   * @returns The value returned equals `(b - a) * t`.
   *          When `t = 0` returns `a`.
   *          When `t = 1` returns `b`.
   *          When `t = 0.5` returns the point midway between `a` and `b`.
   */
  lerp(a: Vector, b: Vector, t: float): Vector;

  /**
   * Return a new vector that is normalized (length 1) version of self.
   *
   * @param vector The vector.
   */
  normalized(vector: Vector): Vector;

  /**
   * Return three normalized vectors perpendicular to each other, first one being in the same direction as self.
   *
   * If binormalPlaner is provided, the second vector is guaranteed to be on a self-binormalPlanar plane.
   *
   * @param vector The vector.
   * @param binormalPlaner The vector for binormal planar.
   */
  orthoNormalize(vector: Vector, binormalPlaner?: Vector): LuaMultiReturn<[Vector, Vector, Vector]>;

  /**
   * Returns an angle (In degrees) of rotation of Vector over all axis.
   *
   * @param vector The vector.
   */
  heading(vector: Vector): LuaMultiReturn<[float, float, float]>;

  /**
   * Returns an angle (In degrees) of rotation of Vector over a given axis (can be 'x', 'y', 'z').
   *
   * @param vector The vector.
   * @param axis The axis.
   */
  heading(vector: Vector, axis: VectorAxis): float;
}

declare const Vector: VectorStatic;
