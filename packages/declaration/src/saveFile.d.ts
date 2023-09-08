declare interface TTSSave {
  SaveName: string;
  EpochTime: number;
  Date: string;
  VersionNumber: string;
  GameMode: string;
  GameType: string;
  GameComplexity: string;
  PlayingTime: [number, number];
  PlayerCounts: [number, number];
  Tags: string[];
  Gravity: number;
  PlayArea: number;
  Table: string; // TODO table name
  Sky: string;
  SkyURL: string;
  /** The on-screen note */
  Note: string;
  /** The content of the notebooks. */
  TabStates: {
    [index: string]: {
      title: string;
      body: string;
      color: string; // player color
      visibleColor: PlayerColorData;
      id: string;
    };
  };
  MusicPlayer: {
    RepeatSong: boolean;
    PlaylistEntry: number;
    CurrentAudioTitle: string;
    CurrentAudioURL: string;
    AudioLibrary: Array<{
      // URL to the song
      Item1: string;
      // Name of the song
      Item2: string;
    }>;
  };
  Grid: {
    Type: number; // TODO grid type
    Lines: boolean;
    Color: ColorData;
    Opacity: number;
    ThickLines: boolean;
    Snapping: boolean;
    Offset: boolean;
    BothSnapping: boolean;
    xSize: number;
    ySize: number;
    PosOffset: PositionData;
  };
  Lighting: {
    LightIntensity: number;
    LightColor: ColorData;
    AmbientIntensity: number;
    AmbientType: number; // TODO type
    AmbientSkyColor: ColorData;
    AmbientEquatorColor: ColorData;
    AmbientGroundColor: ColorData;
    ReflectionIntensity: number;
    LutIndex: number;
    LutContribution: number;
    LutURL: string;
  };
  Hands: {
    Enable: boolean;
    DisableUnused: boolean;
    Hiding: number; // TODO type
  };
  ComponentTags: {
    labels: Array<{
      displayed: string;
      normalized: string;
    }>;
  };
  Turns: {
    Enable: boolean;
    Type: number; // TODO type
    TurnOrder: PlayerColor[]; // TODO player color?
    Reverse: boolean;
    SkipEmpty: boolean;
    DisableInteractions: boolean;
    PassTurns: boolean;
    TurnColor: PlayerColor; // TODO player color
  };
  DecalPallet: Array<{
    Name: string;
    ImageURL: string;
    Size: number;
  }>;
  LuaScript: string;
  LuaScriptState: string;
  XmlUI: string;
  CustomUIAssets: Array<{
    Name: string;
    URL: string;
  }>;
  SnapPoints: Array<{
    Position: PositionData;
    Rotation: PositionData;
  }>;
  /** All objects on the table. */
  ObjectStates: ObjectData[];
}
