import { ObjectData, SaveFileData } from "@typed-tabletop-simulator/data";

export interface SaveFileProps {
  name: string;
  objects: ObjectData[];
}

export const createSaveFile = (props: SaveFileProps): SaveFileData => {
  return {
    SaveName: props.name,
    GameMode: "Game",
    ObjectStates: props.objects,
  };
};
