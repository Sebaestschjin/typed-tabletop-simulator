export const snapPosition = (object: TTSObject, index: number, height?: number): Vector => {
  const snapPoints = object.getSnapPoints();
  const snapPoint = snapPoints[index - 1];
  if (!snapPoint) {
    throw `The given object ${object.getGUID()} has no snap point ${index}`;
  }

  const position = object.positionToWorld(snapPoint.position);
  if (height) {
    position.setAt("y", height);
  }

  return position;
};

export const atSnapPoint = (object: TTSObject, index: number): TTSObject[] => {
  const position = snapPosition(object, index);

  const hits = Physics.cast({
    type: CastType.Box,
    origin: position.add(Vector(0, 0.5, 0)),
    size: [1, 1, 1],
    direction: [0, -1, 0],
  });

  return hits.map((h) => h.hit_object).filter((o) => o !== object && o.interactable);
};
