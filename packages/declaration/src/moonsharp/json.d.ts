/** @noSelfInFile */
declare interface MoonsharpJson {
  serialize: (this: void, content: any) => string;
  parse: <T>(this: void, content: string) => T;
  isNull: (this: void, value: any) => boolean;
  null: (this: void) => any;
}

declare const json: MoonsharpJson;
