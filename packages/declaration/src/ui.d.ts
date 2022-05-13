/**
 * @module UI
 */

/** @noSelf */
interface UI {
    /** Indicates whether (the server) has finished loading all UI custom assets */
    loading: boolean;

    /**
     * Obtains the value of a specified attribute of a UI element.
     * What it returns will typically be a string or a number.
     *
     * @param id The Id that was assigned, as an attribute, to the desired XML UI element.
     * @param attribute The name of the attribute you wish to get the value of.
     */
    // TODO would be nice, if the actual return type would be automatically determined by the name of the attribute.
    getAttribute<T extends UIAttributeValue>(id: UIElementId, attribute: UIAttributeName): T;

    /**
     * Returns the attributes and their values of a UI element.
     * It only returns the attributes (and values) for elements that have had those attributes set by the user.
     */
    getAttributes(id: UIElementId): LuaTable<UIAttributeName, UIAttributeValue>;

    /**
     * Returns a table/array of custom assets.
     */
    getCustomAssets(): UIAsset[];

    /**
     * Obtains the value between elements tags, like: <Text>ValueToGet</Text>.
     *
     * @param id The Id that was assigned, as an attribute, to the desired XML UI element.
     */
    getValue(id: UIElementId): string;

    /**
     * Returns the contents of the current UI formatted as XML.
     */
    getXml(): string;

    /**
     * Returns the contents of the current UI formatted as a table.
     */
    getXmlTable(): UIElement[];

    /**
     * Hides the given UI element. Unlike the "active" attribute, hide triggers animations.
     *
     * @param id The Id that was assigned, as an attribute, to the desired XML UI element.
     */
    hide(id: UIElementId): boolean;

    /**
     * Sets the value of a specified attribute of a UI element.
     *
     * @param id The Id that was assigned, as an attribute, to the desired XML UI element.
     * @param attribute The name of the attribute you want to set the value of.
     * @param value The value to set for the attribute.
     */
    setAttribute(id: UIElementId, attribute: UIAttributeName, value: UIAttributeValue): boolean;

    /**
     * Updates the value of the supplied attributes of a UI element.
     *
     * @param id The Id that was assigned, as an attribute, to the desired XML UI element.
     * @param data A Table with key/value pairs representing attributes and their values
     */
    setAttributes(id: UIElementId, data: LuaTable<UIAttributeName, UIAttributeValue>): boolean;

    /**
     * Replaces all classes on a UI element.
     *
     * @param id The Id that was assigned, as an attribute, to the desired XML UI element.
     * @param names Space separated class names.
     */
    setClass(id: UIElementId, names: string): boolean;

    /**
     * Sets/replaces the custom assets which your UI may make use of.
     *
     * @param assets A table/array containing sub-tables which each represent a custom asset.
     */
    setCustomAssets(assets: UIAsset[]): boolean;

    /**
     * Updates the value between elements tags, like: <Text>ValueChanged</Text>.
     *
     * @param id The Id that was assigned, as an attribute, to the desired XML UI element.
     * @param value The value to put between the element tags.
     */
    setValue(id: UIElementId, value: string): boolean;

    /**
     * Sets/replaces the UI with the contents of the provided XML.
     *
     * @param xml A string containing XML representing the desired UI.
     * @param assets A table/array containing sub-tables which each represent a custom asset.
     */
    setXml(xml: string, assets?: UIAsset[]): boolean;

    /**
     * Sets/replaces the UI with the contents of the provided UI table.
     *
     * @param data A table containing sub-tables. One sub-table for each element being created.
     */
    setXmlTable(data: UIElement[]): boolean;

    /**
     * Displays the given UI element. Unlike the "active" attribute, show triggers animations.
     *
     * @param id The Id that was assigned, as an attribute, to the desired XML UI element.
     */
    show(id: UIElementId): boolean;
}

/** An alias to make it clearer that the parameter denotes to the ID of an XML element. */
type UIElementId = string;
/** An alias for the possible value types of an XML element's attribute. */
type UIAttributeValue = string | number | boolean;
/** An alias to make it clearer that the parameter denotes to name of a custom asset. */
type UIAssetName = string;

type UIHandler = (this: void, player: Player, value: string, id: UIElementId) => unknown;

/** A custom asset for the XML UI. */
interface UIAsset {
    /** The name of the asset, which is used as the XML attribute value. */
    name: UIAssetName;

    /** The URI to the asset. */
    url: URI;
}

