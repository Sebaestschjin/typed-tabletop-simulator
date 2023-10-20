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
