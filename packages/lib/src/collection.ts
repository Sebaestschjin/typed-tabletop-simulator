export const range = (start: number, end?: number): number[] => {
  if (!end) {
    end = start;
    start = 0;
  }

  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
};

export const rangeInclusive = (start: number, end?: number): number[] => {
  if (!end) {
    end = start;
    start = 0;
  }

  return range(start, end + 1);
};

export const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const applyDefaults = <T extends Record<string, any>>(source: T, defaults: T): T => {
  const target: Record<string, any> = { ...source };

  for (const [k, v] of Object.entries(defaults)) {
    if (source[k]) {
      if (isObject(source[k]) && isObject(v)) {
        target[k] = applyDefaults(source[k], v);
      }
    } else {
      target[k] = v;
    }
  }

  return target as T;
};

const isObject = (a: any): boolean => typeof a === "object";