interface AxisLayoutElementAttributes extends BaseElementAttributes {
    /**
     * @defaultValue "0 0 0 0"
     */
    padding?: UIAttributePadding;

    /**
     * Spacing between child elements.
     *
     * @defaultValue 0
     */
    spacing?: int;

    /**
     * @defaultValue "UpperLeft"
     */
    childAlignment?: Alignment;

    /**
     * @defaultValue true
     */
    childForceExpandWidth?: boolean;

    /**
     * @defaultValue true
     */
    childForceExpandHeight?: boolean;
}

interface BaseElementAttributes {
    /**
     * Specifies whether or not this element and its children are visible and contribute to layout. Modifying this via
     * script will not trigger animations.
     *
     * @defaultValue true
     */
    active?: boolean;

    /**
     * A list of classes, separated by spaces. An element will inherit attributes from any of its classes defined in
     * Defaults.
     */
    class?: string;

    /** A unique string used to identify the element from Lua scripting. */
    id?: UIElementId;

    color?: UIAttributeColor;

    /**
     * A pipe-separated list of visibility targets. An element is always treated as inactive to players not specified
     * here.
     */
    visibility?: string;

    /**
     * If the element blocks clicks.
     *
     * @defaultValue true
     */
    raycastTarget?: boolean;

    /**
     * Defines the shadow color of this element.
     *
     * @defaultValue none
     */
    shadow?: UIAttributeColor;

    /**
     * Defines the distance of the shadow for this element.
     *
     * @defaultValue "1 -1"
     */
    shadowDistance?: UIAttributeVector2;

    /**
     * Defines the outline color of this element.
     *
     * @defaultValue none
     */
    outline?: UIAttributeColor;

    /**
     * Defines the size of this elements outline.
     *
     * @defaultValue "1 -1"
     */
    outlineSize?: UIAttributeVector2;

    /**
     * If this element ignores its parent's layout group behavior and treats it as a regular Panel. (This means it would
     * obey regular position/size attributes.)
     *
     * @defaultValue false
     */
    ignoreLayout?: boolean;

    /**
     * Elements will not be sized thinner than this.
     */
    minWidth?: number;

    /**
     * Elements will not be sized shorter than this.
     */
    minHeight?: number;

    /**
     * If there is space after `minWidth`s are sized, then element widths are sized according to this.
     */
    preferredWidth?: number;

    /**
     * If there is space after `minHeight`s are sized, then element heights are sized according to this.
     */
    preferredHeight?: number;

    /**
     * If there is additional space after `preferredWidth`s are sized, defines how much the element expands to fill the
     * available horizontal space, relative to other elements.
     */
    flexibleWidth?: number;

    /**
     * If there is additional space after `preferredHeights`s are sized, defines how much the element expands to fill
     * the available vertical space, relative to other elements.
     */
    flexibleHeight?: number;

    /**
     * The element's anchor and pivot point, relative to its parent element.
     *
     * @defaultValue MiddleCenter
     */
    rectAlignment?: Alignment;

    /**
     * The width of this element in pixels or as a percentage of the width of its parent.
     *
     * @defaultValue "100%"
     */
    width?: number | UIAttributePercentage;

    /**
     * The height of this element in pixels or as a percentage of the height of its parent.
     *
     * @defaultValue "100%"
     */
    height?: number | UIAttributePercentage;

    /**
     * An offset to the position of this element, e.g. a value of -32 10 will cause this element to be 10 pixels up and
     * 32 pixels to the left of where it would otherwise be.
     *
     * @defaultValue "0 0"
     */
    offsetXY?: UIAttributeVector2;

    /**
     * The anchor point for the bottom-left corner of the element, where 0 0 is its parent's bottom-left corner and 1 1
     * is its parent's top-right corner.
     */
    anchorMin?: UIAttributeVector2;

    /**
     * The anchor point for the top-right corner of the element, where 0 0 is its parent's bottom-left corner and 1 1 is
     * its parent's top-right corner.
     */
    anchorMax?: UIAttributeVector2;

    /**
     * An offset to the size of the element, e.g. a value of 15 -20 will cause this element to be 15 pixels wider and 32
     * pixels shorter than what it would otherwise be.
     */
    sizeDelta?: UIAttributeVector2;

    /**
     * The pivot point this element is positioned, rotated, and scaled around. 0 0 is the element's bottom-left corner
     * and 1 1 is its top-right corner.
     *
     * @defaultValue "0.5 0.5"
     */
    pivot?: UIAttributeVector2;

