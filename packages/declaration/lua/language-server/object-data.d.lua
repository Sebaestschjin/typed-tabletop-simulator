---@meta

---@alias tts.Object.Data.Vector tts.CharVectorShape

---@class tts.Object.Data.Transform
---@field posX nil | number
---@field posY nil | number
---@field posZ nil | number
---@field rotX nil | number
---@field rotY nil | number
---@field rotZ nil | number
---@field scaleX nil | number
---@field scaleY nil | number
---@field scaleZ nil | number

---@class tts__ObjectState_CustomImage_CustomToken
---@field Thickness nil | number
---@field MergeDistancePixels nil | number
---@field Stackable nil | boolean

---@class tts__ObjectState_CustomImage_CustomJigsawPuzzle
---@field NumPuzzlePieces number
---@field ImageOnBoard nil | boolean

---@class tts__ObjectState_CustomImage
---@field ImageURL string
---@field ImageSecondaryURL nil | string
---@field ImageScale nil | number
---@field WidthScale nil | number

---@class tts__ObjectState_CustomMesh_CustomShader
---@field SpecularColor nil | tts__ColorShape @Default {0.9, 0.9, 0.9}
---@field SpecularIntensity nil | number @Default 0.1
---@field SpecularSharpness nil | number @Default 3
---@field FresnelStrength nil | number @Default 0.1

---@class tts__ObjectState_CustomMesh
---@field MeshURL string
---@field DiffuseURL nil | string
---@field ColliderURL nil | string
---@field NormalURL nil | string
---@field Convex nil | boolean @Default true
---@field MaterialIndex nil | tts__MaterialType
---@field TypeIndex nil | tts__ModelType
---@field CustomShader nil | tts__ObjectState_CustomMesh_CustomShader
---@field CastShadows nil | boolean @Default true

---@alias tts__ObjectState_BoardImage tts__ObjectState_CustomImage

---@class tts__ObjectState_TokenCustomImage : tts__ObjectState_CustomImage
---@field CustomToken nil | tts__ObjectState_CustomImage_CustomToken

---@class tts__ObjectState_JigsawPuzzleCustomImage : tts__ObjectState_CustomImage
---@field CustomJigsawPuzzle nil | tts__ObjectState_CustomImage_CustomJigsawPuzzle

---@class tts.Object.Data
---@field Name string
---@field Transform nil | tts.Object.Data.Transform
---@field Nickname nil | string @Default ""
---@field Description nil | string @Default ""
---@field GMNotes nil | string @Default ""
---@field Memo nil | string @Default nil
---@field GUID nil | string
---@field LuaScript nil | string @Default ""
---@field LuaScriptState nil | string @Default ""
---@field XmlUI nil | string @Default ""
---@field CustomUIAssets nil | tts__ObjectState_Asset[]
---@field Grid nil | boolean @Default true
---@field Snap nil | boolean @Default true
---@field DragSelectable nil | boolean @Default true
---@field Autoraise nil | boolean @Default true
---@field Sticky nil | boolean @Default true
---@field Tooltip nil | boolean @Default true
---@field Locked nil | boolean @Default false
---@field IgnoreFoW nil | boolean @Default false
---@field GridProjection nil | boolean @Default false
---@field MeasureMovement nil | boolean
---@field HideWhenFaceDown nil | boolean
---@field Hands nil | boolean
---@field AltSound nil | boolean
---@field DeckIDs nil | number[] @Despite the name, these are card IDs not deck IDs
---@field CardID nil | number
---@field ColorDiffuse nil | tts__CharColorShape
---@field MaterialIndex nil | number
---@field MeshIndex nil | number
---@field Number nil | number
---@field SidewaysCard nil | boolean
---@field RPGmode nil | boolean
---@field RPGdead nil | boolean
---@field FogColor nil | string
---@field FogHidePointers nil | boolean
---@field FogReverseHiding nil | boolean
---@field FogSeethrough nil | boolean
---@field vector nil | tts__CharVectorShape
---@field AttachedDecals nil | tts__ObjectState_Decal[]
---@field AttachedSnapPoints nil | tts__ObjectState_SnapPoint[]
---@field States nil | table<number, tts.Object.Data>
---@field Tags nil | string[]
---@field ChildObjects nil | tts.Object.Data[]

