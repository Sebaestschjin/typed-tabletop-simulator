import { type } from "arktype";

export const ColorData = type({
  /** Red value between 0 and 1. */
  r: "number",
  /** Green value between 0 and 1. */
  g: "number",
  /** Blue value between 0 and 1. */
  b: "number",
  /** Alpha value between 0 and 1. */
  "a?": "number",
});
export type ColorData = typeof ColorData.infer;
