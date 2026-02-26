---@meta

---@alias tts.Object.Type
---| "3D Text"
---| "Backgammon Piece"
---| "Bag"
---| "Block"
---| "Board"
---| "Calculator"
---| "Card"
---| "Checker"
---| "Chess"
---| "Chip"
---| "Clock"
---| "Coin"
---| "Counter"
---| "Deck"
---| "Dice"
---| "Domino"
---| "Figurine"
---| "Fog"
---| "FogOfWar"
---| "GoPiece"
---| "Hand"
---| "Infinite"
---| "InventoryBackground"
---| "InventoryBotBG"
---| "InventoryItemBlank"
---| "InventoryTopBG"
---| "Mp3"
---| "Notecard"
---| "Jigsaw"
---| "Jigsaw Box"
---| "Pointer"
---| "Randomize"
---| "rpgFigurine"
---| "Scripting"
---| "Stack"
---| "Superfight"
---| "Surface"
---| "Tablet"
---| "Tile"
---| "Tileset"
---| "VR UI"

---@alias tts.Object.Joint.Type "Fixed" | "Hinge" | "Spring"

---@class tts.Object.Joint.Base.Options
---@field type tts.Object.Joint.Type
---@field joint_object_guid? string
---@field collision? boolean
---@field break_force? number
---@field break_torgue? number
---@field axis? tts.VectorShape
---@field anchor? tts.VectorShape
---@field connected_anchor? tts.VectorShape

---@alias tts.Object.Joint.Fixed.Options tts.Object.Joint.Base.Options

---@class tts.Object.Joint.Spring.Options : tts.Object.Joint.Base.Options
---@field spring? number Default 10
---@field damper? number Default 0.2

---@class tts.Object.Joint.Hinge.Options : tts.Object.Joint.Base.Options
---@field motor_force? number
---@field motor_velocity? number
---@field motor_free_spin? boolean
---@field max_distance? number
---@field min_distance? number

---@alias tts.Object.Joint.Options
---| tts.Object.Joint.Fixed.Options
---| tts.Object.Joint.Hinge.Options
---| tts.Object.Joint.Spring.Options