---@class tts__ObjectState_Asset
---@field Type 0 | 1
---@field Name string
---@field URL string

---@class tts__ObjectState_Decal
---@field Transform tts.Object.Data.Transform
---@field CustomDecal tts__ObjectState_CustomDecal

---@class tts__ObjectState_SnapPoint
---@field Position tts__CharVectorShape
---@field Rotation tts__CharVectorShape
---@field Tags nil | string[]

---@class tts__ObjectState_CustomDecal
---@field Name string
---@field ImageURL string
---@field Size nil | number

---@class tts.Container.Data : tts.Object.Data
---@field ContainedObjects tts.Object.Data[]

---@class tts__BoardState : tts.Object.Data
---@field Name 'Custom_Board'
---@field CustomImage tts__ObjectState_BoardImage

---@class __tts__CardCustomBaseState : tts.Object.Data
---@field Name 'Card' | 'CardCustom'
---@field CardID number

---@class tts__BagState : tts.Container.Data
---@field Name 'Bag'

---@class tts__FigurineCustomState : tts.Object.Data
---@field Name 'Figurine_Custom'
---@field CustomImage tts__ObjectState_CustomImage

---@class tts__InfiniteBagState : tts.Container.Data
---@field Name 'Infinite_Bag'

---@class tts__ModelCustomState : tts.Object.Data
---@field CustomMesh tts__ObjectState_CustomMesh

---@class tts__TokenState : tts.Object.Data
---@field Name 'Custom_Token'
---@field CustomImage tts__ObjectState_TokenCustomImage

---@class tts__LayoutZoneState : tts.Object.Data
---@field Name 'LayoutZone'
---@field LayoutZone tts__LayoutZoneState_L

---@class tts__LayoutZoneState_L
---@field Options tts__LayoutZoneState_Options
---@field GroupsInZone? string[][]

---@alias tts__LayoutZone_Direction
---| 0 Right/Down
---| 1 Down/Right
---| 2 Left/Down
---| 3 Down/Left
---| 4 Right/Up
---| 5 Up/Right
---| 6 Left/Up
---| 7 Up/Left

---@alias tts__LayoutZone_Facing
---| 0 Do not Change
---| 1 Face Up
---| 2 Face Down
---| 3 Group is Tipped

---@alias tts__LayoutZone_GroupDirection
---| 0 Eastward
---| 1 Westward
---| 2 Northward
---| 3 Southward

---@alias tts__LayoutZone_GroupSort
---| 0 None
---| 1 Added Time
---| 2 Value
---| 3 Name
---| 4 Description
---| 5 GM Notes
---| 6 Memo

---@class tts__LayoutZoneState_Options
---@field TriggerForFaceUp boolean
---@field TriggerForFaceDown boolean
---@field TriggerForNonCards boolean
---@field SplitAddedDecks boolean
---@field CombineIntoDecks boolean
---@field CardsPerDeck integer
---@field Direction tts__LayoutZone_Direction
---@field NewObjectFacing tts__LayoutZone_Facing
---@field HorizontalGroupPadding number
---@field VerticalGroupPadding number
---@field StickyCards boolean
---@field InstantRefill boolean
---@field Randomize boolean
---@field ManualOnly boolean
---@field MeldDirection tts__LayoutZone_GroupDirection
---@field MeldSort tts__LayoutZone_GroupSort
---@field MeldReverseSort boolean
---@field MeldSortExisting boolean
---@field HorizonalSpread number
---@field VerticalSpread number
---@field MaxObjectsPerGroup integer
---@field AlternateDirection boolean
---@field MaxObjectsPerNewGroup integer
---@field AllowSwapping boolean
