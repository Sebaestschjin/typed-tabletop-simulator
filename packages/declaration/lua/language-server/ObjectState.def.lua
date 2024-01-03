---@class tts__ObjectState_Transform
---@field posX nil | number
---@field posY nil | number
---@field posZ nil | number
---@field rotX nil | number
---@field rotY nil | number
---@field rotZ nil | number
---@field scaleX nil | number
---@field scaleY nil | number
---@field scaleZ nil | number

--- RectangleRounded | Rectangle | HexRounded | Hex | Circle
---@alias tts__CardType 0 | 1 | 2 | 3 | 4

---@class tts__ObjectState_CustomDeck
---@field Type nil | tts__CardType
---@field FaceURL string
---@field BackURL nil | string
---@field NumWidth nil | number
---@field NumHeight nil | number
---@field BackIsHidden nil | boolean
---@field UniqueBack nil | boolean

--- D4 | D6 | D8 | D10 | D12 | D20
---@alias tts__DieType 0 | 1 | 2 | 3 | 4 | 5

---@class tts__ObjectState_CustomImage_CustomDie
---@field Type tts__DieType

---@class tts__ObjectState_CustomImage_CustomToken
---@field Thickness nil | number
---@field MergeDistancePixels nil | number
---@field Stackable nil | boolean

---@class tts__ObjectState_CustomImage_CustomJigsawPuzzle
---@field NumPuzzlePieces number
---@field ImageOnBoard nil | boolean

--- Box | Hex | Circle | Rounded
---@alias tts__TileType 0 | 1 | 2 | 3

---@class tts__ObjectState_CustomImage_CustomTile
---@field Type tts__TileType
---@field Thickness nil | number
---@field Stackable nil | boolean
---@field Stretch nil | boolean

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

---@class tts__ObjectState_DieCustomImage : tts__ObjectState_CustomImage
---@field CustomDice nil | tts__ObjectState_CustomImage_CustomDie

---@class tts__ObjectState_TokenCustomImage : tts__ObjectState_CustomImage
---@field CustomToken nil | tts__ObjectState_CustomImage_CustomToken

---@class tts__ObjectState_JigsawPuzzleCustomImage : tts__ObjectState_CustomImage
---@field CustomJigsawPuzzle nil | tts__ObjectState_CustomImage_CustomJigsawPuzzle

---@class tts__ObjectState_TileCustomImage : tts__ObjectState_CustomImage
---@field CustomTile nil | tts__ObjectState_CustomImage_CustomTile

---@class tts__ObjectState_RotationValue
---@field Value number | string
---@field Rotation tts__CharVectorShape

---@class tts__ObjectState
---@field Name string
---@field Transform nil | tts__ObjectState_Transform
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
---@field FogReverseHiding nil | boolean
---@field vector nil | tts__CharVectorShape
---@field AttachedDecals nil | tts__ObjectState_Decal[]
---@field AttachedSnapPoints nil | tts__ObjectState_SnapPoint[]
---@field States nil | table<number, tts__ObjectState>
---@field Tags nil | string[]
---@field ChildObjects nil | tts__ObjectState[]

---@class tts__ObjectState_Asset
---@field Type 0 | 1
---@field Name string
---@field URL string

---@class tts__ObjectState_Decal
---@field Transform tts__ObjectState_Transform
---@field CustomDecal tts__ObjectState_CustomDecal

---@class tts__ObjectState_SnapPoint
---@field Position tts__CharVectorShape
---@field Rotation tts__CharVectorShape
---@field Tags nil | string[]

---@class tts__ObjectState_CustomDecal
---@field Name string
---@field ImageURL string
---@field Size nil | number

---@class tts__ContainerState : tts__ObjectState
---@field ContainedObjects tts__ObjectState[]

---@class tts__BoardState : tts__ObjectState
---@field Name 'Custom_Board'
---@field CustomImage tts__ObjectState_BoardImage

