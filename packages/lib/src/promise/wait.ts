export const waitFrames = (frames?: number): Promise<void> =>
  new Promise((resolve) => {
    Wait.frames(() => resolve(), frames);
  });

export const waitTime = async (time: number): Promise<void> =>
  new Promise((resolve) => {
    Wait.time(() => resolve(), time);
  });

type Condition = (this: void) => boolean;

export const waitCondition = async (condition: Condition, timeout?: number): Promise<void> =>
  new Promise((resolve, reject) => {
    Wait.condition(
      () => resolve(),
      condition,
      timeout,
      () => reject("Timeout reached")
    );
  });

export const waitUntilLoaded = async <T extends TTSObject>(object: T): Promise<T> => {
  await waitCondition(() => {
    return !object.loading_custom && !object.UI.loading;
  }).then(() => waitFrames(30));

  if (object.hasTag("Signal Loading")) {
    await waitCondition(() => object.call("isOnLoadFinished"));
  }

  return object;
};
