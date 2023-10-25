/** @noSelfInFile */

import { Ref, Tag } from "./element/base";
import { Button } from "./element/button";
import { Cell } from "./element/cell";
import { Defaults } from "./element/defaults";
import { Dropdown } from "./element/dropdown";
import { GridLayout } from "./element/gridLayout";
import { HorizontalLayout } from "./element/horizontalLayout";
import { HorizontalScrollView } from "./element/horizontalScrollView";
import { Image, ImageProps } from "./element/image";
import { InputField } from "./element/inputField";
import { Mask } from "./element/mask";
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

type CreateElementFunction<P> = (this: void, props?: P, ...children: JSX.Element[]) => JSX.Element;

export const ttsUiFragment = (props?: object, ...children: any[]): any => {
  print(props);
  print(children);
  return children;
};

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
      return new Button(props as JSX.IntrinsicElements[typeof tag]);
    case "cell":
      return new Cell(props as JSX.IntrinsicElements[typeof tag]);
    case "defaults":
      return new Defaults(props as JSX.IntrinsicElements[typeof tag]);
    case "dropdown":
      return new Dropdown(props as JSX.IntrinsicElements[typeof tag]);
    case "gridLayout":
      return new GridLayout(props as JSX.IntrinsicElements[typeof tag]);
    case "horizontalLayout":
      return new HorizontalLayout(props as JSX.IntrinsicElements[typeof tag]);
    case "horizontalScrollView":
      return new HorizontalScrollView(props as JSX.IntrinsicElements[typeof tag]);
    case "image":
      return new Image(props as JSX.IntrinsicElements[typeof tag]);
    case "inputField":
      return new InputField(props as JSX.IntrinsicElements[typeof tag]);
    case "mask":
      return new Mask(props as JSX.IntrinsicElements[typeof tag], makeChildren(children));
    case "option":
      return new Option(props as JSX.IntrinsicElements[typeof tag]);
    case "panel":
      return new Panel(props as JSX.IntrinsicElements[typeof tag], makeChildren(children));
    case "progressBar":
      return new ProgressBar(props as JSX.IntrinsicElements[typeof tag]);
    case "row":
      return new Row(props as JSX.IntrinsicElements[typeof tag]);
    case "slider":
      return new Slider(props as JSX.IntrinsicElements[typeof tag]);
    case "tableLayout":
      return new TableLayout(props as JSX.IntrinsicElements[typeof tag]);
    case "text":
      return new Text(props as JSX.IntrinsicElements[typeof tag]);
    case "toggle":
      return new Toggle(props as JSX.IntrinsicElements[typeof tag]);
    case "toggleButton":
      return new ToggleButton(props as JSX.IntrinsicElements[typeof tag]);
    case "toggleGroup":
      return new ToggleGroup(props as JSX.IntrinsicElements[typeof tag]);
    case "verticalLayout":
      return new VerticalLayout(props as JSX.IntrinsicElements[typeof tag]);
    case "verticalScrollView":
      return new VerticalScrollView(props as JSX.IntrinsicElements[typeof tag]);
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
