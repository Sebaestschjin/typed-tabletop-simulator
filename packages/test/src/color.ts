const colors = [
    Color.Black,
    Color.Blue,
    Color.Brown,
    Color.Green,
    Color.Grey,
    Color.Green,
    Color.Orange,
    Color.Pink,
    Color.Purple,
    Color.Red,
    Color.Teal,
    Color.White,
    Color.Yellow,
];

const someColor = Color.Foo!;

let x = Color(1, 1, 1);
const y = Color({ r: 1 });
const z = Color.fromString("Red");

x = x.setAt("b", 1);
x = x.set(0, 1, 1);
let [r, g, b, a] = x.get();
r = x.r;
g = x.g;
b = x.b;
a = x.a;

x = x.copy();

const s = x.toString(1);

const e = x.equals(y);

x.lerp(y, 1);

const [d] = x.dump("Pre");
