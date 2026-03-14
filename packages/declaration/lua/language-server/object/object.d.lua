---@meta

---@class tts.Object : tts.GameObject, tts.Object.Behaviour
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

---@class tts.Object.Behaviour
---@field AssetBundle? tts.AssetBundle.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Book? tts.Book.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Browser? tts.Browser.Behaviour Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Clock? tts.Clock.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Counter? tts.Counter.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field Container? tts.Container.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field LayoutZone? tts.LayoutZone.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field RPGFigurine? tts.RPGFigurine.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
---@field TextTool? tts.TextTool.Behaviour [Read only] <br>Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.

---@alias tts.Object.Custom.Options
---| tts.AssetBundle.Custom.Options
---| tts.Card.Custom.Options
---| tts.Deck.Custom.Options

---@alias tts.Object.Custom
---| tts.AssetBundle.Custom
---| tts.Card.Custom
---| tts.Deck.Custom

---@class tts.Global : tts.Object
Global = {}

---@class tts.Self : tts.Object
self = {}

------------------------------
---------- Transform Functions (https://api.tabletopsimulator.com/object/#transform-functions)
------------------------------

-- TODO addForce

-- TODO addTorque

--- Returns the object's angular velocity, in radians per second.
---@return tts.Vector
function Object.getAngularVelocity() end

--- Returns an axis aligned bounding box encompassing the object. Position is in global coordinates, however the size of bounds takes into account the
--- underlying object model scale, which is not exposed directly to Lua.
---
--- As any (non-spherical) object rotates, these bounds change size to encompass the object's current orientation.
---@return tts.Object.Bounds
---@see tts.Object#getBoundsNormalized
function Object.getBounds() end

--- Returns the object's bounds, in global coordinates, as if the object were rotated to {0, 0, 0}.
---
--- The size of these bounds remain unchanged under rotation. However, changes in the object's position are reflected in the bound's center position.
---@return tts.Object.Bounds
function Object.getBoundsNormalized() end

--- Returns the object's position.
---@return tts.Vector
function Object.getPosition() end

-- TODO getPositionSmooth

--- Returns the object's rotation represented as a Vector of Euler angles.
---@return tts.Vector
function Object.getRotation() end

-- TODO getRotationSmooth

--- Returns the object's scale.
---@return tts.Vector
function Object.getScale() end

--- Returns a Vector of the forward direction of this Object. The direction is relative to how the object is facing.
---
---@return tts.Vector
function Object.getTransformForward() end

--- Returns a Vector of the right direction of this object. The direction is relative to how the object is facing.
---
---@return tts.Vector
function Object.getTransformRight() end

--- Returns a Vector of the up direction of this Object. The direction is relative to how the object is facing.
---
---@return tts.Vector
function Object.getTransformUp() end

--- Returns the object's velocity.
---@return tts.Vector
function Object.getVelocity() end

-- TODO getVisualBoundsNormalized

---Returns if the object is presently smooth moving, false, otherwise.
---@return boolean
function Object.isSmoothMoving() end

-- NOTE: Undocumented
function Object.lock() end

--- Returns a local coordinate position corresponding with world coordinate position.
---
---@param position tts.VectorShape
---@return tts.Vector
function Object.positionToLocal(position) end

--- Returns a world coordinate position corresponding with local coordinate position.
---
---@param position tts.VectorShape
---@return tts.Vector
function Object.positionToWorld(position) end

-- TODO rotate

--- Scales the object by the specified multiplier(s), relative to the object's existing scale.
---
---@param scale? number
---@return true
function Object.scale(scale) end

-- TODO setAngularVelocity

--- Sets the object's position.
---
---@param position tts.VectorShape
---@return true
function Object.setPosition(position) end

--- Smoothly moves the object to the specified position.
---
---@param position tts.VectorShape
---@param collide? boolean Whether collision detection is enabled. Default false.
---@param fast? boolean Whether object should move quickly. Default false.
---@return true
function Object.setPositionSmooth(position, collide, fast) end

--- Sets the object's rotation to the specified orientation, provided as a vector of Euler angles.
---
---@param rotation tts.VectorShape
---@return true
function Object.setRotation(rotation) end

--- Smoothly rotates the object to the specified orientation, provided as a vector of Euler angles.
---
---@param rotation tts.VectorShape
---@param collide? boolean Whether collision detection is enabled. Default false.
---@param fast? boolean Whether object should rotate quickly. Default false.
---@return true
function Object.setRotationSmooth(rotation, collide, fast) end

---@param scale tts.VectorShape
---@return true
function Object.setScale(scale) end

-- TODO setVelocity

-- TODO translate

-- NOTE: Undocumented
function Object.unlock() end

------------------------------
---------- Tag Functions (https://api.tabletopsimulator.com/object/#tag-functions)
------------------------------
---@alias tts.Object.Tag string

---@param tag tts.Object.Tag
---@return boolean
function Object.addTag(tag) end

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

---@param tag tts.Object.Tag
---@return boolean
function Object.removeTag(tag) end

--- Replaces all tags on the object with those contained in the specified table
---@param tags tts.Object.Tag[]
function Object.setTags(tags) end

------------------------------
---------- UI Functions (https://api.tabletopsimulator.com/object/#ui-functions)
------------------------------

--- Removes all scripted buttons.
---
---@return true
function Object.clearButtons() end

--- Removes all scripted inputs.
---
---@return true
function Object.clearInputs() end

--- Creates a new button on the object.
---
--- Returns false if you provide invalid parameters (e.g. blank `click_function` string), otherwise true.
---
---@param parameters tts.Object.Button.Options.Create
---@return boolean
function Object.createButton(parameters) end

--- Creates a scripted input attached to the Object.
---
---@param parameters tts.Object.Input.Options.Create
---@return boolean
function Object.createInput(parameters) end

--- Edits an existing button, referred to by the button's 0-based index (order of creation, starting at zero).
---
--- Returns false if you provide invalid parameters (e.g. blank `click_function` string), otherwise true.
---
---@param parameters tts.Object.Button.Options.Edit
---@return boolean
function Object.editButton(parameters) end

--- Modify an existing input. The only parameter that is required is the index. The rest are optional, and not using them will cause the edited input's element to remain.
---
--- Indexes start at 0. The first input on any given Object has an index of 0, the next input on it has an index of 1, etc. Each Object has its own indexes.
---@param parameters tts.Object.Input.Options.Edit
---@return boolean
function Object.editInput(parameters) end

---@return tts.Object.Button[]
function Object.getButtons() end

---@return tts.Object.Input[]
function Object.getInputs() end

---@param index number button index for this object, starting at 0
---@return boolean
function Object.removeButton(index) end

---@param index number input index for this object, starting at 0
---@return boolean
function Object.removeInput(index) end

------------------------------
---------- Get Functions (https://api.tabletopsimulator.com/object/#get-functions)
------------------------------

---@return tts.Object.IndexedView[]
function Object.getAttachments() end

---@return tts.Color
function Object.getColorTint() end

---@return tts.Object.Custom
function Object.getCustomObject() end

--- Returns object's data (serialized saved state).
---@return tts.Object.Data
function Object.getData() end

---@return string # Description, also shows as part of Object's tooltip.
function Object.getDescription() end

-- TODO getFogOfWarReveal

--- Game Master Notes only visible for Player Color Black.
---@return string
function Object.getGMNotes() end

--- Object's unique identifier.
---@return string
function Object.getGUID() end

-- NOTE: Undocumented
---@return nil | tts.Color
function Object.getHighlightColor() end

-- TODO getJoints

--- Returns object's data (saved state) serialized into a JSON encoded string.
---
---@param intended? boolean
---@return string
function Object.getJSON(intended) end

--- Returns whether or not the object is locked/frozen in place.
---@return boolean
function Object.getLock() end

--- NOTE: Undocumented
---@return nil | string
function Object.getMemo() end

--- Returns object's name, as depicted in the object's tooltip.
---@return string
function Object.getName() end

--- If this object is a zone, bag or deck, returns the objects contained within. Otherwise, logs an error and returns nil
---@return nil | tts.Object[] | tts.Object.IndexedView[]
function Object.getObjects() end

--- If the object is a bag, deck or stack, returns the number of objects within, otherwise -1.
---@return integer
function Object.getQuantity() end

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

--- Returns the object's rotation values.
---
---@return tts.Object.RotationValue[]
function Object.getRotationValues() end

-- TODO getSelectingPlayers

---@return number
function Object.getStateId() end

---@return nil | tts.Object.View[]
function Object.getStates() end

---@return any
function Object.getValue() end

---@return tts.Zone[]
function Object.getZones() end

---Returns true if the Object is (or will be) destroyed.
---@return boolean
function Object.isDestroyed() end

------------------------------
---------- Set Functions (https://api.tabletopsimulator.com/object/#set-functions)
------------------------------

---@param color tts.ColorShape
---@return boolean
function Object.setColorTint(color) end

---@param parameters tts.Object.Custom.Options
function Object.setCustomObject(parameters) end

---@param description string
---@return true
function Object.setDescription(description) end

-- TODO setFogOfWarReveal

---@param notes string
function Object.setGMNotes(notes) end

--- Sets whether the object is locked/frozen in place.
---
---@param lock boolean
---@return true
function Object.setLock(lock) end

---@param name string
---@return true
function Object.setName(name) end

--- Smoothly sets the object's rotation to the rotation corresponding with the provided rotation value identifier.
---
--- Must be a string/number corresponding with an existing rotation value identifier.
---
---@param value number | string
---@return true
---@see tts.Object#getRotationValues
function Object.setRotationValue(value) end

-- TODO setRotationValues

---@param state number
---@return tts.Object
function Object.setState(state) end

---@param newValue integer | string
---@return boolean
function Object.setValue(newValue) end

------------------------------
---------- Action Functions (https://api.tabletopsimulator.com/object/#action-function)
------------------------------

---@param object tts.Object
---@return boolean
function Object.addAttachment(object) end

---@param label string Text for the menu item.
---@param callback fun(playerColor: tts.PlayerColor.Hand): nil
---@param keepOpen? boolean Whether the context menu should remain open after the item is selected. Defaults to false.
---@return true # Technically, returns false if your `callback` param is nil. However, Luanalysis won't allow you to make that mistake.
function Object.addContextMenuItem(label, callback, keepOpen) end

-- TODO addPlayerToSelection

---@return true
function Object.clearContextMenu() end

---@class tts.Object.Clone.Options
---@field position? tts.VectorShape
---@field snap_to_grid? boolean

---@param parameters tts.Object.Clone.Options
---@return tts.Object
function Object.clone(parameters) end

-- TODO cut

--- If the object is a bag, deck or stack, deals an object from within to the specified player hand.
---
---@param count number
---@param destination? tts.PlayerColor.Hand | "All" | "Seated" Default "Seated"
---@param handIndex? number Default 1
---@param dealFromBottom? boolean Default false
---@return true
function Object.deal(count, destination, handIndex, dealFromBottom) end

-- TODO dealToColorWithOffset

--- Destroys an attachment with the given index.
---@param index number
---@return boolean
function Object.destroyAttachment(index) end

--- Destroys all attachments.
---@return boolean
function Object.destroyAttachments() end

--- Destroys the underlying Tabletop Simulator object.
---
---@return boolean
function Object.destruct() end

-- TODO drop

---@return boolean
function Object.flip() end

---@param color? tts.ColorShape | string
---@return true
function Object.highlightOff(color) end

---@param color tts.ColorShape | string
---@param duration? number
---@return true
function Object.highlightOn(color, duration) end

--- When called with arguments, creates a joint between this object and another object.
---
--- When called without any arguments, removes all joints on this object.
---
---@param object? tts.Object
---@param parameters? tts.Object.Joint.Options
---@return boolean
function Object.jointTo(object, parameters) end

-- TODO moveToHandStash

--- Combines 2 combinable objects to form a new container (Deck, Stat, etc)
---
---@param object tts.Object
---@param index? number
---@return self
function Object.putObject(object, index) end

--- Randomizes the object i.e. rolls a die, shuffles a deck, reorders a bag, or in the case of objects consisting of multiple states, randomly selects a state.
---@param playerColor? tts.PlayerColor
---@return boolean
function Object.randomize(playerColor) end

--- Registers this object for Global collision events, such as onObjectCollisionEnter. Always returns true.
---
---@param stay? boolean Default false. Whether we should register for onObjectCollisionStay. Stay events may negatively impact performance, only set this to true if absolutely necessary.
---@return true
function Object.registerCollisions(stay) end

---@return tts.Object
function Object.reload() end

---@param index number
---@return tts.Object
function Object.removeAttachment(index) end

function Object.removeAttachments() end

-- TODO removeFromPlayerSelection

-- TODO reset

-- TODO roll

---@return boolean
function Object.shuffle() end

-- TODO shuffleStates

-- TODO split

-- TODO spread

--- If this object is a deck or bag, takes on object out.
---
--- Although an object reference is returned, it will not have spawned within the scene and thus is generally not safe
--- to use until callback_function been called.
---
---@param params? tts.Object.TakeObject.Options
---@return nil | tts.Object
function Object.takeObject(params) end

--- Deregisters this object for Global collision events. Returns true if the object was previously registered, false otherwise.
---
---@return boolean
function Object.unregisterCollisions() end

------------------------------
---------- Component Functions (https://api.tabletopsimulator.com/object/#component-functions)
------------------------------
-- Those are all defined inside tts.GameObject

------------------------------
---------- Hide Functions (https://api.tabletopsimulator.com/object/#hide-functions)
------------------------------

-- TODO setHiddenFrom

---@param colors tts.PlayerColor[]
---@return boolean
function Object.setInvisibleTo(colors) end

-- TODO attachHider

-- TODO attachInvisibleHider

------------------------------
---------- Global Functions (https://api.tabletopsimulator.com/object/#global-function)
------------------------------

---@param decal tts.Object.Decal.Options.Add
function Object.addDecal(decal) end

---@param functionName string
---@param functionParameters? table | number | string | boolean
---@return any ...
function Object.call(functionName, functionParameters) end

--- Returns an array of decals, or nil if there are no decals on the object.
---
---@return nil | tts.Object.Decal[]
function Object.getDecals() end

-- TODO getLuaScript

--- Returns an array of snap points.
---@return tts.Object.SnapPoint[]
function Object.getSnapPoints() end

---@param name string Data value of a variable in another Object's script. Can only return a table.
---@return table
function Object.getTable(name) end

---@param name string
---@return any
function Object.getVar(name) end

--- Returns an array of vector lines.
---@return tts.Object.VectorLine[]
function Object.getVectorLines() end

--- Removes all existing decals, replacing them with a decal per entry in the provided decal parameters array.
---
--- Returns false if the provided decal parameters are invalid (e.g. blank string name or URL), otherwise true.
---
---@param decals tts.Object.Decal.Options.Add[]
---@return boolean
function Object.setDecals(decals) end

---@param script string
function Object.setLuaScript(script) end

--- Removes all existing snap points, replacing them with a snap point per entry in the provided snap point parameters array.
---@param snapPoints tts.Object.SnapPoint.Options[]
---@return true
---@see tts.Object#getSnapPoints
function Object.setSnapPoints(snapPoints) end

---@param name string Name of the table.
---@param tab table
function Object.setTable(name, tab) end

---@param name string
---@param value any
---@return true
function Object.setVar(name, value) end

--- Removes all existing vector lines, replacing them with a new vector line per entry in the provided vector line parameters array.
---@param lines tts.Object.VectorLine.Options[]
---@return true
---@see tts.Object#getVectorLines
function Object.setVectorLines(lines) end

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
---| "Mp3"
---| "Notecard"
---| "Randomize"
---| "rpgFigurine"
---| "Scripting"
---| "Stack"
---| "Tablet"
---| "Tile"
---| "Tileset"

---@alias tts.Object.MaterialType
---| 0 Plastic
---| 1 Wood
---| 2 Metal
---| 3 Cardboard
---| 4 Glass

---@class tts.Object.Decal
---@field name string
---@field url string
---@field position tts.Vector
---@field rotation tts.Vector
---@field scale tts.Vector

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

---@class tts.Object.SnapPoint
---@field position tts.Vector Position of the snap point. The position is relative to the object's center (a local position).
---@field rotation tts.Vector Rotation of the snap point. The rotation is relative to the object's rotation (a local rotation).
---@field rotation_snap boolean If the snap point is a "rotation" snap point.
---@field tags string[] The list of tags added to this snap point.

---@class tts.Object.VectorLine
---@field points tts.Vector[] An array of 2 or more points representing a series of line segments from one point to the next.
---@field color tts.Color The color of the line.
---@field rotation tts.Vector Rotation of vector line. The rotation is relative to the object's rotation (a local rotation).
---@field thickness number The thickness of the line.

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

---@class tts.Object.SnapPoint.Options
---@field position? tts.VectorShape Position of the snap point. The position is relative to the object's center (a local position). Default {0, 0, 0}
---@field rotation? tts.VectorShape Rotation of the snap point. The rotation is relative to the object's rotation (a local rotation). Default {0, 0, 0}
---@field rotation_snap? boolean If the snap point is a "rotation" snap point. Default false
---@field tags? string[] The list of tags for this snap point.

---@class tts.Object.Decal.Options.Add
---@field name string
---@field url string
---@field position? tts.VectorShape Default Vector(0, 0, 0)
---@field rotation? tts.VectorShape Default Vector(0, 0, 0)
---@field scale? tts.VectorShape Default Vector(1, 1, 1)

---@class tts.Object.VectorLine.Options
---@field points tts.VectorShape[] An array of 2 or more points representing a series of line segments from one point to the next.
---@field color? tts.ColorShape The color of the line. Default {1, 1, 1}
---@field rotation? tts.VectorShape Rotation of vector line. The rotation is relative to the object's rotation (a local rotation). Default {0, 0, 0}
---@field thickness? number The thickness of the line. Default 0.1

---@class tts.Object.Callback
---@field callback_function? tts.Object.Handler
---@field params? table Deprecated - use callback_function

---@alias tts.Object.Handler fun(object: tts.Object): nil

---@class tts.Object.Bounds
---@field center tts.Vector
---@field size tts.Vector
---@field offset tts.Vector

---@alias tts.Object.Joint.Options
---| tts.Object.Joint.Fixed.Options
---| tts.Object.Joint.Hinge.Options
---| tts.Object.Joint.Spring.Options

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

---@alias tts.Object.TakeObject.Options
---| tts.Object.TakeObject.Guid.Options
---| tts.Object.TakeObject.Index.Options

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

---@class tts.Object.Button : __tts.Object.Button
---@field index number

---@class (partial) tts.Object.Button.Options.Create : __tts.Object.Button
---@field click_function string

---@class (partial) tts.Object.Button.Options.Edit : __tts.Object.Button
---@field index number

---@class __tts.Object.Button
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

---@class tts.Object.Input : __tts.Object.Input
---@field index number

---@class (partial) tts.Object.Input.Options.Create : __tts.Object.Input
---@field input_function string

---@class (partial) tts.Object.Input.Options.Edit : __tts.Object.Input
---@field index number

---@class __tts.Object.Input
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
---@field value string | number A String of the text entered into the input.
---@field validation tts.Object.Input.Validation An Int which determines what characters can be input into the value.
---@field tab tts.Object.Input.Tab An Int which determines how pressing tab is handled when inputting.

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
