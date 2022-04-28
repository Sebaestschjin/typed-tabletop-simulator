export default {};

const vec1 = Vector({ x: 1, y: 2, z: 3 });
const vec2 = Vector([2, 1, 3]);
const vec3 = Vector(1, 2, 3);
const vec4 = Vector.new(1, 2, 3);
const vec5 = Vector.min(vec1, vec2);
const vec6 = Vector.max(vec1, vec2);
const vec7 = Vector.between(vec1, vec2);

vec1.setAt("x", 2).setAt(2, 1);

vec1.set(1, 2, 3);
vec1.set(undefined, 2);
vec1.set(5);

let [x, y, z] = vec1.get();
[x, y] = vec1.get();

const vec8 = vec1.copy();
let other: Vector;

other = Vector.add(vec1, vec2);
other = vec1.add(vec2);

other = Vector.subtract(vec1, vec2);

other = Vector.multiply(vec1, 3);

let b = vec1 == vec2;

Vector.lerp(vec1, vec2, 1);
vec1.lerp(vec2, 1);
