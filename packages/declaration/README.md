# Tabletop Simulator Types

TypeScript definitions for the Tabletop Simulator API that can be used to transpile Typescript file to Lua with the [Typescript to Lua transpiler](https://www.npmjs.com/package/typescript-to-lua).

## Usage

Install the package

```sh
npm install --save-dev @typed-tabletop-simulator/declaration
```

Be sure to also install [TSTL](https://www.npmjs.com/package/typescript-to-lua).

Configure your `tsconfig.json` to include those settings:

```json
{
  "compilerOptions": {
    // required, because by default TS also includes esdom which already defines self
    // self is used in TTS to reference the object
    "lib": ["esnext"],
    // Include the types from this package as well as the Lua language extension from TSTL
    "types": ["@typed-tabletop-simulator/declaration", "@typescript-to-lua/language-extensions"]
  }
}
```
