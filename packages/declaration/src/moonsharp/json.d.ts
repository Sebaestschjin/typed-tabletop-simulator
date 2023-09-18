/** @noSelfInFile */
declare interface MoonsharpJson {
  serialize: (this: void, content: any) => string;
  parse: <T>(this: void, content: string) => T;
}

declare const json: MoonsharpJson;
