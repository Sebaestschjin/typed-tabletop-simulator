export {};

import Button from "./element/button";
import { Cell } from "./element/cell";
import { Dropdown } from "./element/dropdown";
import { GridLayout } from "./element/gridLayout";
import { HorizontalLayout } from "./element/horizontalLayout";
import { HorizontalScrollView } from "./element/horizontalScrollView";
import Image from "./element/image";
import { InputField } from "./element/inputField";
import { Option } from "./element/option";
import Panel from "./element/panel";
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

export type Ref<T> = {
  current?: T;
};

type TTS<T, A, C = ArrayOrSingle<JSX.Element>> = A & {
  ref?: Ref<T>;
} & {
  children?: C;
};

type ArrayOrSingle<T> = T | T[];

declare global {
  namespace JSX {
    interface ElementChildrenAttribute {
      children: {};
    }

    interface IntrinsicElements {
      button: TTS<Button, ButtonElementAttributes>;
      cell: TTS<Cell, CellElementAttributes>;
      defaults: {};
      dropdown: TTS<Dropdown, DropdownElementAttributes, ArrayOrSingle<JSX.IntrinsicElements["option"]>>;
      gridLayout: TTS<GridLayout, GridLayoutElementAttributes>;
      horizontalLayout: TTS<HorizontalLayout, HorizontalLayoutElementAttributes>;
      horizontalScrollView: TTS<HorizontalScrollView, HorizontalScrollViewElementAttributes>;
      image: TTS<Image, ImageElementAttributes>;
      inputField: TTS<InputField, InputFieldElementAttributes>;
      option: TTS<Option, OptionElementAttributes, string>;
      panel: TTS<Panel, PanelElementAttributes>;
      progressBar: TTS<ProgressBar, ProgressBarElementAttributes>;
      row: TTS<Row, RowElementAttributes, ArrayOrSingle<JSX.IntrinsicElements["cell"]>>;
      slider: TTS<Slider, SliderElementAttributes>;
      tableLayout: TTS<TableLayout, TableLayoutElementAttributes, ArrayOrSingle<JSX.IntrinsicElements["row"]>>;
      text: TTS<Text, TextElementAttributes, string>;
      toggle: TTS<Toggle, ToggleElementAttributes>;
      toggleButton: TTS<ToggleButton, ToggleButtonElementAttributes>;
      toggleGroup: TTS<ToggleGroup, ToggleGroupElementAttributes>;
      verticalLayout: TTS<VerticalLayout, VerticalLayoutElementAttributes>;
      verticalScrollView: TTS<VerticalScrollView, VerticalScrollViewElementAttributes>;
    }

    interface Element {
      render: (parent: TTSObject) => UIElement;
    }
  }
}
