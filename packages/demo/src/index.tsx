import { render, ttsUi, ttsUiFragment } from "@typed-tabletop-simulator/ui";

import { App } from "App";

onLoad = () => {
  print("Loading done!");
  const ui = render(Global, <App />);

  for (const obj of getObjects()) {
    print(obj.getName());
  }
};
