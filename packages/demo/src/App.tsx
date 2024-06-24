import { ttsUi } from "@typed-tabletop-simulator/ui";

import { HelloWorld } from "HelloWorld";

export const App = () => {
  return (
    <panel color="Yellow" width={200} height={200}>
      <HelloWorld />
    </panel>
  );
};
