/**
 * @module UIClassic
 */

interface Button {
  /** Zero-based index of the button. */
  index: int;

  /** A String of the function's name that will be run when button is clicked. */
  click_function: string;

  /**
   * The Object which contains the click_function function.
   *
   * @defaultValue Global
   */
  function_owner?: TTSObject;

  /**
   * Text that appears on the button.
   *
   * @defaultValue ""
   */
  label: string;

  /**
   * Where the button appears, relative to the Object's center.
   *
   * @defaultValue {0, 0, 0}
   */
  position: VectorShape;

  /**
   * How the button is rotated, relative to the Object's rotation.
   *
   * @defaultValue {0, 0, 0}.
   */
  rotation: VectorShape;

  /**
   * Scale of the button, relative to the Object's scale.
   *
   * @defaultValue {1, 1, 1}
   */
  scale: VectorShape;

  /**
   * How wide the button will be, relative to the Object.
   *
   * @defaultValue 100
   */
  width: float;

  /**
   * How tall the button will be, relative to the Object.
   *
   * @defaultValue 100
   */
  height: float;

  /**
   * Size the label font will be, relative to the Object.
   *
   * @defaultValue 100
   */
  font_size: float;

  /**
   * A Color for the clickable button.
   *
   * @defaultValue {r=1, g=1, b=1, a=1}.
   */
  color: ColorValue;

  /**
   * A Color for the label text.
   *
   * @defaultValue {r=0, g=0, b=0, a=1}.
   */
  font_color: ColorValue;

  /**
   * A Color for the background during mouse-over.
   *
   * @defaultValue {r=0, g=0, b=0, a=0}
   */
  hover_color: ColorValue;

  /**
   * A Color for the background when clicked.
   *
   * @defaultValue {r=0, g=0, b=0, a=0}
   */
  press_color: ColorValue;

  /**
   * Popup of text, similar to how an Object's name is displayed on mouseover.
   *
   * @defaultValue ""
   */
  tooltip?: string;
}

/** Defines the required/optional fields for creating a new button. */
declare type CreateButton = Omit<AllOptionalExpect<Button, "click_function">, "index">;

/** Defines the required/optional fields for editing an exisiting button. */
declare type EditButton = AllOptionalExpect<Button, "index">;

declare interface Input {
  index: int;

  /** The function's name that will be run when the input is selected. */
  input_function: string;

  /** The Object which contains the input_function function. */
  function_owner: TTSObject;

  /** Text that appears as greyed out text when there is no value in the input. */
  label: string;

  /** Where the input appears, relative to the Object's center. */
  position: VectorShape;

  /** How the input is rotated, relative to the Object's rotation. */
  rotation: VectorShape;

  /** Scale of the input, relative to the Object's scale. */
  scale: VectorShape;

  /** How wide the input will be, relative to the Object. */
  width: float;

  /** How tall the input will be, relative to the Object. */
  height: float;

  /** Size the label/value font will be, relative to the Object. */
  font_size: float;

  /** A Color for the input's background. */
  color: ColorValue;

  /** A Color for the value text. */
  font_color: ColorValue;

  /** A popup of text, similar to how an Object's name is displayed on mouseover. */
  tooltip: string;

  /** How text is aligned in the input box. */
  alignment: InputAlignment;

  /** A String of the text entered into the input. */
  value: string;

  /** An Int which determines what characters can be input into the value. */
  validation: InputValidation;

  /** An Int which determines how pressing tab is handled when inputting. */
  tab: InputTabBehaviour;
}

/** Defines the required/optional fields for creating a new input. */
declare type CreateInput = Omit<AllOptionalExpect<Input, "input_function">, "index">;

/** Defines the required/optional fields for editing an exisiting input. */
declare type EditInput = AllOptionalExpect<Input, "index">;

/**
 * Possible values for the alignment of an input field.
 */
declare const enum InputAlignment {
  Automatic = 1,
  Left = 2,
  Center = 3,
  Right = 4,
  Justified = 5,
}

/**
 * Possible values for the validation schema of an input field.
 */
declare const enum InputValidation {
  None = 1,
  Integer = 2,
  Float = 3,
  Alphanumeric = 4,
  Username = 5,
  Name = 6,
}

/**
 * Possible values for the tab behaviour of an input field.
 */
declare const enum InputTabBehaviour {
  None = 1,
  SelectNextInput = 2,
  Indent = 3,
}
