/** @noSelfInFile */

import { Tag } from "./element/base";
import { Button } from "./element/button";
import { Cell } from "./element/cell";
import { Defaults } from "./element/defaults";
import { Dropdown } from "./element/dropdown";
import { GridLayout } from "./element/gridLayout";
import { HorizontalLayout } from "./element/horizontalLayout";
import { HorizontalScrollView } from "./element/horizontalScrollView";
import { Image } from "./element/image";
import { InputField } from "./element/inputField";
import { Option } from "./element/option";
import { Panel } from "./element/panel";
import { ProgressBar } from "./element/progressBar";
import { Row } from "./element/row";
import { Slider } from "./element/slider";
import { TableLayout } from "./element/tableLayout";
import { Text } from "./element/text";
import { Toggle } from "./element/toggle";
import { ToggleButton } from "./element/toggleButton";
import { ToggleGroup } from "./element/toggleGroup";
import { VerticalLayout } from "./element/verticalLayout";
import { VerticalScrollView } from "./element/verticalScrollView";
import { Ref } from "./jsx";

type CreateElementFunction<P> = (this: void, props?: P, ...children: JSX.Element[]) => JSX.Element;

function createFragment(this: void, props?: object, ...children: any[]): any {
  return children;
}

export const useRef = <T>(): Ref<T> => {
  return {
    current: undefined,
  };
};

export const ttsUi = <T>(
  tag: Tag | CreateElementFunction<T>,
  props?: { [key: string]: any },
  ...children: JSX.Element[]
): JSX.Element => {
  props ??= {};
  children ??= [];

  if (typeof tag === "function") {
    const newProps = { ...props, children };
    return {
      render: (parent: any) => tag(newProps as any).render(parent),
    };
  }

  const element = createElement(tag, props, children);
  if ((props as any)?.ref) {
    (props as any).ref.current = element;
  }

  return element;
};

const createElement = (tag: Tag, props: JSX.IntrinsicElements[Tag], children: JSX.Element[]) => {
  switch (tag) {
    case "button":
      return new Button(props);
    case "cell":
      return new Cell(props);
    case "defaults":
      return new Defaults(props);
    case "dropdown":
      return new Dropdown(props);
    case "gridLayout":
      return new GridLayout(props);
    case "horizontalLayout":
      return new HorizontalLayout(props);
    case "horizontalScrollView":
      return new HorizontalScrollView(props);
    case "image":
      return new Image(props as ImageElementAttributes);
    case "inputField":
      return new InputField(props);
    case "option":
      return new Option(props);
    case "panel":
      return new Panel(props, makeChildren(children));
    case "progressBar":
      return new ProgressBar(props);
    case "row":
      return new Row(props);
    case "slider":
      return new Slider(props);
    case "tableLayout":
      return new TableLayout(props);
    case "text":
      return new Text(props);
    case "toggle":
      return new Toggle(props);
    case "toggleButton":
      return new ToggleButton(props);
    case "toggleGroup":
      return new ToggleGroup(props);
    case "verticalLayout":
      return new VerticalLayout(props);
    case "verticalScrollView":
      return new VerticalScrollView(props);
  }
};

const makeChildren = (children: JSX.Element[]): JSX.Element[] => {
  return children.reduce((acc, c) => {
    if (isElementArray(c)) {
      makeChildren(c).forEach((c) => acc.push(c));
    } else {
      acc.push(c);
    }

    return acc;
  }, [] as JSX.Element[]);
};

const isElementArray = (c: any): c is JSX.Element[] => {
  return (c as any[])[0] !== undefined;
};

export const render = (object: TTSObject, element: JSX.Element) => {
  const ui = element.render(object);
  object.UI.setXmlTable([ui]);
  return ui;
};

export const TtsUi = {
  Fragment: createFragment,
  createElement: ttsUi,
};
