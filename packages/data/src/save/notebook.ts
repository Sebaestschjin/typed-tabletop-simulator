import { type } from "arktype";

import { PlayerColor } from "../base/player.js";
import { ColorData } from "../base/color.js";

export const NotebookData = type({
  title: "string",
  body: "string",
  id: "number",
  color: PlayerColor,
  visibleColor: ColorData,
});
