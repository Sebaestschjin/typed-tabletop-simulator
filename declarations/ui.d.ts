interface UI {}
// /** @noSelf */
// declare interface UI {
//     loading: boolean;
//     getAttribute(id: string, attribute: string): unknown; // Obtains the value of a specified attribute of a UI element.
//     getAttributes(id: string): { [key: string]: unknown }; // Returns the attributes and their values of a UI element.
//     getCustomAssets(): any; // Returns information on all custom assets uploaded to the UI ASSETS pane.
//     getValue(id: string): string; // Obtains the value between elements tags, like: <Text>ValueToGet</Text>
//     getXml(): string; // Returns the run-time UI's XML in string format.
//     getXmlTable(): any; // Returns the run-time UI's XML formatted as a Lua table.
//     hide(id: string): boolean; // Hides the given UI element. Unlike the "active" attribute, hide triggers animations.
//     setAttribute(id: string, attribute: string, value: unknown): boolean; // Sets the value of a specified attribute of a UI element.
//     setAttributes(id: string, data: { [key: string]: unknown }): boolean; // Updates the value of the supplied attributes of a UI element.
//     setClass(id: string, names: string): boolean; // Replaces all classes on a UI element.
//     setCustomAssets(assets: any): boolean; // Sets the UI ASSETS (like custom images) for global or an Object.
//     setValue(id: string, value: string): boolean; // Updates the value between elements tags, like: <Text>ValueChanged</Text>
//     setXml(xml: string): boolean; // Replaces the run-time UI with the XML string.
//     setXmlTable(data: any): boolean; // Replaces the run-time UI with an XML string which is generated from a table of data.
//     show(id: string): boolean; // Displays the given UI element. Unlike the "active" attribute, show triggers animations.
//   }

