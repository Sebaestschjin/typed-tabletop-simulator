---@meta

---@class tts.UI
---@field loading boolean Indicates whether (the server) has finished loading all UI custom assets
UI = {}

---@alias tts.UI.Asset.Name string

---@alias tts.UI.Asset.Type
---| 0 Image
---| 1 Asset bundle

---@class tts.UI.Asset
---@field type tts.UI.Asset.Type
---@field name tts.UI.Asset.Name
---@field url string

---@alias tts.UI.Element.AttributeValue string | number | boolean

---@alias tts.UI.Element.Tag
---| tts.UI.LayoutElement.Tag
---| "Defaults"
---| "Button"
---| "Cell"
---| "Dropdown"
---| "Image"
---| "InputField"
---| "Option"
---| "Row"
---| "Text"
---| "Toggle"
---| "VerticalScrollView"
---| "HorizontalScrollView"
---@alias tts.UI.LayoutElement.Tag
---| "HorizontalLayout"
---| "VerticalLayout"
---| "TableLayout"
---| "Panel"
---| "GridLayout"
---@alias tts.UI.LayoutElement
---| tts.UI.Element.HorizontalLayout
---| tts.UI.Element.VerticalLayout
---| tts.UI.Element.TableLayout
---| tts.UI.Element.Panel
---| tts.UI.Element.GridLayout
---@alias tts.UI.ScrollViewElement
---| tts.UI.Element.HorizontalScrollView
---| tts.UI.Element.VerticalScrollView
---@alias tts.UI.Element
---| tts.UI.LayoutElement
---| tts.UI.ScrollViewElement
---| tts.UI.Element.Defaults
---| tts.UI.Element.Button
---| tts.UI.Element.Text
---| tts.UI.Element.Dropdown
---| tts.UI.Element.Option
---| tts.UI.Element.Image
---| tts.UI.Element.Toggle
---| tts.UI.Element.ToggleButton
---| tts.UI.Element.ToggleGroup
---| tts.UI.Element.InputField
---| tts.UI.Element.ProgressBar
---| tts.UI.Element.Slider
---| tts.UI.Element.Row
---| tts.UI.Element.Cell


---@alias tts.UI.Element.AttributeValue.Alignment "UpperLeft" | "UpperCenter" | "UpperRight" | "MiddleLeft" | "MiddleCenter" | "MiddleRight" | "LowerLeft" | "LowerCenter" | "LowerRight"
---@alias tts.UI.Element.AttributeValue.AlignmentAxis "Horizontal" | "Vertical"
---@alias tts.UI.Element.AttributeValue.AlignmentCorner "UpperLeft" | "UpperRight" | "LowerLeft" | "LowerRight"
---@alias tts.UI.Element.AttributeValue.Boolean boolean | "true" | "false" | "1" | "0" | 1 | 0
---@alias tts.UI.Element.AttributeValue.Color string
---@alias tts.UI.Element.AttributeValue.ColorBlock string
---@alias tts.UI.Element.AttributeValue.ContentSizeFit "vertical" | "horizontal" | "both" | "none"
---@alias tts.UI.Element.AttributeValue.FontStyle "Normal" | "Bold" | "Italic" | "BoldItalic"
---@alias tts.UI.Element.AttributeValue.IconAlignment "Left" | "Right"
---@alias tts.UI.Element.AttributeValue.Id string
---@alias tts.UI.Element.AttributeValue.Navigation "None" | "Horizontal" | "Vertical" | "Automatic" | "Explicit"
---@alias tts.UI.Element.AttributeValue.Number number | string
---@alias tts.UI.Element.AttributeValue.Padding string
---@alias tts.UI.Element.AttributeValue.Percentage string
---@alias tts.UI.Element.AttributeValue.Vector2 string
---@alias tts.UI.Element.AttributeValue.Vector3 string
---@alias tts.UI.Element.AttributeValue.PlayerColors string Pipe separated list of PlayerColors
---@alias tts.UI.Element.AttributeValue.HideAnimation "None" | "Shrink" | "FadeOut" | "SlideOut_Left" | "SlideOut_Right" | "SlideOut_Top" | "SlideOut_Bottom"
---@alias tts.UI.Element.AttributeValue.ShowAnimation "None" | "Grow" | "FadeIn" | "SlideIn_Left" | "SlideIn_Right" | "SlideIn_Top" | "SlideIn_Bottom"
---@alias tts.UI.Element.AttributeValue.TooltipPosition "Above" | "Below" | "Left" | "Right"
---@alias tts.UI.Element.AttributeValue.Transition "None" | "ColorTint" | "SpriteSwap" | "Animation"
---@alias tts.UI.Element.AttributeValue.HorizontalOverflow "Wrap" | "Overflow"
---@alias tts.UI.Element.AttributeValue.VerticalOverflow "Truncate" | "Overflow"
---@alias tts.UI.Element.AttributeValue.Constraint "Flexible" | "FixedColumnCount" | "FixedRowCount"