    /**
     * An offset to the position of this element in 3D space. Z moves the element in and out.
     *
     * @defaultValue "0 0 0"
     */
    position?: UIAttributeVector3;

    /**
     * Rotates the element in 3D space. X and Y tilt it like a dish, Z turns it like a steering wheel.
     *
     * @defaultValue "0 0 0"
     */
    rotation?: UIAttributeVector3;

    /**
     * Scales the component around its pivot. Note that this does not add more pixel detail, text with small font and
     * other elements may appear pixelated or blurry. Z does not affect the thickness of the element (it is always
     * flat), but does affect the transforms of its children.
     *
     * @defaultValue "1 1 1"
     */
    scale?: UIAttributeVector3;

    /**
     * An offset in pixels from anchorMin to be used as the bottom-left corner of the element.
     */
    offsetMin?: UIAttributeVector2;

    /**
     * An offset in pixels from anchorMax to be used as the top-right corner of the element.
     */
    offsetMax?: UIAttributeVector2;

    /**
     * Allows the element to be dragged around. Does not work on child elements of layout groups.
     *
     * @defaultValue false
     */
    allowDragging?: boolean;

    /**
     * If set, prevents the element from being dragged outside the bounding box of its parent.
     *
     * @defaultValue true
     */
    restrictDraggingToParentBounds?: boolean;

    /**
     * If this is set to true, then the element will return to its original position when it is released.
     *
     * @defaultValue true
     */
    returnToOriginalPositionWhenReleased?: boolean;

    /**
     * Animation to play when show() is called for the element.
     *
     * @defaultValue None
     */
    showAnimation?: ShowAnimation;

    /**
     * Animation to play when hide() is called for the element.
     *
     * @defaultValue None
     */
    hideAnimation?: HideAnimation;

    /**
     * Time in seconds to wait before playing this element's show animation. Useful for staggering the animations of
     * multiple elements.
     *
     * @defaultValue 0
     */
    showAnimationDelay?: float;

    /**
     * Time in seconds to wait before playing this element's hide animation. Useful for staggering the animations of
     * multiple elements.
     *
     * @defaultValue 0
     */
    hideAnimationDelay?: float;

    /**
     * Time in seconds that show/hide animations take to play.
     *
     * @defaultValue 0.25
     */
    animationDuration?: float;

    /**
     * Text to display when the element is hovered over.
     */
    tooltip?: string;

    /**
     * Color of the tooltip's border.
     *
     * @defaultValue #FFFFFF
     */
    tooltipBorderColor?: UIAttributeColor;

    /**
     * Color of the tooltip's background.
     *
     * @defaultValue rgba(0,0,0,0.62)
     */
    tooltipBackgroundColor?: UIAttributeColor;

    /** Image used for the tooltip's border. */
    tooltipBorderImage?: UIAssetName;

    /** Image used for the tooltip's background. */
    tooltipBackgroundImage?: UIAssetName;

    /**
     * Color of the text within this tooltip.
     *
     * @defaultValue #FFFFFF
     */
    tooltipTextColor?: UIAttributeColor;

    /**
     * Position of this tooltip in relation to the element.
     *
     * @defaultValue Right
     */
    tooltipPosition?: "Above" | "Below" | "Left" | "Right";

    /**
     * Distance in pixels that this tooltip will appear from the element.
     *
     * @defaultValue 8
     */
    tooltipOffset?: float;

    /**
     * Called when the mouse is pressed while over the element and then released while still over it.
     */
    onClick?: UIAttributeHandler;

    /**
     * Called when the pointer enters the boundary of the element.
     */
    onMouseEnter?: UIAttributeHandler;

    /**
     * Called when the pointer leaves the boundary of the element.
     */
    onMouseExit?: UIAttributeHandler;

    /**
     * Called every frame if the element is being dragged and has moved that frame.
     */
    onDrag?: UIAttributeHandler;

    /**
     * Called once when the element starts being dragged.
     */
    onBeginDrag?: UIAttributeHandler;

    /**
     * Called once when the element stops being dragged and the mouse button is released.
     */
    onEndDrag?: UIAttributeHandler;

    /**
     * Called when the mouse is pressed while over the element.
     */
    onMouseDown?: UIAttributeHandler;

    /**
     * Called when the mouse is released, if it had previously been pressed while over the element (no matter where the
     * cursor currently is).
     */
    onMouseUp?: UIAttributeHandler;

    /**
     * Called when the Enter key is pressed on an Input Element.
     */
    onSubmit?: UIAttributeHandler;
}

