export {};

import { ArrayOrSingle } from "./core";
import { ElementProps } from "./element/base";
import { Button, ButtonProps } from "./element/button";
import { Cell, CellProps } from "./element/cell";
import { Dropdown, DropdownProps } from "./element/dropdown";
import { GridLayout, GridLayoutProps } from "./element/gridLayout";
import { HorizontalLayout, HorizontalLayoutProps } from "./element/horizontalLayout";
import { HorizontalScrollView, HorizontalScrollViewProps } from "./element/horizontalScrollView";
import { Image, ImageProps } from "./element/image";
import { InputField, InputFieldProps } from "./element/inputField";
import { Mask, MaskProps } from "./element/mask";
import { Option, OptionProps } from "./element/option";
import { Panel, PanelProps } from "./element/panel";
import { ProgressBar, ProgressBarProps } from "./element/progressBar";
import { Row, RowProps } from "./element/row";
import { Slider, SliderProps } from "./element/slider";
import { TableLayout, TableLayoutProps } from "./element/tableLayout";
import { Text, TextProps } from "./element/text";
import { Toggle, ToggleProps } from "./element/toggle";
import { ToggleButton, ToggleButtonProps } from "./element/toggleButton";
import { ToggleGroup, ToggleGroupProps } from "./element/toggleGroup";
import { VerticalLayout, VerticalLayoutProps } from "./element/verticalLayout";
import { VerticalScrollView, VerticalScrollViewProps } from "./element/verticalScrollView";

declare global {
  namespace JSX {
    interface ElementChildrenAttribute {
      children: {};
    }

    interface IntrinsicElements {
      button: ElementProps<Button, ButtonProps>;
      cell: ElementProps<Cell, CellProps>;
      defaults: {};
      dropdown: ElementProps<Dropdown, DropdownProps, ArrayOrSingle<JSX.IntrinsicElements["option"]>>;
      gridLayout: ElementProps<GridLayout, GridLayoutProps>;
      horizontalLayout: ElementProps<HorizontalLayout, HorizontalLayoutProps>;
      horizontalScrollView: ElementProps<HorizontalScrollView, HorizontalScrollViewProps>;
      image: ElementProps<Image, ImageProps>;
      inputField: ElementProps<InputField, InputFieldProps>;
      mask: ElementProps<Mask, MaskProps, JSX.Element>;
      option: ElementProps<Option, OptionProps, string>;
      panel: ElementProps<Panel, PanelProps>;
      progressBar: ElementProps<ProgressBar, ProgressBarProps>;
      row: ElementProps<Row, RowProps, ArrayOrSingle<JSX.IntrinsicElements["cell"]>>;
      slider: ElementProps<Slider, SliderProps>;
      tableLayout: ElementProps<TableLayout, TableLayoutProps, ArrayOrSingle<JSX.IntrinsicElements["row"]>>;
      text: ElementProps<Text, TextProps, string>;
      toggle: ElementProps<Toggle, ToggleProps>;
      toggleButton: ElementProps<ToggleButton, ToggleButtonProps>;
      toggleGroup: ElementProps<ToggleGroup, ToggleGroupProps>;
      verticalLayout: ElementProps<VerticalLayout, VerticalLayoutProps>;
      verticalScrollView: ElementProps<VerticalScrollView, VerticalScrollViewProps>;
    }

    interface Element {
      render: (parent: TTSObject) => UIElement;
    }
  }
}