---@alias tts.UI.Handler fun(player: tts.Player, value: string, id: nil | string)
--- A specific version of tts.UI.Handler that requires the presence of the element id. Can be used on cases where a ID
--- is always present so a non-nil cast is not required.
---@alias tts.UI.ElementHandler fun(player: tts.Player, value: string, id: string)

--- The name of global function matching the type tts.UI.Handler.
---
--- By default the global function is looked for in the Lua script context belonging to the same
--- object as the UI was presented on (or in Global if the UI is Global UI). However, prefixing the
--- function name with either "Global/" or "[Object GUID]/", will cause the message to be delivered
--- to the corresponding script context.
---@alias tts.UI.Element.AttributeValue.Handler string

---@class tts.UI.Element.Base.Attributes
---@field id? tts.UI.Element.AttributeValue.Id
---@field name? string
---@field class? string Space separated list of class names
---@field active? tts.UI.Element.AttributeValue.Boolean Default true
---@field raycastTarget? tts.UI.Element.AttributeValue.Boolean Default true
---@field onClick? tts.UI.Element.AttributeValue.Handler Unless you provide your own parameter as part of the name, the callback is passed "-1" (Left), "-2" (Right) or "-3" (Middle) as the value.
---@field onMouseDown? tts.UI.Element.AttributeValue.Handler Unless you provide your own parameter as part of the name, the callback is passed "-1" (Left), "-2" (Right) or "-3" (Middle) as the value.
---@field onMouseUp? tts.UI.Element.AttributeValue.Handler Unless you provide your own parameter as part of the name, the callback is passed "-1" (Left), "-2" (Right) or "-3" (Middle) as the value.
---@field onMouseEnter? tts.UI.Element.AttributeValue.Handler Unless you provide your own parameter as part of the name, the callback is passed "-1" as the value.
---@field onMouseExit? tts.UI.Element.AttributeValue.Handler Unless you provide your own parameter as part of the name, the callback is passed "-1" as the value.
---@field shadow? tts.UI.Element.AttributeValue.Color Default "None"
---@field shadowDistance? tts.UI.Element.AttributeValue.Vector2 Default "1 -1"
---@field outline? tts.UI.Element.AttributeValue.Color Default "None"
---@field outlineSize? tts.UI.Element.AttributeValue.Vector2 Default "1 -1"
---@field ignoreLayout? tts.UI.Element.AttributeValue.Boolean Default false
---@field minWidth? tts.UI.Element.AttributeValue.Number
---@field minHeight? tts.UI.Element.AttributeValue.Number
---@field preferredWidth? tts.UI.Element.AttributeValue.Number
---@field preferredHeight? tts.UI.Element.AttributeValue.Number
---@field flexibleWidth? tts.UI.Element.AttributeValue.Number
---@field flexibleHeight? tts.UI.Element.AttributeValue.Number
---@field rectAlignment? tts.UI.Element.AttributeValue.Alignment Default "MiddleCenter"
---@field width? tts.UI.Element.AttributeValue.Number | tts.UI.Element.AttributeValue.Percentage Default "100%"
---@field height? tts.UI.Element.AttributeValue.Number | tts.UI.Element.AttributeValue.Percentage Default "100%"
---@field offsetXY? tts.UI.Element.AttributeValue.Vector2 Default "0 0"
---@field showAnimation? tts.UI.Element.AttributeValue.ShowAnimation Default "None"
---@field hideAnimation? tts.UI.Element.AttributeValue.HideAnimation Default "None"
---@field showAnimationDelay? tts.UI.Element.AttributeValue.Number Default "0"
---@field hideAnimationDelay? tts.UI.Element.AttributeValue.Number Default "0"
---@field animationDuration? tts.UI.Element.AttributeValue.Number Default "0.25"
---@field contentSizeFitter? tts.UI.Element.AttributeValue.ContentSizeFit Default "none"
---@field anchorMin? tts.UI.Element.AttributeValue.Vector2
---@field anchorMax? tts.UI.Element.AttributeValue.Vector2
---@field sizeDelta? tts.UI.Element.AttributeValue.Vector2
---@field pivot? tts.UI.Element.AttributeValue.Vector2
---@field rotation? tts.UI.Element.AttributeValue.Vector3
---@field scale? tts.UI.Element.AttributeValue.Vector2
---@field offsetMin? tts.UI.Element.AttributeValue.Vector2
---@field offsetMax? tts.UI.Element.AttributeValue.Vector2
---@field selected? tts.UI.Element.AttributeValue.Boolean Default false
---@field navigation? tts.UI.Element.AttributeValue.Navigation Default "Automatic"
---@field selectOnUp? tts.UI.Element.AttributeValue.Id
---@field selectOnDown? tts.UI.Element.AttributeValue.Id
---@field selectOnLeft? tts.UI.Element.AttributeValue.Id
---@field selectOnRight? tts.UI.Element.AttributeValue.Id
---@field tooltip? string
---@field tooltipBackgroundImage? tts.UI.Asset.Name
---@field tooltipBorderColor? tts.UI.Element.AttributeValue.Color
---@field tooltipBorderImage? tts.UI.Asset.Name
---@field tooltipOffset? integer
---@field tooltipPosition? tts.UI.Element.AttributeValue.TooltipPosition
---@field visibility? tts.UI.Element.AttributeValue.PlayerColors