interface ButtonElementAttributes extends BaseElementAttributes {
    /**
     * @defaultValue true
     */
    interactable?: boolean;

    /**
     * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
     */
    colors?: UIAttributeColorBlock;

    /** The text to display on the button. */
    text?: string;

    fontSize?: int;

    textShadow?: UIAttributeColor;

    textOutline?: UIAttributeColor;

    /**
     * @defaultValue "UpperLeft"
     */
    textAlignment?: Alignment;

    icon?: UIAssetName;

    iconWidth?: int;

    iconColor?: UIAttributeColor;

    /**
     * @defaultValue "Left"
     */
    iconAlignment?: "Left" | "Right";

    /**
     * @defaultValue "0 0 0 0"
     */
    padding?: UIAttributePadding;

    /**
     * @defaultValue "ColorTint"
     */
    transition?: "None" | "ColorTint" | "SpriteSwap" | "Animation";

    highlightedSprite?: UIAssetName;

    pressedSprite?: UIAssetName;

    disabledSprite?: UIAssetName;
}

interface ButtonElement {
    tag: "Button";
    attributes?: ButtonElementAttributes;
    children?: UIElement[];
}

interface CellElementAttributes extends BaseElementAttributes {
    /**
     * @defaultValue 1
     */
    columnSpan?: int;

    /**
     * If set to true, then this cell will ignore the tables' cellBackgroundImage and values, allowing you to override
     * those values for this cell.
     *
     * @defaultValue false
     */
    dontUseTableCellBackground?: boolean;

    /**
     * If set to true, then this cell will ignore the tables' cellPadding value, allowing you to set unique cell padding
     * for this cell.
     *
     * @defaultValue false
     */
    overrideGlobalCellPadding?: boolean;

    /**
     * Padding values to use for this cell if overrideGlobalCellPadding is set to true.
     *
     * @defaultValue "0 0 0 0"
     */
    padding?: UIAttributePadding;

    /**
     * @defaultValue true
     */
    childForceExpandWidth?: boolean;

    /**
     * @defaultValue true
     */
    childForceExpandHeight?: boolean;
}

interface CellElement {
    tag: "Cell";
    attributes?: CellElementAttributes;
    children?: UIElement[];
}

interface DropdownElementAttributes extends BaseElementAttributes {
    /** When an option is selected, a Lua function with this name will be triggered. */
    onValueChanged?: UIAttributeHandler;

    /**
     * @defaultValue true
     */
    interactable?: boolean;

    /**
     * @defaultValue "#000000"
     */
    textColor?: UIAttributeColor;

    itemBackgroundColors?: UIAttributeColorBlock;

    /**
     * @defaultValue "#000000"
     */
    itemTextColor?: UIAttributeColor;

    /**
     * @defaultValue "#000000"
     */
    checkColor?: UIAttributeColor;

    checkImage?: UIAssetName;

    /**
     * @defaultValue "#000000"
     */
    arrowColor?: UIAttributeColor;

    arrowImage?: UIAssetName;

    /**
     * @defaultValue "#000000"
     */
    dropdownBackgroundColor?: UIAttributeColor;

    dropdownBackgroundImage?: UIAssetName;

    scrollbarColors?: UIAttributeColorBlock;

    scrollbarImage?: UIAssetName;

    itemHeight?: int;
}

interface DropdownElement {
    tag: "Dropdown";
    attributes?: DropdownElementAttributes;
    children?: OptionElement[];
}

interface GridLayoutElementAttributes extends BaseElementAttributes {
    /**
     * @defaultValue "0 0 0 0"
     */
    padding?: UIAttributePadding;

    /**
     * Spacing between child elements.
     * @defaultValue 0
     */
    spacing?: int;

    /**
     * @defaultValue "100 100"
     */
    cellSize?: UIAttributeVector2;

    /**
     * @defaultValue "UpperLeft"
     */
    startCorner?: Corner;

    /**
     * @defaultValue "Horizontal"
     */
    startAxis?: Axis;

    /**
     * @defaultValue "UpperLeft"
     */
    childAlignment?: Alignment;

    /**
     * @defaultValue "Flexible"
     */
    constraint?: "Flexible" | "FixedColumnCount" | "FixedRowCount";

    /**
     * @defaultValue 2
     */
    constraintCount?: int;
}

interface GridLayoutElement {
    tag: "GridLayout";
    attributes?: GridLayoutElementAttributes;
    children?: UIElement[];
}

