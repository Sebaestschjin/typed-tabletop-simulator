# Tabletop Simulator Types

TypeScript definitions for the Tabletop Simulator API that can be used to transpile Typescript file to Lua with the [Typescript to Lua transpiler](https://www.npmjs.com/package/typescript-to-lua).

## Usage

Install the package

```sh
npm install --save-dev @typed-tabletop-simulator/ui
```

Be sure to also install [TSTL](https://www.npmjs.com/package/typescript-to-lua).

Configure your `tsconfig.json` to include those settings:

```json
{
    "compilerOptions": {
        "jsx": "react",
        "jsxFactory": "XmlUi.createElement",
        "jsxFragmentFactory": "XmlUi.Fragment",
        // Include the types from this package as well as the Lua language extension from TSTL
        "types": ["@typed-tabletop-simulator/declaration", "@typed-tabletop-simulator/ui", "typescript-to-lua/language-extensions"]
    }
    }
}
```