---@class tts.UI.Element.Base
---@field attributes? tts.UI.Element.Base.Attributes
---@field children? tts.UI.Element[]

---@class tts.UI.Element.Input.Base.Attributes : tts.UI.Element.Base.Attributes
---@field onValueChanged? tts.UI.Element.AttributeValue.Handler

---@class tts.UI.Element.Input.Base
---@field attributes? tts.UI.Element.Input.Base.Attributes
---@field children? tts.UI.Element[]

---@class tts.UI.Element.InputField.Attributes : tts.UI.Element.Input.Base.Attributes

---@class tts.UI.Element.InputField : tts.UI.Element.Input.Base
---@field tag "InputField"
---@field attributes? tts.UI.Element.InputField.Attributes

---@class tts.UI.Element.ProgressBar.Attributes : tts.UI.Element.Base.Attributes

---@class tts.UI.Element.ProgressBar : tts.UI.Element.Base
---@field tag "ProgressBar"
---@field attributes? tts.UI.Element.ProgressBar.Attributes

---@class tts.UI.Element.Slider.Attributes : tts.UI.Element.Input.Base.Attributes

---@class tts.UI.Element.Slider : tts.UI.Element.Input.Base
---@field tag "Slider"
---@field attributes? tts.UI.Element.Slider.Attributes