type HorizontalLayoutElementAttributes = AxisLayoutElementAttributes;

interface HorizontalLayoutElement {
    tag: "HorizontalLayout";
    attributes?: HorizontalLayoutElementAttributes;
    children?: UIElement[];
}

interface HorizontalScrollViewElementAttributes extends ScrollViewElementAttributes {
    /**
     * @defaultValue true
     */
    horizontal?: boolean;

    /**
     * @defaultValue false
     */
    vertical?: boolean;

    /**
     * @defaultValue "AutoHide"
     */
    horizontalScrollbarVisibility?: ScrollbarVisibility;

    verticalScrollbarVisibility?: ScrollbarVisibility;
}

interface HorizontalScrollViewElement {
    tag: "HorizontalScrollView";
    attributes?: HorizontalScrollViewElementAttributes;
    children?: UIElement[];
}

interface ImageElementAttributes extends BaseElementAttributes {
    /** The name of the file in the asset manager (upper right corner of the scripting window in-game). */
    image: UIAssetName;

    /**
     * @defaultValue "#FFFFFF"
     */
    color?: UIAttributeColor;

    /**
     * Image Type
     *
     * @defaultValue "Simple"
     */
    type?: "Simple" | "Sliced" | "Filled" | "Tiled";

    /**
     * Should this image block clicks from passing through it?
     * @defaultValue true
     */
    raycastTarget?: boolean;
}

interface ImageElement {
    tag: "Image";
    attributes?: ImageElementAttributes;
    children?: UIElement[];
}

interface InputFieldElementAttributes extends BaseElementAttributes {
    /** Each time the text is changed, a Lua function with this name will be triggered. */
    onValueChanged?: UIAttributeHandler;

    /** When the input box is deselected, a Lua function with this name will be triggered. */
    onEndEdit?: UIAttributeHandler;

    /**	The string in the text box, if any. Is the value sent to onValueChanged's or onEndEdit's function. */
    text?: string;

    /** A string that is semi-visible when there is no text in the input. */
    placeholder?: string;

    /**
     * @defaultValue true
     */
    interactable?: boolean;

    /**
     * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
     */
    colors?: UIAttributeColorBlock;

    /**
     * @defaultValue "SingleLine"
     */
    lineType?: "SingleLine" | "MultiLineSubmit" | "MultiLineNewLine";

    /**
     * @defaultValue "None"
     */
    characterValidation?: "None" | "Integer" | "Decimal" | "Alphanumeric" | "Name" | "EmailAddress";

    /**
     * @defaultValue 0.85
     */
    caretBlinkRate?: number;

    /**
     * @defaultValue 1
     */
    caretWidth?: number;

    /**
     * @defaultValue "#323232"
     */
    caretColor?: UIAttributeColor;

    /**
     * @defaultValue "rgba(0.65,0.8,1,0.75)"
     */
    selectionColor?: UIAttributeColor;

    /**
     * @defaultValue false
     */
    readOnly?: boolean;

    /**
     * @defaultValue "#323232"
     */
    textColor?: UIAttributeColor;

    /**
     * @defaultValue 0 (no limit)
     */
    characterLimit?: int;
}

interface InputFieldElement {
    tag: "InputField";
    attributes?: InputFieldElementAttributes;
    children?: UIElement[];
}

interface OptionElementAttributes extends BaseElementAttributes {
    selected?: boolean;
}

interface OptionElement {
    tag: "Option";
    attributes?: OptionElementAttributes;
}

interface PanelElementAttributes extends BaseElementAttributes {
    /**
     * Specifies the padding for this panel. Please note that if padding is specified, the panel will function as a
     * LayoutGroup (which it does not do by default).
     */
    padding?: UIAttributePadding;
}

interface PanelElement {
    tag: "Panel";
    attributes?: PanelElementAttributes;
    children?: UIElement[];
}

interface ProgressBarElementAttributes extends BaseElementAttributes {
    /** Background Image */
    image?: UIAssetName;

    /**
     * Background Color
     *
     * @defaultValue "#FFFFFF"
     */

    color?: UIAttributeColor;

    /** Fill Image */
    fillImage?: UIAssetName;

    /**
     * Fill Color
     *
     * @defaultValue "#FFFFFF"
     */
    fillImageColor?: UIAttributeColor;

    /**
     * Percentage to Display
     *
     * @defaultValue 0
     */
    percentage?: number;

