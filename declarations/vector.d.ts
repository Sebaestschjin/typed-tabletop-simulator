type VectorNumeric = [float, float, float];
type VectorTable = {
    x: float;
    y: float;
    z: float;
};
type VectorShape = VectorNumeric | VectorTable;

type Vector = VectorShape;