---@class tts.UI.Element.Button.Attributes : tts.UI.Element.Base.Attributes
---@field fontSize? tts.UI.Element.AttributeValue.Number Default 14
---@field fontStyle? tts.UI.Element.AttributeValue.FontStyle Default "Normal"
---@field interactable? tts.UI.Element.AttributeValue.Boolean Default true
---@field textColor? tts.UI.Element.AttributeValue.Color Default "#000000"
---@field colors? tts.UI.Element.AttributeValue.ColorBlock Default "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
---@field textColors? tts.UI.Element.AttributeValue.ColorBlock
---@field textShadow? tts.UI.Element.AttributeValue.Color Default "None"
---@field textOutline? tts.UI.Element.AttributeValue.Color Default "None"
---@field textAlignment? tts.UI.Element.AttributeValue.Alignment Default "UpperLeft"
---@field icon? tts.UI.Asset.Name Default ""
---@field iconWidth? tts.UI.Element.AttributeValue.Color
---@field iconHeight? tts.UI.Element.AttributeValue.Color
---@field iconAlignment? tts.UI.Element.AttributeValue.IconAlignment Default "Left"
---@field padding? tts.UI.Element.AttributeValue.Padding Default "0 0 0 0"
---@field transition? tts.UI.Element.AttributeValue.Transition
---@field highlightedSprite? tts.UI.Asset.Name
---@field pressedSprite? tts.UI.Asset.Name
---@field disabledSprite? tts.UI.Asset.Name

---@class tts.UI.Element.Button : tts.UI.Element.Base
---@field tag "Button"
---@field attributes? tts.UI.Element.Button.Attributes
---@field value? string

---@class tts.UI.Element.Cell : tts.UI.Element.Base
---@field tag "Cell"

---@class tts.UI.Element.HorizontalScrollView : tts.UI.Element.Base
---@field tag "HorizontalScrollView"

---@class tts.UI.Element.VerticalScrollView : tts.UI.Element.Base
---@field tag "VerticalScrollView"

---@class tts.UI.Element.Defaults : tts.UI.Element.Base
---@field attributes nil
---@field tag "Defaults"

---@class tts.UI.Element.Dropdown.Attributes : tts.UI.Element.Input.Base.Attributes
---@field onValueChanged tts.UI.Element.AttributeValue.Handler Callback name may be optionally followed by "(selectedText)", "(selectedValue)" or "(selectedIndex)". The latter causes the selected Option's index (0-based) to be passed to the callback (but represented as a string). The former two are identical and match the default behavior (no parameter specified) passing the text value of the Option to the callback.
---@field textAlignment? tts.UI.Element.AttributeValue.Alignment Default "UpperLeft"
---@field textColor? tts.UI.Element.AttributeValue.Color Default "#000000"
---@field textOutline? tts.UI.Element.AttributeValue.Color Default "None"
---@field textShadow? tts.UI.Element.AttributeValue.Color Default "None"
---@field itemBackgroundColors? tts.UI.Element.AttributeValue.ColorBlock Default "#FFFFFF|#FFFFFF|#C8C8C8|rgba(0.78,0.78,0.78,0.5)"
---@field itemTextColor? tts.UI.Element.AttributeValue.Color Default "#000000"
---@field checkColor? tts.UI.Element.AttributeValue.Color Default "#000000"
---@field checkImage? tts.UI.Asset.Name
---@field checkImagePreserveAspect? boolean
---@field checkSize? number
---@field arrowColor? tts.UI.Element.AttributeValue.Color Default "#000000"
---@field arrowImage? tts.UI.Asset.Name
---@field arrowOffset? tts.UI.Element.AttributeValue.Vector2
---@field dropdownBackgroundColor? tts.UI.Element.AttributeValue.Color Default "None"
---@field dropdownBackgroundImage? tts.UI.Asset.Name
---@field dropdownHeight? number
---@field scrollbarColors? tts.UI.Element.AttributeValue.ColorBlock
---@field scrollbarImage? tts.UI.Asset.Name
---@field scrollbarBackgroundColor? tts.UI.Element.AttributeValue.Color Default "None"
---@field scrollbarBackgroundImage? tts.UI.Asset.Name
---@field scrollSensitivity? number Default 1.0. A factor/multiplier to augment the scroll speed.
---@field itemHeight? number