declare namespace JSX {
    interface ElementChildrenAttribute {
        children: {};
    }
    interface IntrinsicElements {
        /** Adds basic text. This tag supports Rich Text as shown in the example below. */
        text: {
            /** This can be used to determine the text that appears. It can also be modified externally by the script. */
            text?: string;
            /**
             * @defaultValue "MiddleCenter"
             */
            alignment?: Alignment;
            /**
             * @defaultValue "#323232"
             */
            color?: UiColor;
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
             * @defaultValue false
             */
            resizeTextForBestFit?: boolean;
            /**
             * Minimum font size
             * @defaultValue 10
             */
            resizeTextMinSize?: int;
            /**
             * Maximum font size
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
            children?: string;
        };
        /** Adds an image. */
        image: {
            /** The name of the file in the asset manager (upper right corner of the scripting window in-game). */
            image: UiAsset;
            /**
             * @defaultValue "#FFFFFF"
             */
            color?: UiColor;
            /**
             * Image Type
             * @defaultValue "Simple"
             */
            type?: "Simple" | "Sliced" | "Filled" | "Tiled";
            /**
             * Should this image block clicks from passing through it?
             * @defaultValue true
             */
            raycastTarget?: boolean;
            onClick?: UiHandler;
            children?: undefined;
        };
        progressBar: {
            /** Background Image */
            image?: UiAsset;
            /**
             * Background Color
             * @defaultValue "#FFFFFF"
             */
            color?: UiColor;
            /** Fill Image */
            fillImage?: UiAsset;
            /**
             * Fill Color
             * @defaultValue "#FFFFFF"
             */
            fillImageColor?: UiColor;
            /**
             * Percentage to Display
             * @defaultValue 0
             */
            percentage?: number;
            /**
             * Is the percentage text displayed?
             * @defaultValue true
             */
            showPercentageText?: boolean;
            /**
             * Format to use for the percentage text
             * @defaultValue "0.00"
             */
            percentageTextFormat?: string;
            /**
             * Percentage Text Color
             * @defaultValue "#000000"
             */
            textColor?: UiColor;
            /** Percentage Text Shadow Color */
            textShadow?: UiColor;
            /** Percentage Text Outline Color */
            textOutline?: UiColor;
            /**
             * Percentage Text Alignment
             * @defaultValue "MiddleCenter"
             */
            textAlignment?: Alignment;
            children?: undefined;
        };
        /** A text input for single or multiple lines. Is able to send the text (during edit and when finished). */
        inputField: {
            /** Each time the text is changed, a Lua function with this name will be triggered. */
            onValueChanged?: UiHandler;
            /** When the input box is deselected, a Lua function with this name will be triggered. */
            onEndEdit?: UiHandler;
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
            colors?: UiColorBlock;
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
            caretColor?: UiColor;
            /**
             * @defaultValue "rgba(0.65,0.8,1,0.75)"
             */
            selectionColor?: UiColor;
            /**
             * @defaultValue false
             */
            readOnly?: boolean;
            /**
             * @defaultValue "#323232"
             */
            textColor?: UiColor;
            /**
             * @defaultValue 0 (no limit)
             */
            characterLimit?: int;
            children?: undefined;
        };
        /** A button. Is able to send a trigger event. */
        button: {
            /** When clicked, a Lua function with this name will be triggered. */
            onClick?: UiHandler;
            /**
             * @defaultValue true
             */
            interactable?: boolean;
            /**
             * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
             */
            colors?: UiColorBlock;
            textShadow?: UiColor;
            textOutline?: UiColor;
            /**
             * @defaultValue "UpperLeft"
             */
            textAlignment?: Alignment;
            icon?: UiAsset;
            iconWidth?: int;
            iconColor?: UiColor;
            /**
             * @defaultValue "Left"
             */
            iconAlignment?: "Left" | "Right";
            /**
             * @defaultValue "0 0 0 0"
             */
            padding?: UiPadding;
            /**
             * @defaultValue "ColorTint"
             */
            transition?: "None" | "ColorTint" | "SpriteSwap" | "Animation";
            highlightedSprite?: UiAsset;
            pressedSprite?: UiAsset;
            disabledSprite?: UiAsset;
            children?: undefined;
        };
        /** A simple on/off toggle. Is able to send on/off status. */
        toggle: {
            /** When toggled, a Lua function with this name will be triggered. */
            onValueChanged?: UiHandler;
            /**
             * @defaultValue true
             */
            interactable?: boolean;
            /**
             * @defaultValue "#000000"
             */
            textColor?: UiColor;
            /**
             * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
             */
            colors?: UiColorBlock;
            /**
             * If the toggle is "on" or not. Is the value sent to onValueChanged's function.
             * @defaultValue false
             */
            isOn?: boolean;
            /**
             * Sets the width in pixels of the internal check box
             * @defaultValue 20
             */
            toggleWidth?: int;
            /**
             * Sets the height in pixels of the internal check box
             * @defaultValue 20
             */
            toggleHeight?: int;
            children?: undefined;
        };
        /** A toggle, but styled as a button. */
        toggleButton: {
            /** When toggled, a Lua function with this name will be triggered. */
            onValueChanged?: UiHandler;
            /**
             * @defaultValue true
             */
            interactable?: boolean;
            /**
             * @defaultValue "#000000"
             */
            textColor?: UiColor;
            /**
             * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
             */
            colors?: UiColorBlock;
            /**
             * If the toggle is "on" or not. Is the value sent to onValueChanged's function.
             * @defaultValue false
             */
            isOn?: boolean;
            textShadow?: UiColor;
            textOutline?: UiColor;
            /**
             * @defaultValue "UpperLeft"
             */
            textAlignment?: Alignment;
            icon?: UiAsset;
            iconWidth?: int;
            iconColor?: UiColor;
            /**
             * @defaultValue "Left"
             */
            iconAlignment?: "Left" | "Right";
            /**
             * @defaultValue "0 0 0 0"
             */
            padding?: UiPadding;
            children?: undefined;
        };
        /** Allows a group of toggles to act as a radio button, where only 1 of them can be "checked" at once. Works with Toggle or ToggleButton */
        toggleGroup: {
            /**
             * If this is set to true, then the user may clear their selection from within the ToggleGroup by clicking on the selected Toggle.
             * @defaultValue false
             */
            allowSwitchOff?: boolean;
            /** Sets the default background image to use for nested Toggle elements. */
            toggleBackgroundImage?: UiAsset;
            /**
             * @defaultValue "#FFFFFF"
             */
            toggleBackgroundColor?: UiColor;
            /** Sets the default image to use for selected (checked) nested Toggle elements. */
            toggleSelectedImage?: UiAsset;
            /**
             * @defaultValue "#FFFFFF"
             */
            toggleSelectedColor?: UiColor;
            children?: any[]; // TODO shouldn't be any
        };
        /** A value slider. Is able to send Value. */
        slider: {
            /** When the slider is moved, a Lua function with this name will be triggered. (rapidly) */
            onValueChanged?: UiHandler;
            /**
             * @defaultValue true
             */
            interactable?: boolean;
            /**
             * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
             */
            colors?: UiColorBlock;
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
            backgroundColor?: UiColor;
            fillColor?: UiColor;
            fillImage?: UiAsset;
            handleColor?: UiColor;
            handleImage?: UiAsset;
            children?: undefined;
        };
        /** A dropdown menu. Is able to send the contents of the selection made in it. */
        dropdown: {
            /** When an option is selected, a Lua function with this name will be triggered. */
            onValueChanged?: UiHandler;
            /**
             * @defaultValue true
             */
            interactable?: boolean;
            /**
             * @defaultValue "#000000"
             */
            textColor?: UiColor;
            itemBackgroundColors?: UiColorBlock;
            /**
             * @defaultValue "#000000"
             */
            itemTextColor?: UiColor;
            /**
             * @defaultValue "#000000"
             */
            checkColor?: UiColor;
            checkImage?: UiAsset;
            /**
             * @defaultValue "#000000"
             */
            arrowColor?: UiColor;
            arrowImage?: UiAsset;
            /**
             * @defaultValue "#000000"
             */
            dropdownBackgroundColor?: UiColor;
            dropdownBackgroundImage?: UiAsset;
            scrollbarColors?: UiColorBlock;
            scrollbarImage?: UiAsset;
            itemHeight?: int;
            children: any[];
        };
        /** An entry in a Dropdown. */
        option: {
            selected?: boolean;
            children: string;
        };
        /** A "window" in which elements can be confined. */
        panel: {
            /** Specifies the padding for this panel. Please note that if padding is specified, the panel will function as a LayoutGroup (which it does not do by default). */
            padding?: UiPadding;
            children?: any[];
        };
        /** A horizontal row of elements. */
        horizontalLayout: AxisLayout;
        /** A vertical row of elements. */
        verticalLayout: AxisLayout;
        /** A grid of elements. */
        gridLayout: {
            /**
             * @defaultValue "0 0 0 0"
             */
            padding?: UiPadding;
            /**
             * Spacing between child elements.
             * @defaultValue 0
             */
            spacing?: int;
            /**
             * @defaultValue "100 100"
             */
            cellSize?: UiSize;
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
            children?: any[];
        };
        /** A layout element based on HTML tables, allowing you to specify the position of elements in specific rows/columns. */
        tableLayout: {
            /**
             * @defaultValue "0 0 0 0"
             */
            padding?: UiPadding;
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
             * If more cells are added to a row than are accounted for by columnWidths, should this TableLayout automatically add one or more new auto-sized entries (0) to columnWidths?
             * @defaultValue true
             */
            automaticallyAddColumns?: boolean;
            /**
             * If there are more entries in columnWidths than there are cells in any row, should this TableLayout automatically remove entries from columnWidths until their are no 'empty' columns?
             * @defaultValue true
             */
            automaticallyRemoveEmptyColumns?: boolean;
            /**
             * If set to true, then the height of this TableLayout will automatically be calculated as the sum of each rows preferredHeight value. This option cannot be used without explicitly sized rows.
             * @defaultValue false
             */
            autoCalculateHeight?: boolean;
            /**
             * If set to true, then all cells will use this TableLayout's cellPadding value.
             * @defaultValue true
             */
            useGlobalCellPadding?: boolean;
            /**
             * Padding for each cell.
             * @defaultValue "0 0 0 0"
             */
            cellPadding?: UiPadding;
            /** Image to use as the background for each cell. */
            cellBackgroundImage?: UiAsset;
            /**
             * Color for each cells background.
             * @defaultValue "rgba(1,1,1,0.4)"
             */
            cellBackgroundColor?: UiColor;
            /** Image to use as the background for each row. */
            rowBackgroundImage?: UiAsset;
            /**
             * Color to use for each rows background.
             * @defaultValue "clear"
             */
            rowBackgroundColor?: UiColor;
        };
        /** A row within a TableLayout. */
        row: {
            /**
             * Sets the height for this row. Use a value of '0' to specify that this row should be auto-sized.
             * @defaultValue 0
             */
            preferredHeight?: int;
            /**
             * If set to true, then this row will ignore the tables' rowBackgroundImage and rowBackgroundColor values, allowing you to override those values for this row.
             * @defaultValue false
             */
            dontUseTableRowBackground?: boolean;
        };
        /** A cell within a TableLayout. */
        cell: {
            /**
             * @defaultValue 1
             */
            columnSpan?: int;
            /**
             * If set to true, then this cell will ignore the tables' cellBackgroundImage and values, allowing you to override those values for this cell.
             * @defaultValue false
             */
            dontUseTableCellBackground?: boolean;
            /**
             * If set to true, then this cell will ignore the tables' cellPadding value, allowing you to set unique cell padding for this cell.
             * @defaultValue false
             */
            overrideGlobalCellPadding?: boolean;
            /**
             * Padding values to use for this cell if overrideGlobalCellPadding is set to true.
             * @defaultValue "0 0 0 0"
             */
            padding?: UiPadding;
            /**
             * @defaultValue true
             */
            childForceExpandWidth?: boolean;
            /**
             * @defaultValue true
             */
            childForceExpandHeight?: boolean;
        };
        /**
         * A scrollable horizontal row of elements. This is an input element.
         * A layout element such as a Panel, HorizontalLayout, GridLayout, or TableLayout can be used to position child elements within the Scroll View.
         */
        horizontalScrollView: ScrollView & {
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
        };
        /**
         * A scrollable vertical column of elements. This is an input element.
         * A layout element such as a Panel, HorizontalLayout, GridLayout, or TableLayout can be used to position child elements within the Scroll View.
         */
        verticalScrollView: ScrollView & {
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
        };
    }
}

interface AxisLayout {
    /**
     * @defaultValue "0 0 0 0"
     */
    padding?: UiPadding;
    /**
     * Spacing between child elements.
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

interface ScrollView {
    /** When a selection is made, its name is sent to a function with this name. */
    onValueChanged?: UiHandler;
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
     * @defaultValue false
     */
    noScrollbars?: boolean;
    /**
     * @defaultValue "#FFFFFF"
     */
    scrollbarBackgroundColor?: UiColor;
    /**
     * @defaultValue "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
     */
    scrollbarColors?: UiColorBlock;
    scrollbarImage?: UiAsset;
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

// TODO check out where "clear" is possible
type UiColor = string;
type UiColorBlock = string;
type UiPadding = string;
type UiSize = string;
type UiAsset = string;
type UiHandler = string;