---@class tts.Object : tts.GameObject
---@field AssetBundle tts.AssetBundle.Behaviour? [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Book tts.Book.Behaviour?        [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Browser tts.Browser.Behaviour?     [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Clock tts.Clock.Behaviour?       [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Counter tts.Counter.Behaviour?     [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Container tts.Container.Behaviour?   [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field LayoutZone tts.LayoutZone.Behaviour?  [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field RPGFigurine tts.RPGFigurine.Behaviour? [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field TextTool tts.TextTool.Behaviour?    [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field angular_drag number
---@field auto_raise boolean
---@field bounciness number
---@field drag number
---@field drag_selectable boolean
---@field dynamic_friction number
---@field grid_projection boolean
---@field guid string [Read only]
---@field held_by_color? tts.PlayerColor [Read only]
---@field hide_when_face_down boolean
---@field ignore_fog_of_war boolean
---@field interactable boolean
---@field is_face_down boolean [Read only]
---@field loading_custom boolean [Read only]
---@field locked boolean
---@field mass number
---@field max_typed_number number
---@field memo? string
---@field name string [Read only] Internal resource name for this Object. Typically only useful for spawnObjectData()/spawnObjectJSON(). Generally, you want getName() instead.
---@field pick_up_position tts.Vector [Read only]
---@field pick_up_rotation tts.Vector [Read only]
---@field remainder? tts.Object [Read only]
---@field resting boolean
---@field script_code string
---@field script_state string
---@field spawning boolean
---@field static_friction number
---@field sticky boolean
---@field tag tts.Object.Type Deprecated: Use type. An identifier indicating the type of Tabletop Simulator object. [Read only]
---@field type tts.Object.Type An identifier indicating the type of Tabletop Simulator object. [Read only]
---@field tooltip boolean
---@field UI tts.UI [Read only]
---@field use_gravity boolean
---@field use_grid boolean
---@field use_hands boolean Whether or not this object may be held within a hand zone.
---@field use_rotation_value_flip boolean
---@field use_snap_points boolean
---@field value number
---@field value_flags number
local Object

---@class tts.Book : tts.Object
---@field Book tts.Book.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

--- The following are not real types in TTS, but this allows us to strongly type our code where an object of a specific type is required.
--- NOTE: There is no tts.AssetBundle or tts.Model, because these objects always masquerade as another object type.

---@class tts.Container : tts.Object
---@field Container tts.Container.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
local Container

---@class tts.Stackable : tts.Object
---@field Container tts.Container.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
local Stackable

---@class tts.BackgammonPiece : tts.Object

---@class tts.Bag : tts.Container

---@class tts.Block : tts.Object

---@class tts.Board : tts.Object

---@class tts.Calculator : tts.Object

---@class tts.CardCustom : tts.Card
local CardCustom

---@class tts.Checker : tts.Stackable

---@class tts.Chess : tts.Object

---@class tts.Chip : tts.Stackable

---@class tts.Clock : tts.Object
---@field Clock tts.Clock.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

---@class tts.Coin : tts.Object

---@class tts.Counter : tts.Object
---@field Counter tts.Counter.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

---@class tts.Domino : tts.Object

---@class tts.Figurine : tts.Object

---@class tts.Fog : tts.Zone

---@class tts.FogOfWar : tts.Zone

---@class tts.GoPiece : tts.Object

---@class tts.Hand : tts.Zone
local Hand

---@return tts.PlayerColor.Hand
function Hand.getValue() end

---@param newValue tts.PlayerColor.Hand
---@return boolean
function Hand.setValue(newValue) end

---@class tts.InfiniteBag : tts.Container

---@class tts.InventoryBackground : tts.Object

---@class tts.InventoryBotBG : tts.Object

---@class tts.InventoryItemBlank : tts.Object

---@class tts.InventoryTopBG : tts.Object

---@class tts.MP3 : tts.Object

---@class tts.Notecard : tts.Object

---@class tts.Jigsaw : tts.Object

---@class tts.JigsawBox : tts.Object

---@class tts.Pointer : tts.Object

---@class tts.Randomize : tts.Zone

---@class tts.RPGFigurine : tts.Object
---@field RPGFigurine tts.RPGFigurine.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

---@class tts.ScriptingZone : tts.Zone

---@class tts.Zone : tts.Object
local Zone

---@class tts.LayoutZone : tts.Zone
---@field LayoutZone tts.LayoutZone.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

---@class tts.Superfight : tts.Object

---@class tts.Surface : tts.Object

---@class tts.Browser : tts.Object
---@field Browser tts.Browser.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

---@class tts.Text : tts.Object
---@field TextTool tts.TextTool.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

---@class tts.Tileset : tts.Object

---@class tts.Token : tts.Stackable
local Token

---@class tts.VRUI : tts.Object


---@alias tts.Object.Deal.Destination tts.PlayerColor.Hand | "All" | "Seated"

---@param object tts.Object
---@return boolean
function Object.addAttachment(object) end

---@param label string Text for the menu item.
---@param callback fun(playerColor: tts.PlayerColor.Hand): nil
---@param keepOpen? boolean Whether the context menu should remain open after the item is selected. Defaults to false.
---@return true Technically, returns false if your `callback` param is nil. However, Luanalysis won't allow you to make that mistake.
function Object.addContextMenuItem(label, callback, keepOpen) end

---@param functionName string
---@param functionParameters? table | number | string | boolean
---@return any ...
function Object.call(functionName, functionParameters) end

---@return true
function Object.clearContextMenu() end

---@class tts.Object.Button.Options
---@field click_function? string A String of the function's name that will be run when button is clicked.
---@field function_owner? string | tts.Self | tts.ObjectThe Object which contains the click_function function. Defaults to Global>
---@field label? string | numberText that appears on the button. Defaults to ''.
---@field position? tts.VectorShapeWhere the button appears, relative to the Object's center.
---@field rotation? tts.VectorShape How the button is rotated, relative to the Object's rotation. Defaults to {x=0, y=0, z=0}.
---@field scale? tts.VectorShape Scale of the button, relative to the Object's scale. Defaults to {x=1, y=1, z=1}.
---@field width? number How wide the button will be, relative to the Object. Defaults to 100.
---@field height? number How tall the button will be, relative to the Object. Defaults to 100.
---@field font_size? number Size the label font will be, relative to the Object. Defaults to 100.
---@field color? tts.ColorShape A Color for the clickable button. Defaults to {r=1, g=1, b=1}.
---@field font_color? tts.ColorShape A Color for the label text.  Defaults to {r=0, g=0, b=0}.
---@field hover_color? tts.ColorShape A Color for the background during mouse-over.
---@field press_color? tts.ColorShape A Color for the background when clicked.
---@field tooltip? string Popup of text, similar to how an Object's name is displayed on mouseover.  Defaults to ''.

---@class tts.Object.Input.Options
---@field input_function? string The function's name that will be run when the input is selected.
---@field function_owner? string | tts.Self The Object which contains the input_function function.
---@field label? string Text that appears as greyed out text when there is no value in the input.
---@field position? tts.VectorShape Where the input appears, relative to the Object's center.
---@field rotation? tts.VectorShape How the input is rotated, relative to the Object's rotation.
---@field scale? tts.VectorShape Scale of the input, relative to the Object's scale.
---@field width? number How wide the input will be, relative to the Object.
---@field height? number How tall the input will be, relative to the Object.
---@field font_size? number Size the label/value font will be, relative to the Object.
---@field color? tts.ColorShape A Color for the input's background.
---@field font_color? tts.ColorShape A Color for the value text.
---@field tooltip? string A popup of text, similar to how an Object's name is displayed on mouseover.
---@field alignment? tts.Object.Input.Alignment How text is aligned in the input box.
---@field value? string | number A String of the text entered into the input.
---@field validation? tts.Object.Input.Validation An Int which determines what characters can be input into the value.
---@field tab? tts.Object.Input.Tab An Int which determines how pressing tab is handled when inputting.

---@alias tts.Object.Input.Alignment
---| 1 Automatic
---| 2 Left
---| 3 Center
---| 4 Right
---| 5 Justified

---@alias tts.Object.Input.Validation
---| 1 None
---| 2 Integer
---| 3 Float
---| 4 Alphanumeric
---| 5 Username
---| 6 Name

---@alias tts.Object.Input.Tab
---| 1 None
---| 2 Select Next Input
---| 3 Indent

---@class tts.Object.Input.Edit.Options : tts.Object.Input.Options
---@field index number

---
--- Removes all buttons from the object.
---
---@return true
function Object.clearButtons() end

---@class tts.Object.Button.Create.Options : tts.Object.Button.Options
---@field click_function string A String of the function's name that will be run when button is clicked.

---
--- Creates a new button on the object.
---
--- Returns false if you provide invalid parameters (e.g. blank `click_function` string), otherwise true.
---
---@param parameters tts.Object.Button.Create.Options
---@return boolean
function Object.createButton(parameters) end

---@class tts.Object.Clone.Options
---@field position? tts.VectorShape
---@field snap_to_grid? boolean

---@param parameters tts.Object.Clone.Options
---@return tts.Object
function Object.clone(parameters) end

---
--- If the object is a bag, deck or stack, deals an object from within to the specified player hand.
---
---@param count number
---@param destination? tts.Object.Deal.Destination Default "Seated"
---@param handIndex? number Default 1
---@param dealFromBottom? boolean Default false
---@return true
function Object.deal(count, destination, handIndex, dealFromBottom) end

--- Destroys an attachment with the given index.
---@param index number
---@return boolean
function Object.destroyAttachment(index) end

--- Destroys all attachments.
---@return boolean
function Object.destroyAttachments() end

---
--- Destroys the underlying Tabletop Simulator object.
---
---@return boolean
function Object.destruct() end

---@class tts.Object.Button.Edit.Options : tts.Object.Button.Options
---@field index number

---
--- Edits an existing button, referred to by the button's 0-based index (order of creation, starting at zero).
---
--- Returns false if you provide invalid parameters (e.g. blank `click_function` string), otherwise true.
---
---@param parameters tts.Object.Button.Edit.Options
---@return boolean
function Object.editButton(parameters) end

--- Modify an existing input. The only parameter that is required is the index. The rest are optional, and not using them will cause the edited input's element to remain.
---
--- Indexes start at 0. The first input on any given Object has an index of 0, the next input on it has an index of 1, etc. Each Object has its own indexes.
---@param parameters tts.Object.Input.Edit.Options
---@return boolean
function Object.editInput(parameters) end

---@return boolean
function Object.flip() end

---
--- Returns the object's angular velocity, in radians per second.
---@return tts.Vector
function Object.getAngularVelocity() end

---@return tts.Object.IndexedView[]
function Object.getAttachments() end

---@class tts.Object.Bounds
---@field center tts.Vector
---@field size tts.Vector
---@field offset tts.Vector

---
--- Returns an axis aligned bounding box encompassing the object. Position is in global coordinates, however the size of bounds takes into account the
--- underlying object model scale, which is not exposed directly to Lua.
---
--- As any (non-spherical) object rotates, these bounds change size to encompass the object's current orientation.
---@return tts.Object.Bounds
---@see tts.Object#getBoundsNormalized
function Object.getBounds() end

---
--- Returns the object's bounds, in global coordinates, as if the object were rotated to {0, 0, 0}.
---
--- The size of these bounds remain unchanged under rotation. However, changes in the object's position are reflected in the bound's center position.
---@return tts.Object.Bounds
function Object.getBoundsNormalized() end

---@class tts.Object.Button
---@field click_function string Name of a global function that will be executed when the button is clicked.
---@field function_owner string The Object where click_function is defined.
---@field label string Text that appears on the button.
---@field position tts.Vector Where the button appears, relative to the Object's center.
---@field rotation tts.Vector How the button is rotated, relative to the Object's rotation.
---@field scale tts.Vector Scale of the button, relative to the Object's scale.
---@field width number How wide the button is relative to the Object.
---@field height number How tall the button is relative to the Object.
---@field font_size number Size of the label font, relative to the Object.
---@field color tts.Color The Color of the button background.
---@field font_color tts.Color The Color of the label text.
---@field hover_color tts.Color The Color of the background during mouse-over.
---@field press_color tts.Color The Color of the background when clicked.
---@field tooltip string Pop-up description displayed on hover.
---@field index number

---@return tts.Object.Button[]
function Object.getButtons() end

---@return tts.Color
function Object.getColorTint() end

---@class tts.Object.Custom.Image.Base
---@field image string
---@field image_bottom string Same value as image_secondary
---@field image_secondary string
---@field image_scalar number

---@alias tts.Object.MaterialType
---| 0 Plastic
---| 1 Wood
---| 2 Metal
---| 3 Cardboard
---| 4 Glass

---@alias tts.AssetBundle.Type
---| 0 Generic
---| 1 Coin
---| 2 Bag
---| 3 Figurine
---| 4 Board
---| 5 Infinite
---| 6 Dice

---@class tts.Object.Custom.AssetBundle
---@field assetbundle string
---@field assetbundle_secondary string
---@field type tts.AssetBundle.Type
---@field material tts.Object.MaterialType

---@alias tts.Model.Type
---| 0 Generic
---| 1 Figurine
---| 2 Dice
---| 3 Coin
---| 4 Board
---| 5 Chip
---| 6 Bag
---| 7 Infinite

---@class tts.Object.Custom.Model
---@field mesh string
---@field diffuse string
---@field normal string
---@field collider string
---@field convex boolean
---@field type_index tts.Model.Type
---@field material tts.Object.MaterialType
---@field cast_shadows boolean
---@field specular_intensity number
---@field specular_color number
---@field specular_sharpness tts.Color
---@field fresnel_strength number

---@class tts.Object.Custom.Token : tts.Object.Custom.Image.Base
---@field thickness number
---@field merge_distance number
---@field stand_up boolean
---@field stackable boolean

---@return tts.Object.Custom.Token
function Token.getCustomObject() end

--- Returns object's data (serialized saved state).
---@return tts.Object.Data
function Object.getData() end

--- Returns object's data (serialized saved state).
---@return tts.Container.Data
function Container.getData() end

---@class tts.Object.Decal
---@field name string
---@field url string
---@field position tts.Vector
---@field rotation tts.Vector
---@field scale tts.Vector

---
--- Returns an array of decals, or nil if there are no decals on the object.
---
---@return nil | tts.Object.Decal[]
function Object.getDecals() end

---@return string # Description, also shows as part of Object's tooltip.
function Object.getDescription() end

---
--- Object's unique identifier.
---@return string
function Object.getGUID() end

--- Game Master Notes only visible for Player Color Black.
---@return string
function Object.getGMNotes() end

---@return nil | tts.Color
function Object.getHighlightColor() end

---@class tts.Object.Input
---@field input_function string The function's name that will be run when the input is selected.
---@field function_owner string | tts.Self The Object which contains the input_function function.
---@field label string Text that appears as greyed out text when there is no value in the input.
---@field position tts.VectorShape Where the input appears, relative to the Object's center.
---@field rotation tts.VectorShape How the input is rotated, relative to the Object's rotation.
---@field scale tts.VectorShape Scale of the input, relative to the Object's scale.
---@field width number How wide the input will be, relative to the Object.
---@field height number How tall the input will be, relative to the Object.
---@field font_size number Size the label/value font will be, relative to the Object.
---@field color tts.ColorShape A Color for the input's background.
---@field font_color tts.ColorShape A Color for the value text.
---@field tooltip string A popup of text, similar to how an Object's name is displayed on mouseover.
---@field alignment tts.Object.Input.Alignment How text is aligned in the input box.
---@field value string A String of the text entered into the input.
---@field validation tts.Object.Input.Validation An Int which determines what characters can be input into the value.
---@field tab tts.Object.Input.Tab An Int which determines how pressing tab is handled when inputting.

---@return tts.Object.Input[]
function Object.getInputs() end

---
--- Returns object's data (saved state) serialized into a JSON encoded string.
---@return string
function Object.getJSON() end

--- Returns whether or not the object is locked/frozen in place.
---@return boolean
function Object.getLock() end

---@return nil | string
function Object.getMemo() end

---
--- Returns object's name, as depicted in the object's tooltip.
---@return string
function Object.getName() end

---@class tts.Object.View
---@field name string
---@field nickname? string
---@field description? string
---@field gm_notes? string
---@field guid string
---@field lua_script? string
---@field lua_script_state? string
---@field memo? string
---@field tags string[]

---@class tts.Object.IndexedView : tts.Object.View
---@field index number

--- If this object is a zone, bag or deck, returns the objects contained within. Otherwise, logs an error and returns nil
---@return nil | tts.Object[] | tts.Object.IndexedView[]
function Object.getObjects() end

--- If this object is a zone, bag or deck, returns the objects contained within. Otherwise, logs an error and returns nil
---@return tts.Object.IndexedView[]
function Container.getObjects() end

--- If this object is a zone, bag or deck, returns the objects contained within. Otherwise, logs an error and returns nil
--- If the zone has tags, then only objects with compatible tags will occupy the zone (unless `ignoreTags` is `true`).
---@param ignoreTags? boolean If `true` then all objects in the zone will be returned, regardless of tags.
---@return tts.Object[]
function Zone.getObjects(ignoreTags) end

--- Combines 2 combinable objects to form a new container (Deck, Stat, etc)
---
---@param object tts.Object
---@param index? number
---@return self
function Object.putObject(object, index) end

--- Places an object into a container.
---
---@param object tts.Object
---@param index? number
---@return self
function Container.putObject(object, index) end

--- Places an chip onto another chip, forming a stack.
---
---@param object tts.Stackable
---@param index? number
---@return self
function Stackable.putObject(object, index) end

--- Places an card onto another card, forming a deck.
---
---@param object tts.Card | tts.Deck
---@param index? number
---@return tts.Deck
function Card.putObject(object, index) end

---@param index number
---@return tts.Object
function Object.removeAttachment(index) end

function Object.removeAttachments() end

---
--- Returns the object's position.
---@return tts.Vector
function Object.getPosition() end

---
--- Returns the object's rotation represented as a Vector of Euler angles.
---@return tts.Vector
function Object.getRotation() end

---
--- Returns the object's rotation value identifier. Often a number, but may also be a string.
---
--- At the time of writing, the only non-custom die that has string rotation values is Die_Piecepack, which has values
--- "Blank" and "Symbol" in place of the numbers 1 and 6 respectively (on a D6).
---
---@return number | string
function Object.getRotationValue() end

---@class tts.Object.RotationValue
---@field value number | string
---@field rotation tts.CharVectorShape

---
--- Returns the object's rotation values.
---
---@return tts.Object.RotationValue[]
function Object.getRotationValues() end

---
--- Returns the object's scale.
---@return tts.Vector
function Object.getScale() end

---
--- Returns a Vector of the forward direction of this Object. The direction is relative to how the object is facing.
---
---@return tts.Vector
function Object.getTransformForward() end

---
--- Returns a Vector of the right direction of this object. The direction is relative to how the object is facing.
---
---@return tts.Vector
function Object.getTransformRight() end

---
--- Returns a Vector of the up direction of this Object. The direction is relative to how the object is facing.
---
---@return tts.Vector
function Object.getTransformUp() end

---@class tts.Object.SnapPoint
---@field position tts.Vector Position of the snap point. The position is relative to the object's center (a local position).
---@field rotation tts.Vector Rotation of the snap point. The rotation is relative to the object's rotation (a local rotation).
---@field rotation_snap boolean If the snap point is a "rotation" snap point.
---@field tags string[] The list of tags added to this snap point.

--- Returns an array of snap points.
---@return tts.Object.SnapPoint[]
function Object.getSnapPoints() end

---@return number
function Object.getStateId() end

---@return nil | tts.Object.View[]
function Object.getStates() end

---@param name string Data value of a variable in another Object's script. Can only return a table.
---@return table
function Object.getTable(name) end

---
--- If the object is a bag, deck or stack, returns the number of objects within, otherwise -1.
---@return integer
function Object.getQuantity() end

---@return any
function Object.getValue() end

---@param name string
---@return any
function Object.getVar(name) end

---@class tts.Object.VectorLine
---@field points tts.Vector[] An array of 2 or more points representing a series of line segments from one point to the next.
---@field color tts.Color The color of the line.
---@field rotation tts.Vector Rotation of vector line. The rotation is relative to the object's rotation (a local rotation).
---@field thickness number The thickness of the line.

--- Returns an array of vector lines.
---@return tts.Object.VectorLine[]
function Object.getVectorLines() end

---
--- Returns the object's velocity.
---@return tts.Vector
function Object.getVelocity() end

---@return tts.Zone[]
function Object.getZones() end

---@param color? tts.ColorShape|string
---@return true
function Object.highlightOff(color) end

---@param color tts.ColorShape|string
---@param duration? number
---@return true
function Object.highlightOn(color, duration) end

---Returns true if the Object is (or will be) destroyed.
---@return boolean
function Object.isDestroyed() end

---Returns if the object is presently smooth moving, false, otherwise.
---@return boolean
function Object.isSmoothMoving() end

---
--- When called with arguments, creates a joint between this object and another object.
---
--- When called without any arguments, removes all joints on this object.
---
---@param object? tts.Object
---@param parameters? tts.Object.Joint.Options
---@return boolean
function Object.jointTo(object, parameters) end

function Object.lock() end

---@return tts.Object
function Object.reload() end

--- Randomizes the object i.e. rolls a die, shuffles a deck, reorders a bag, or in the case of objects consisting of multiple states, randomly selects a state.
---@param playerColor? tts.PlayerColor
---@return boolean
function Object.randomize(playerColor) end

---@param index number button index for this object, starting at 0
---@return boolean
function Object.removeButton(index) end

---
--- Scales the object by the specified multiplier(s), relative to the object's existing scale.
---
---@param scale? number
---@return true
function Object.scale(scale) end

---@param color tts.ColorShape
---@return boolean
function Object.setColorTint(color) end

---@class tts.Object.Custom.Deck.Options
---@field face string
---@field back string
---@field unique_back? boolean Defaults to false
---@field width? number Defaults to 10
---@field height? number Defaults to 7
---@field number? number Defaults to 52
---@field sideways? boolean Defaults to false
---@field back_is_hidden? boolean Defaults to false
---@field type? tts.Card.Type Defaults to 0



---@alias tts.Object.Custom.Options
---| tts.Card.Custom.Options
---| tts.Deck.Custom.Options

---@alias tts.Object.Custom
---| tts.Card.Custom
---| tts.Deck.Custom

---@return tts.Object.Custom
function Object.getCustomObject() end

---@param parameters tts.Object.Custom.Options
function Object.setCustomObject(parameters) end

---@class tts.Object.Decal.Options
---@field name string
---@field url string
---@field position? tts.VectorShape Default Vector(0, 0, 0)
---@field rotation? tts.VectorShape Default Vector(0, 0, 0)
---@field scale? tts.VectorShape Default Vector(1, 1, 1)

---
--- Removes all existing decals, replacing them with a decal per entry in the provided decal parameters array.
---
--- Returns false if the provided decal parameters are invalid (e.g. blank string name or URL), otherwise true.
---
---@param decals tts.Object.Decal.Options[]
---@return boolean
function Object.setDecals(decals) end

---@param description string
---@return true
function Object.setDescription(description) end

---@param notes string
function Object.setGMNotes(notes) end

---@param colors tts.PlayerColor[]
---@return boolean
function Object.setInvisibleTo(colors) end

---@param script string
function Object.setLuaScript(script) end

---
--- Sets whether the object is locked/frozen in place.
---
---@param lock boolean
---@return true
function Object.setLock(lock) end

---@param name string
---@return true
function Object.setName(name) end

---
--- Sets the object's position.
---
---@param position tts.VectorShape
---@return true
function Object.setPosition(position) end

---
--- Smoothly moves the object to the specified position.
---
---@param position tts.VectorShape
---@param collide? boolean Whether collision detection is enabled. Default false.
---@param fast? boolean Whether object should move quickly. Default false.
---@return true
function Object.setPositionSmooth(position, collide, fast) end

---@param scale tts.VectorShape
---@return true
function Object.setScale(scale) end

---@class tts.Object.SnapPoint.Options
---@field position? tts.VectorShape Position of the snap point. The position is relative to the object's center (a local position). Default {0, 0, 0}
---@field rotation? tts.VectorShape Rotation of the snap point. The rotation is relative to the object's rotation (a local rotation). Default {0, 0, 0}
---@field rotation_snap? boolean If the snap point is a "rotation" snap point. Default false
---@field tags? string[] The list of tags for this snap point.

--- Removes all existing snap points, replacing them with a snap point per entry in the provided snap point parameters array.
---@param snapPoints tts.Object.SnapPoint.Options[]
---@return true
---@see tts.Object#getSnapPoints
function Object.setSnapPoints(snapPoints) end

---@param state number
---@return tts.Object
function Object.setState(state) end

---@param name string Name of the table.
---@param tab table
function Object.setTable(name, tab) end

---@class tts.Object.Decal.Add.Options
---@field name string
---@field url string
---@field position tts.VectorShape
---@field rotation? tts.VectorShape
---@field scale? tts.VectorShape

---@param decal tts.Object.Decal.Add.Options
function Object.addDecal(decal) end

---@alias tts.Object.Tag string

---@param tag tts.Object.Tag
---@return boolean
function Object.addTag(tag) end

--- Replaces all tags on the object with those contained in the specified table
---@param tags tts.Object.Tag[]
function Object.setTags(tags) end

---@param tag tts.Object.Tag
---@return boolean
function Object.removeTag(tag) end

---@return tts.Object.Tag[]
function Object.getTags() end

---@return boolean
function Object.hasAnyTag() end

---@param other tts.Object
---@return boolean
function Object.hasMatchingTag(other) end

---@param tag tts.Object.Tag
---@return boolean
function Object.hasTag(tag) end

---
--- Sets the object's rotation to the specified orientation, provided as a vector of Euler angles.
---
---@param rotation tts.VectorShape
---@return true
function Object.setRotation(rotation) end

---
--- Smoothly rotates the object to the specified orientation, provided as a vector of Euler angles.
---
---@param rotation tts.VectorShape
---@param collide? boolean Whether collision detection is enabled. Default false.
---@param fast? boolean Whether object should rotate quickly. Default false.
---@return true
function Object.setRotationSmooth(rotation, collide, fast) end

---
--- Smoothly sets the object's rotation to the rotation corresponding with the provided rotation value identifier.
---
--- Must be a string/number corresponding with an existing rotation value identifier.
---
---@param value number | string
---@return true
---@see tts.Object#getRotationValues
function Object.setRotationValue(value) end

---@param newValue integer | string
---@return boolean
function Object.setValue(newValue) end

---@param name string
---@param value any
---@return true
function Object.setVar(name, value) end

---@class tts.Object.VectorLine.Options
---@field points tts.VectorShape[] An array of 2 or more points representing a series of line segments from one point to the next.
---@field color? tts.ColorShape The color of the line. Default {1, 1, 1}
---@field rotation? tts.VectorShape Rotation of vector line. The rotation is relative to the object's rotation (a local rotation). Default {0, 0, 0}
---@field thickness? number The thickness of the line. Default 0.1

--- Removes all existing vector lines, replacing them with a new vector line per entry in the provided vector line parameters array.
---@param lines tts.Object.VectorLine.Options[]
---@return true
---@see tts.Object#getVectorLines
function Object.setVectorLines(lines) end

---@return boolean
function Object.shuffle() end

function Object.unlock() end

---
--- Returns a local coordinate position corresponding with world coordinate position.
---
---@param position tts.VectorShape
---@return tts.Vector
function Object.positionToLocal(position) end

---
--- Returns a world coordinate position corresponding with local coordinate position.
---
---@param position tts.VectorShape
---@return tts.Vector
function Object.positionToWorld(position) end

---@class tts.Object.TakeObject.Base.Options : tts.Object.Callback
---@field top? boolean
---@field smooth? boolean
---@field position? tts.VectorShape
---@field rotation? tts.VectorShape
---@field flip? boolean

---@class tts.Object.TakeObject.Guid.Options : tts.Object.TakeObject.Base.Options
---@field guid? string

---@class tts.Object.TakeObject.Index.Options : tts.Object.TakeObject.Base.Options
---@field index? number

---@alias tts.Object.TakeObject.Options
---| tts.Object.TakeObject.Guid.Options
---| tts.Object.TakeObject.Index.Options

---
--- Registers this object for Global collision events, such as onObjectCollisionEnter. Always returns true.
---
---@param stay? boolean Default false. Whether we should register for onObjectCollisionStay. Stay events may negatively impact performance, only set this to true if absolutely necessary.
---@return true
function Object.registerCollisions(stay) end

---
--- If this object is a deck or bag, takes on object out.
---
--- Although an object reference is returned, it will not have spawned within the scene and thus is generally not safe
--- to use until callback_function been called.
---
---@param params? tts.Object.TakeObject.Options
---@return nil | tts.Object
function Object.takeObject(params) end

---
--- Deregisters this object for Global collision events. Returns true if the object was previously registered, false otherwise.
---
---@return boolean
function Object.unregisterCollisions() end

---@class tts.Object.Callback
---@field callback_function? tts.Object.Handler
---@field params? table Deprecated - use callback_function

---@alias tts.Object.Handler fun(object: tts.Object): nil

---@class tts.Object.SpawnObject.Options : tts.Object.Callback
---@field type string
---@field position? tts.VectorShape Default Vector(0, 0, 0)
---@field rotation? tts.VectorShape Default Vector(0, 0, 0)
---@field scale? tts.VectorShape Default Vector(1, 1, 1)
---@field sound? boolean Default true
---@field snap_to_grid? boolean

---@class tts.Object.SpawnObjectSerialized.Options : tts.Object.Callback
---@field position? tts.VectorShape
---@field rotation? tts.VectorShape
---@field scale? tts.VectorShape

---@class tts.Object.SpawnObjectData.Options : tts.Object.SpawnObjectSerialized.Options
---@field data tts.Object.Data

---@class tts.SpawnObjectJSON.Options : tts.Object.SpawnObjectSerialized.Options
---@field json string

---@param params tts.Object.SpawnObject.Options
---@return tts.Object
function spawnObject(params)
end

---@param params tts.Object.SpawnObjectData.Options
---@return tts.Object
function spawnObjectData(params)
end

---@param params tts.SpawnObjectJSON.Options
---@return tts.Object
function spawnObjectJSON(params)
end

---@param guid string
---@return nil | tts.Object
function getObjectFromGUID(guid)
end

---@return tts.Object[]
function getAllObjects()
end

---@return tts.Object[]
function getObjects()
end

---
--- Returns a table of all Objects which have the specified tag attached.
---
---@param tag string The tag to search for on Objects.
---@return tts.Object[]
function getObjectsWithTag(tag)
end

---
--- Returns a table of all Objects which have all of of the specified tags attached.
---
---@param tags string[] A table of tags to search for. An Object must have every tag in this table to be returned.
---@return tts.Object[]
function getObjectsWithAllTags(tags)
end

---
--- Returns a table of all Objects which have at least one of the specified tags attached.
---
---@param tags string[] A table of tags to search for. An Object must have at least one of these tags to be returned.
---@return tts.Object[]
function getObjectsWithAnyTags(tags)
end

---@class tts.Global : tts.Object
Global = {}

---@class tts.Self : tts.Object
self = {}