---@class tts.UI.Element.Dropdown : tts.UI.Element.Base
---@field tag "Dropdown"
---@field attributes? tts.UI.Element.Dropdown.Attributes
---@field children tts.UI.Element.Option[]

---@class tts.UI.Element.Image.Attributes : tts.UI.Element.Base.Attributes
---@field image string
---@field preserveAspect? tts.UI.Element.AttributeValue.Boolean

---@class tts.UI.Element.Image : tts.UI.Element.Base
---@field tag "Image"
---@field attributes tts.UI.Element.Image.Attributes

---@class tts.UI.Element.Row : tts.UI.Element.Base
---@field tag "Row"

---@class tts.UI.Element.Text.Attributes : tts.UI.Element.Base.Attributes
---@field alignment? tts.UI.Element.AttributeValue.Alignment Default "MiddleCenter"
---@field color? tts.UI.Element.AttributeValue.Color
---@field font? string Note: At present TTS doesn't really support custom fonts. You can reference a system font name, but each OS has a different font list, so it's probably a bad idea.
---@field fontStyle? tts.UI.Element.AttributeValue.FontStyle Default "Normal"
---@field fontSize? tts.UI.Element.AttributeValue.Number Default 14
---@field resizeTextForBestFit? tts.UI.Element.AttributeValue.Boolean Default false
---@field resizeTextMinSize? tts.UI.Element.AttributeValue.Number Default 10
---@field resizeTextMaxSize? tts.UI.Element.AttributeValue.Number Default 40
---@field horizontalOverflow? tts.UI.Element.AttributeValue.HorizontalOverflow Default "Overflow"
---@field verticalOverflow? tts.UI.Element.AttributeValue.VerticalOverflow Default "Truncate"

---@class tts.UI.Element.Text : tts.UI.Element.Base
---@field tag "Text"
---@field attributes? tts.UI.Element.Text.Attributes
---@field children nil
---@field value? string

---@class tts.UI.Element.TableLayout : tts.UI.Element.Base
---@field tag "TableLayout"

---@class tts.UI.Element.Toggle.Attributes : tts.UI.Element.Base.Attributes
---@field onValueChanged? tts.UI.Element.AttributeValue.Handler

---@class tts.UI.Element.Toggle : tts.UI.Element.Base
---@field tag "Toggle"
---@field attributes tts.UI.Element.Toggle.Attributes

---@class tts.UI.Element.ToggleButton : tts.UI.Element.Input.Base
---@field tag "ToggleButton"
---@field attributes? tts.UI.Element.Input.Base.Attributes
---@field value? string

---@class tts.UI.Element.ToggleGroup : tts.UI.Element.Base
---@field tag "ToggleGroup"

---@class tts.UI.Element.Panel.Attributes : tts.UI.Element.Base.Attributes
---@field padding? tts.UI.Element.AttributeValue.Padding
---@field color? tts.UI.Element.AttributeValue.Color

---@class tts.UI.Element.Panel : tts.UI.Element.Layout.Base
---@field tag "Panel"
---@field attributes? tts.UI.Element.Panel.Attributes

---@class tts.UI.Element.Option.Attributes : tts.UI.Element.Base.Attributes
---@field selected? tts.UI.Element.AttributeValue.Boolean

---@class tts.UI.Element.Option : tts.UI.Element.Base
---@field tag "Option"
---@field attributes? tts.UI.Element.Option.Attributes
---@field value? string | number

---@class tts.UI.Element.Layout.Base.Attributes : tts.UI.Element.Base.Attributes
---@field childAlignment? tts.UI.Element.AttributeValue.Alignment
---@field padding? tts.UI.Element.AttributeValue.Padding

---@class tts.UI.Element.Layout.Base : tts.UI.Element.Base
---@field attributes? tts.UI.Element.Layout.Base.Attributes

