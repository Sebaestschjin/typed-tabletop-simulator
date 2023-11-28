type Options = Omit<TakeObjectByIndex, "callback_function"> | Omit<TakeObjectByGuid, "callback_function">;

export const takeObject = (container: TTSBag | TTSBag, options: Options): Promise<TTSObject> =>
  new Promise((resolve) => {
    container.takeObject({
      ...options,
      callback_function: (obj) => {
        resolve(obj);
      },
    });
  });