    /**
     * Is the percentage text displayed?
     *
     * @defaultValue true
     */
    showPercentageText?: boolean;

    /**
     * Format to use for the percentage text
     *
     * @defaultValue "0.00"
     */
    percentageTextFormat?: string;

    /**
     * Percentage Text Color
     *
     * @defaultValue "#000000"
     */
    textColor?: UIAttributeColor;

    /** Percentage Text Shadow Color */

    textShadow?: UIAttributeColor;

    /** Percentage Text Outline Color */
    textOutline?: UIAttributeColor;

    /**
     * Percentage Text Alignment
     *
     * @defaultValue "MiddleCenter"
     */
    textAlignment?: Alignment;
}

interface ProgressBarElement {
    tag: "ProgressBar";
    attributes?: ProgressBarElementAttributes;
    children?: UIElement[];
}

interface RowElementAttributes extends BaseElementAttributes {
    /**
     * Sets the height for this row. Use a value of '0' to specify that this row should be auto-sized.
     *
     * @defaultValue 0
     */
    preferredHeight?: int;

    /**
     * If set to true, then this row will ignore the tables' rowBackgroundImage and rowBackgroundColor values, allowing
     * you to override those values for this row.
     *
     * @defaultValue false
     */
    dontUseTableRowBackground?: boolean;
}

interface RowElement {
    tag: "Row";
    attributes?: RowElementAttributes;
    children?: (UIElement | CellElement)[];
}

interface ScrollViewElementAttributes extends BaseElementAttributes {
    /** When a selection is made, its name is sent to a function with this name. */
    onValueChanged?: UIAttributeHandler;

    /**
     * @defaultValue "Clamped"
     */
    movementType?: "Unrestricted" | "Elastic" | "Clamped";

    /**
     * @defaultValue 0.1
     */
    elasticity?: number;

    /**
     * @defaultValue true
     */
    inertia?: boolean;

    /**
     * @defaultValue 0.135
     */
    decelerationRate?: number;

    /**
     * @defaultValue 1
     */
    scrollSensitivity?: number;

    /**
     * If set to true, then this scroll view will have no visible scrollbars.
     *
     * @defaultValue false
     */
    noScrollbars?: boolean;

    /**
     * @defaultValue "#FFFFFF"
     */
    scrollbarBackgroundColor?: UIAttributeColor;

    /**
     * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
     */
    scrollbarColors?: UIAttributeColorBlock;

    scrollbarImage?: UIAssetName;
}

interface SliderElementAttributes extends BaseElementAttributes {
    /** When the slider is moved, a Lua function with this name will be triggered. (rapidly) */
    onValueChanged?: UIAttributeHandler;

    /**
     * @defaultValue true
     */
    interactable?: boolean;

    /**
     * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
     */
    colors?: UIAttributeColorBlock;

    /**
     * @defaultValue 0
     */
    minValue?: number;

    /**
     * @defaultValue 1
     */
    maxValue?: number;

    /**
     * @defaultValue 0
     */
    value?: number;

    /**
     * @defaultValue false
     */
    wholeNumbers?: boolean;

    /**
     * @defaultValue "LeftToRight"
     */
    direction?: "LeftToRight" | "RightToLeft" | "TopToBottom" | "BottomToTop";

    backgroundColor?: UIAttributeColor;

    fillColor?: UIAttributeColor;

    fillImage?: UIAssetName;

    handleColor?: UIAttributeColor;

    handleImage?: UIAssetName;
}

interface SliderElement {
    tag: "Slider";
    attributes?: SliderElementAttributes;
    children?: UIElement[];
}

interface TableLayoutElementAttributes extends BaseElementAttributes {
    /**
     * @defaultValue "0 0 0 0"
     */
    padding?: UIAttributePadding;

    /**
     * Spacing between child elements.
     * @defaultValue 0
     */
    spacing?: int;

    /**
     * Explicitly set the width of each column. Use a value of 0 to auto-size a specific column.
     */
    columnWidths?: int[];

    /**
     * If more cells are added to a row than are accounted for by columnWidths, should this TableLayout automatically
     * add one or more new auto-sized entries (0) to columnWidths?
     *
     * @defaultValue true
     */
    automaticallyAddColumns?: boolean;

    /**
     * If there are more entries in columnWidths than there are cells in any row, should this TableLayout automatically
     * remove entries from columnWidths until their are no 'empty' columns?
     *
     * @defaultValue true
     */
    automaticallyRemoveEmptyColumns?: boolean;