---@class tts.UI.Element.AxisLayout.Base.Attributes : tts.UI.Element.Layout.Base.Attributes
---@field spacing? tts.UI.Element.AttributeValue.Number Default 0
---@field childForceExpandWidth? tts.UI.Element.AttributeValue.Boolean Default true
---@field childForceExpandHeight? tts.UI.Element.AttributeValue.Boolean Default true
---@field childControlWidth? tts.UI.Element.AttributeValue.Boolean Default true
---@field childControlHeight? tts.UI.Element.AttributeValue.Boolean Default true
---@field childScaleWidth? tts.UI.Element.AttributeValue.Boolean Default false
---@field childScaleHeight? tts.UI.Element.AttributeValue.Boolean Default false

---@class tts.UI.Element.HorizontalLayout.Attributes : tts.UI.Element.AxisLayout.Base.Attributes

---@class tts.UI.Element.HorizontalLayout : tts.UI.Element.Base
---@field tag "HorizontalLayout"
---@field attributes? tts.UI.Element.HorizontalLayout.Attributes

---@class tts.UI.Element.VerticalLayout.Attributes : tts.UI.Element.AxisLayout.Base.Attributes

---@class tts.UI.Element.VerticalLayout : tts.UI.Element.Base
---@field tag "VerticalLayout"
---@field attributes? tts.UI.Element.VerticalLayout.Attributes

---@class tts.UI.Element.GridLayout.Attributes : tts.UI.Element.Base.Attributes
---@field padding? tts.UI.Element.AttributeValue.Padding Default "0 0 0 0"
---@field spacing? tts.UI.Element.AttributeValue.Vector2 Default "0 0"
---@field cellSize? tts.UI.Element.AttributeValue.Vector2 Default "100 100"
---@field startCorner? tts.UI.Element.AttributeValue.AlignmentCorner Default "UpperLeft"
---@field startAxis? tts.UI.Element.AttributeValue.AlignmentAxis Default "Horizontal"
---@field childAlignment? tts.UI.Element.AttributeValue.Alignment Default "UpperLeft"
---@field constraint? tts.UI.Element.AttributeValue.Constraint Default "Flexible"
---@field constraintCount? tts.UI.Element.AttributeValue.Number Default 2

---@class tts.UI.Element.GridLayout : tts.UI.Element.Base
---@field tag "GridLayout"
---@field attributes? tts.UI.Element.GridLayout.Attributes

---@param id tts.UI.Element.AttributeValue.Id
---@param name string
---@return string
function UI.getAttribute(id, name) end

---@param id tts.UI.Element.AttributeValue.Id
---@return table<string, string>
function UI.getAttributes(id) end

---@return  tts.UI.Asset[]
function UI.getCustomAssets() end

---@param id tts.UI.Element.AttributeValue.Id
---@return string
function UI.getValue(id) end

---@return string
function UI.getXml() end

---@return tts.UI.Element[]
function UI.getXmlTable() end

---@param id string
---@return boolean
function UI.hide(id) end

---@param id tts.UI.Element.AttributeValue.Id
---@param name string
---@param value string | number | boolean
---@return boolean
function UI.setAttribute(id, name, value) end

---@param id tts.UI.Element.AttributeValue.Id
---@param attributes table<string, string | number | boolean>
---@return boolean
function UI.setAttributes(id, attributes) end

---@param assets tts.UI.Asset[]
---@return nil
function UI.setCustomAssets(assets) end

---@param id tts.UI.Element.AttributeValue.Id
---@param value string
---@return boolean
function UI.setValue(id, value) end

---@param xml string
---@param assets? tts.UI.Asset[]
---@return boolean
function UI.setXml(xml, assets) end

---@param xmlTable tts.UI.Element[]
---@param assets? tts.UI.Asset[]
---@return boolean
function UI.setXmlTable(xmlTable, assets) end

---@param id string
---@return boolean
function UI.show(id) end
