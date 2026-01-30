---@meta

---
--- The base type for a zone behavior. Doesn't do anything.
---
---@see tts__LayoutZoneBehaviour
---@class __tts__ZoneBaseBehaviour
local Zone = {}

--- NOT IMPLEMENTED
---@deprecated
---@return nil
function Zone.getObjects() end

---
--- The LayoutZone behavior is present on Layout Zones.
---
---@class tts__LayoutZoneBehaviour : __tts__ZoneBaseBehaviour
local LayoutZone = {}

---@class tts__LayoutZone_Options
---@field allow_swapping boolean When moving an object from one full group to another, the object you drop on will be moved to the original group.
---@field alternate_direction boolean Objects added to a group will be aligned up or right, different from the preceding object in the group. Used, for example, in trick-taking games to make counting easier.
---@field cards_per_deck integer Sets the size of decks made by the layout zone when it combines newly added cards.
---@field combine_into_decks boolean Whether cards added to the zone should be combined into decks. You may specify the number of cards per deck.
---@field direction tts__LayoutZone_Direction The directions the groups in the zone expand into. This will determine the origin corner.
---@field horizontal_group_padding number How much horizontal space is inserted between groups.
---@field horizontal_spread number How far each object in a group is moved horizontally from the previous object.
---@field instant_refill boolean When enabled, if ever a group is picked up or removed the rest of the layout will trigger to fill in the gap
---@field manual_only boolean The zone will not automatically lay out objects: it must be triggered manually.
---@field max_objects_per_group integer Each group in the zone may not contain more than this number of objects.
---@field max_objects_per_new_group integer When new objects are added to a zone, they will be gathered into groups of this many objects.
---@field meld_direction tts__LayoutZone_GroupDirection The direction the objects within a group will expand into.
---@field meld_reverse_sort boolean When enabled the sort order inside a group is reversed
---@field meld_sort tts__LayoutZone_GroupSort How groups are sorted internally.
---@field meld_sort_existing boolean When enabled all groups will be sorted when laid out, rather than only newly added groups.
---@field new_object_facing tts__LayoutZone_Facing Determines whether newly added objects are turned face-up or face-down.
---@field randomize boolean Objects will be randomized whenever they are laid out
---@field split_added_decks boolean Decks added to the zone will be split into their individual cards.
---@field sticky_cards boolean When picked up, cards above the grabbed card will also be lifted.
---@field trigger_for_face_down boolean Face-Down objects dropped on zone will be laid out.
---@field trigger_for_face_up boolean Face-Up objects dropped on zone will be laid out.
---@field trigger_for_non_cards boolean Non-card objects dropped on zone will be laid out
---@field vertical_group_padding number How much vertical space is inserted between groups.
---@field vertical_spread number How far each object in a group is moved vertically from the previous object.

---@class (partial) tts__LayoutZoneBehaviour_OptionsParameter: tts__LayoutZone_Options

---
--- Returns the layout zones options.
---
---@return tts__LayoutZone_Options
function LayoutZone.getOptions() end

---
--- Causes the layout zone to (re)layout.
---
---@return true
function LayoutZone.layout() end

---
---Sets the layout zone's options. If an option is not included in the table, then the zone's value for that option will remain unchanged.
---
---@param options tts__LayoutZoneBehaviour_OptionsParameter
---@return true
function LayoutZone.setOptions(options) end