    /**
     * If set to true, then the height of this TableLayout will automatically be calculated as the sum of each rows
     * preferredHeight value. This option cannot be used without explicitly sized rows.
     *
     * @defaultValue false
     */
    autoCalculateHeight?: boolean;

    /**
     * If set to true, then all cells will use this TableLayout's cellPadding value.
     *
     * @defaultValue true
     */
    useGlobalCellPadding?: boolean;

    /**
     * Padding for each cell.
     *
     * @defaultValue "0 0 0 0"
     */
    cellPadding?: UIAttributePadding;

    /** Image to use as the background for each cell. */
    cellBackgroundImage?: UIAssetName;

    /**
     * Color for each cells background.
     *
     * @defaultValue "rgba(1,1,1,0.4)"
     */
    cellBackgroundColor?: UIAttributeColor;

    /** Image to use as the background for each row. */
    rowBackgroundImage?: UIAssetName;

    /**
     * Color to use for each rows background.
     *
     * @defaultValue "clear"
     */
    rowBackgroundColor?: UIAttributeColor;
}

interface TableLayoutElement {
    tag: "TableLayout";
    attributes?: TableLayoutElementAttributes;
    children?: (UIElement | RowElement)[];
}

interface TextElementAttributes extends BaseElementAttributes {
    /** This can be used to determine the text that appears. It can also be modified externally by the script. */
    text?: string;

    /**
     * @defaultValue "MiddleCenter"
     */
    alignment?: Alignment;

    /**
     * @defaultValue "#323232"
     */
    color?: UIAttributeColor;

    /**
     * @defaultValue "Normal"
     */
    fontStyle?: "Normal" | "Bold" | "Italic" | "BoldItalic";

    /**
     * @defaultValue 14
     */
    fontSize?: int;

    /**
     * Resize text to fit?
     *
     * @defaultValue false
     */
    resizeTextForBestFit?: boolean;

    /**
     * Minimum font size
     *
     * @defaultValue 10
     */
    resizeTextMinSize?: int;

    /**
     * Maximum font size
     *
     * @defaultValue 40
     */
    resizeTextMaxSize?: int;

    /**
     * @defaultValue "Overflow"
     */
    horizontalOverflow?: "Wrap" | "Overflow";

    /**
     * @defaultValue "Truncate"
     */
    verticalOverflow?: "Truncate" | "Overflow";
}

interface TextElement {
    tag: "Text";
    attributes?: TextElementAttributes;
    children?: UIElement[];
}

interface ToggleButtonElementAttributes extends BaseElementAttributes {
    /** When toggled, a Lua function with this name will be triggered. */
    onValueChanged?: UIAttributeHandler;

    /**
     * @defaultValue true
     */
    interactable?: boolean;

    /**
     * @defaultValue "#000000"
     */
    textColor?: UIAttributeColor;

    /**
     * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
     */
    colors?: UIAttributeColorBlock;

    /**
     * If the toggle is "on" or not. Is the value sent to onValueChanged's function.
     *
     * @defaultValue false
     */
    isOn?: boolean;

    textShadow?: UIAttributeColor;

    textOutline?: UIAttributeColor;

    /**
     * @defaultValue "UpperLeft"
     */
    textAlignment?: Alignment;

    icon?: UIAssetName;

    iconWidth?: int;

    iconColor?: UIAttributeColor;

    /**
     * @defaultValue "Left"
     */
    iconAlignment?: "Left" | "Right";

    /**
     * @defaultValue "0 0 0 0"
     */
    padding?: UIAttributePadding;
}

interface ToggleButtonElement {
    tag: "ToggleButton";
    attributes?: ToggleButtonElementAttributes;
    children?: UIElement[];
}

interface ToggleElementAttributes extends BaseElementAttributes {
    /** When toggled, a Lua function with this name will be triggered. */
    onValueChanged?: UIAttributeHandler;

    /**
     * @defaultValue true
     */
    interactable?: boolean;

    /**
     * @defaultValue "#000000"
     */
    textColor?: UIAttributeColor;

    /**
     * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
     */
    colors?: UIAttributeColorBlock;

    /**
     * If the toggle is "on" or not. Is the value sent to onValueChanged's function.
     *
     * @defaultValue false
     */
    isOn?: boolean;

    /**
     * Sets the width in pixels of the internal check box
     *
     * @defaultValue 20
     */
    toggleWidth?: int;

    /**
     * Sets the height in pixels of the internal check box
     *
     * @defaultValue 20
     */
    toggleHeight?: int;
}

