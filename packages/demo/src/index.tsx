import { ttsUi, Panel, render, useRef } from "@typed-tabletop-simulator/ui";

const App = () => {
  return (
    <Parent>
      <text text="Hello World" />
      <text text="Foo" offsetXY="0 20" />
    </Parent>
  );
};

interface ParentProps {
  children: JSX.Element[];
}

const Parent = (props: ParentProps) => {
  return (
    <panel color="Yellow" width={400} height={400}>
      <Content>{props.children}</Content>
    </panel>
  );
};

const Content = (props: ParentProps) => {
  return (
    <panel id="panel" color="Red" width={300} height={300}>
      <text text="Hello World!" />
      <text text="More text" offsetXY="0 -20" />
    </panel>
  );
};

onLoad = () => {
  const ui = render(Global, <App />);
  print(logString(ui));
};