---@class tts__CardState : tts__ObjectState
---@field Name 'Card'
---@field CardID number

---@class __tts__CardCustomBaseState : tts__ObjectState
---@field Name 'CardCustom'
---@field CardID number

---@class tts__CardCustomState : __tts__CardCustomBaseState
---@field CustomDeck table<number, tts__ObjectState_CustomDeck>

---@class tts__CardCustomJSONState : __tts__CardCustomBaseState
---@field CustomDeck table<string, tts__ObjectState_CustomDeck>

---@class tts__BagState : tts__ContainerState
---@field Name 'Bag'

---@class tts__DeckState : tts__ContainerState
---@field Name 'Deck'
---@field DeckIDs number[] @Despite the name, these are card IDs not deck IDs
---@field ContainedObjects tts__ObjectState[]

---@class __tts__DeckCustomBaseState : tts__ContainerState
---@field Name 'DeckCustom'
---@field DeckIDs number[] @Despite the name, these are card IDs not deck IDs
---@field ContainedObjects tts__ObjectState[]

---@class tts__DeckCustomState : __tts__DeckCustomBaseState
---@field CustomDeck table<number, tts__ObjectState_CustomDeck>

---@class tts__DeckCustomJSONState : __tts__DeckCustomBaseState
---@field CustomDeck table<string, tts__ObjectState_CustomDeck>

---@alias tts__StandardDieName 'Die_4' | 'Die_6' | 'Die_6_Rounded' | 'Die_8' | 'Die_10' | 'Die_12' | 'Die_20'

---@class tts__DieState : tts__ObjectState
---@field Name 'Custom_Dice' | tts__StandardDieName
---@field RotationValues nil | tts__ObjectState_RotationValue[]

---@class tts__DieCustomState : tts__DieState
---@field Name 'Custom_Dice'
---@field CustomImage tts__ObjectState_DieCustomImage

---@class tts__FigurineCustomState : tts__ObjectState
---@field Name 'Figurine_Custom'
---@field CustomImage tts__ObjectState_CustomImage

---@class tts__InfiniteBagState : tts__ContainerState
---@field Name 'Infinite_Bag'

---@class tts__ModelCustomState : tts__ObjectState
---@field CustomMesh tts__ObjectState_CustomMesh

---@class tts__TileState : tts__ObjectState
---@field Name 'Custom_Tile'
---@field CustomImage tts__ObjectState_TileCustomImage

---@class tts__TokenState : tts__ObjectState
---@field Name 'Custom_Token'
---@field CustomImage tts__ObjectState_TokenCustomImage

---@class tts__LayoutZoneState : tts__ObjectState
---@field Name 'LayoutZone'
---@field LayoutZone tts__LayoutZoneState_L

---@class tts__LayoutZoneState_L
---@field Options tts__LayoutZoneState_Options

--- Right/Down | Down/Right | Left/Down | Down/Left | Right/Up | Up/Right | Left/Up | Up/Left
---@alias tts__LayoutZone_Direction 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

---Do not Change | Face Up | Face Down | Group is Tipped
---@alias tts__LayoutZone_Facing 0 | 1 | 2 | 3

---Eastward | Westward | Northward | Southward
---@alias tts__LayoutZone_GroupDirection 0 | 1 | 2 | 3

--- None | Added Time | Value | Name | Description | GM Notes | Memo
---@alias tts__LayoutZone_GroupSort 0 | 1 | 2 | 3 | 4 | 5 | 6

---@class tts__LayoutZoneState_Options
---@field TriggerForFaceUp boolean
---@field TriggerForFaceDown boolean
---@field TriggerForNonCards boolean
---@field SplitAddedDecks boolean
---@field CombineIntoDecks boolean
---@field CardsPerDeck number
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
---@field MaxObjectsPerGroup number
---@field AlternateDirection boolean
---@field MaxObjectsPerNewGroup number
---@field AllowSwapping boolean
