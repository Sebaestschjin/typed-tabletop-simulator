interface Options<T> {
  position?: VectorShape;
  rotation?: VectorShape;
  scale?: VectorShape;
}

export const createObject = <T extends ObjectData>(data: T, options?: Options<T>): Promise<TTSObject<T>> =>
  new Promise((resolve) => {
    spawnObjectData({
      data: data,
      position: options?.position,
      rotation: options?.rotation,
      scale: options?.scale,
      callback_function: (obj) => {
        resolve(obj as TTSObject<T>);
      },
    });
  });