interface ToggleElement {
    tag: "Toggle";
    attributes?: ToggleElementAttributes;
    children?: UIElement[];
}

interface ToggleGroupElementAttributes extends BaseElementAttributes {
    /**
     * If this is set to true, then the user may clear their selection from within the ToggleGroup by clicking on the
     * selected Toggle.
     *
     * @defaultValue false
     */
    allowSwitchOff?: boolean;

    /** Sets the default background image to use for nested Toggle elements. */
    toggleBackgroundImage?: UIAssetName;

    /**
     * @defaultValue "#FFFFFF"
     */
    toggleBackgroundColor?: UIAttributeColor;

    /** Sets the default image to use for selected (checked) nested Toggle elements. */
    toggleSelectedImage?: UIAssetName;

    /**
     * @defaultValue "#FFFFFF"
     */
    toggleSelectedColor?: UIAttributeColor;
}

interface ToggleGroupElement {
    tag: "ToggleGroup";
    attributes?: ToggleGroupElementAttributes;
    children?: UIElement[];
}

type VerticalLayoutElementAttributes = AxisLayoutElementAttributes;

interface VerticalLayoutElement {
    tag: "VerticalLayout";
    attributes?: VerticalLayoutElementAttributes;
    children?: UIElement[];
}

interface VerticalScrollViewElementAttributes extends ScrollViewElementAttributes {
    /**
     * @defaultValue false
     */
    horizontal?: boolean;

    /**
     * @defaultValue true
     */
    vertical?: boolean;

    horizontalScrollbarVisibility?: ScrollbarVisibility;

    /**
     * @defaultValue "AutoHide"
     */
    verticalScrollbarVisibility?: ScrollbarVisibility;
}

interface VerticalScrollViewElement {
    tag: "VerticalScrollView";
    attributes?: VerticalScrollViewElementAttributes;
    children?: UIElement[];
}

type ScrollbarVisibility = "Permanent" | "AutoHide" | "AutoHideAndExpandViewport";

type Axis = "Horizontal" | "Vertical";

type Corner = "UpperLeft" | "UpperRight" | "LowerLeft" | "LowerRight";

type Alignment =
    | "UpperLeft"
    | "UpperCenter"
    | "UpperRight"
    | "MiddleLeft"
    | "MiddleCenter"
    | "MiddleRight"
    | "LowerLeft"
    | "LowerCenter"
    | "LowerRight";

type ShowAnimation = "None" | "Grow" | "FadeIn" | "SlideIn_Left" | "SlideIn_Right" | "SlideIn_Top" | "SlideIn_Bottom";

type HideAnimation =
    | "None"
    | "Shrink"
    | "FadeOut"
    | "SlideOut_Left"
    | "SlideOut_Right"
    | "SlideOut_Top"
    | "SlideOut_Bottom";

// TODO check out where "clear" is possible
type UIAttributeColor = string;
type UIAttributeColorBlock = string;
type UIAttributeHandler = string;
type UIAttributePadding = string;
type UIAttributePercentage = string;
type UIAttributeVector2 = string;
type UIAttributeVector3 = string;

type UIAttributeName =
    | keyof ButtonElementAttributes
    | keyof CellElementAttributes
    | keyof DropdownElementAttributes
    | keyof GridLayoutElementAttributes
    | keyof HorizontalLayoutElementAttributes
    | keyof HorizontalScrollViewElementAttributes
    | keyof ImageElementAttributes
    | keyof InputFieldElementAttributes
    | keyof OptionElementAttributes
    | keyof PanelElementAttributes
    | keyof ProgressBarElementAttributes
    | keyof RowElementAttributes
    | keyof SliderElementAttributes
    | keyof TableLayoutElementAttributes
    | keyof TextElementAttributes
    | keyof ToggleButtonElementAttributes
    | keyof ToggleElementAttributes
    | keyof ToggleGroupElementAttributes
    | keyof VerticalLayoutElementAttributes
    | keyof VerticalScrollViewElementAttributes;

type UIElement =
    | ButtonElement
    | DropdownElement
    | GridLayoutElement
    | HorizontalLayoutElement
    | HorizontalScrollViewElement
    | ImageElement
    | InputFieldElement
    | PanelElement
    | ProgressBarElement
    | SliderElement
    | TableLayoutElement
    | TextElement
    | ToggleButtonElement
    | ToggleElement
    | ToggleGroupElement
    | VerticalLayoutElement
    | VerticalScrollViewElement;
