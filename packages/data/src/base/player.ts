import { type } from "arktype";

/** The available player colors. Includes the "Grey" spectator color. */
export const PlayerColor = type.enumerated(
  "Black",
  "Blue",
  "Brown",
  "Green",
  "Grey",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "Teal",
  "White",
  "Yellow"
);
