var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const round = (value: number, places: number) => {
  const factor = 10 ** places;

  return Math.round(value * factor) / factor;
};

/**
 * Creates a random string with the letters A-Z and 0-9 with the given `length`.
 */
export const createRandom = (length: number): string => {
  return Array(length)
    .join()
    .split(",")
    .map(() => alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
    .join("");
};
