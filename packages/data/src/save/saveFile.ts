import { type } from "arktype";

import { VectorData } from "../object/base.js";
import { ColorData } from "../base/color.js";
import { ObjectData } from "../object/index.js";

const GridType = type.enumerated("0", "1", "2");

const GridData = type({
  Type: GridType,
  BothSnapping: "boolean",
  Color: ColorData,
  Lines: "boolean",
  Offset: "boolean",
  Opacity: "number",
  PosOffset: VectorData,
  Snapping: "boolean",
  ThickLines: "boolean",
  xSize: "number",
  ySize: "number",
});

const HandsData = type({
  DisableUnused: "boolean",
  Enable: "boolean",
});

export const SaveFileData = type({
  SaveName: "string",
  GameMode: "string",
  "GameType?": "string",
  "Tags?": "string[]",
  // "DecalPallet?": DecalData.array(),
  // "CustomUIAssets?": UIAssetData.array(),
  // "SnapPoints?": SnapPointData.array(),
  "Gravity?": "number",
  // "Grid?": GridData,
  // "Hands?": HandsData,
  "Note?": "string",
  // "TabStates?": type.Record("string", NotebookData),
  "LuaScript?": "string",
  "LuaScriptState?": "string",
  "XmlUI?": "string",
  ObjectStates: ObjectData.array(),
});

// TODO split
export type SaveFileData = typeof SaveFileData.infer;
