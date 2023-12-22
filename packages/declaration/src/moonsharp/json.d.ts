/** @noSelfInFile */
declare interface MoonsharpJson {
  serialize: (this: void, content: any) => string;
  parse: <T>(this: void, content: string) => T;
  isNull: (value: any) => boolean;
  null: () => any;
}

declare const json: MoonsharpJson;
