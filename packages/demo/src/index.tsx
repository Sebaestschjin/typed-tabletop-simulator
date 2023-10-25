import { render, ttsUi, ttsUiFragment } from "@typed-tabletop-simulator/ui";

const App = () => {
  return (
    <panel color="Yellow" width={400} height={400}>
      <text text="Hello World" />
      <text text="Foo" offset={[0, 20]} />
      <>{/* <text text="Bar" offset={[0, 20]} /> */}</>
    </panel>
  );
};

interface ParentProps {
  children: JSX.Element[];
}

const Parent = (props: ParentProps) => {
  return (
    <panel color="Yellow" width={400} height={400}>
      {props.children}
    </panel>
  );
};

const Content = (props: ParentProps) => {
  return (
    <panel color="Red" width={300} height={300}>
      <text text="Hello World!" />
      <text text="More text" />
    </panel>
  );
};

onLoad = () => {
  const ui = render(Global, <App />);
  print(logString(ui));
};
