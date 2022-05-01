/**
 * @module ObjectCustom
 */

declare interface CustomObject {}

declare interface AssetBundleCustomObject extends CustomObject {
    /**
     * The path/URL for the AssetBundle.
     */
    assetbundle: URI;

    /**
     * The path/URL for the secondary AssetBundle property.
     */
    assetbundle_secondary?: URI;

    /**
     * An Int representing the Object's type.
     *
     * @defaultValue [[ModelType.Generic]]
     */
    type: ModelType;

    /**
     * An Int representing the Object's material.
     *
     * @defaultValue [[MaterialType.Plastic]]
     */
    material: MaterialType;
}

type AssetBundleCustomObjectCreate = AllOptionalExpect<AssetBundleCustomObject, "assetbundle">;

/**
 * A custom board.
 */
declare interface BoardCustomObject extends CustomObject {
    /**
     * The path/URL for the board.
     */
    image: URI;
}

/**
 * A custom card, which essentially is just a custom deck with one card.
 */
declare interface CardCustomObject extends CustomObject {
    /**
     * The card shape.
     *
     * @defaultValue [[CardType.RectangleRounded]]
     */
    type: CardType;

    /**
     * The path/URL of the face image.
     */
    face: URI;

    /**
     * The path/URL of the back image.
     */
    back: URI;

    /**
     * If the card is horizontal, instead of vertical.
     *
     * @defaultValue `false`
     */
    sideways: boolean;
}

type CardCustomObjectCreate = AllOptionalExpect<CardCustomObject, "face" | "back">;

/**
 * A custom deck.
 */
declare interface DeckCustomObject extends CustomObject {
    /**
     * The card shape.
     *
     * @defaultValue [[CardType.RectangleRounded]]
     */
    type: CardType;

    /**
     * The path/URL of the face cardsheet.
     */
    face: URI;

    /**
     * The path/URL of the back cardsheet or card back.
     */
    back: URI;

    /**
     * The number of columns on the cardsheet.
     *
     * @defaultValue 10
     */
    width: int;

    /**
     * The number of rows on the cardsheet.
     *
     * @defaultValue 7
     */
    height: int;

    /**
     * The number of cards on the cardsheet.
     *
     * @defaultValue 52
     */
    number: int;

    /**
     * Whether the cards are horizontal, instead of vertical.
     *
     * @defaultValue `false`
     */
    sideways: boolean;

    /**
     * If each card has a unique card back (via a cardsheet).
     *
     * @defaultValue `false`
     */
    unique_back: boolean;

    /**
     * Whether the card back should be used as the hidden image (instead of the last slot of the face image).
     *
     * @defaultValue `false`
     */
    back_is_hidden: boolean;
}

type DeckCustomObjectCreate = AllOptionalExpect<DeckCustomObject, "face" | "back">;

interface DieCustomObject extends CustomObject {
    /**
     * The path/URL for the custom die.
     */
    image: URI;

    /**
     * The type of die, which determines its number of sides.
     *
     * @defaultValue [[DieType.D6]]
     */
    type: DieType;
}

type DieCustomObjectCreate = AllOptionalExpect<DieCustomObject, "image">;

interface FigurineCustomObject extends CustomObject {
    /**
     * The path/URL for the custom figurine.
     */
    image: URI;

    /**
     * The path/URL for the custom figurine's back.
     */
    image_secondary?: URI;

    /**
     * Scaling applied to card.
     *
     * @defaultValue 1
     */
    image_scalar: float;
}

type FigurineCustomObjectCreate = AllOptionalExpect<FigurineCustomObject, "image">;

interface ModelCustomObject extends CustomObject {
    /**
     * The path/URL for the .obj mesh used on the custom model.
     */
    mesh: URI;

    /**
     * The path/URL for the diffuse image.
     */
    diffuse: URI;

    /**
     * The path/URL for the normals image.
     */
    normal?: URI;

    /**
     * The path/URL for the collider mesh.
     */
    collider?: URI;

    /**
     * Whether the object model is convex.
     *
     * @defaultValue `false`
     */
    convex: boolean;

    /**
     * An Int representing the Object's type.
     *
     * @defaultValue [[ModelType.Generic]]
     */
    type: ModelType;

    /**
     * An Int representing the Object's material.
     *
     * @defaultValue [[MaterialType.Plastic]]
     */
    material: MaterialType;

    /**
     * The specular intensity.
     *
     * @defaultValue 0.1
     */
    specular_intensity: float;

    /**
     * The specular Color.
     *
     * @defaultValue `{ r=1, g=1, b=1 }`
     */
    specular_color: ColorRGB;

    /**
     * The specular sharpness.
     *
     * @defaultValue 3
     */
    specular_sharpness: float;

    /**
     * The freshnel strength.
     *
     * @defaultValue 0.1
     */
    freshnel_strength: float;

    /**
     * Whether the Object casts shadows.
     *
     * @defaultValue true
     */
    cast_shadows: boolean;
}

type ModelCustomObjectCreate = AllOptionalExpect<ModelCustomObject, "mesh" | "diffuse">;

/**
 * A custom tile object.
 */
declare interface TileCustomObject extends CustomObject {
    /**
     * The path/URL for the custom tile image.
     */
    image: URI;

    /**
     * The path/URL for the bottom-side image.
     */
    image_bottom?: URI;

    /**
     * Determines the shape of the tile.
     *
     * @defaultValue [[TileType.Box]]
     */
    type: TileType;

    /**
     * How thick the tile is.
     *
     * @defaultValue 0.5
     */
    thickness: float;

    /**
     * Whether these tiles stack together into a pile.
     *
     * @defaultValue `false `
     */
    stackable: boolean;
}

type TileCustomObjectCreate = AllOptionalExpect<TileCustomObject, "image">;

/**
 * A custom token object.
 */
declare interface TokenCustomObject extends CustomObject {
    /**
     * The path/URL for the custom token image.
     */
    image: URI;

    /**
     * How thick the token is.
     *
     * @defaultValue 0.2
     */
    thickness: float;

    /**
     * How accurately the token shape will trace image edge (in pixels).
     *
     * @defaultValue 15
     */
    merge_distance: float;

    /**
     * Whether these tokens stack together into a pile.
     *
     * @defaultValue `false`
     */
    stackable: boolean;
}

type TokenCustomObjectCreate = AllOptionalExpect<TokenCustomObject, "image">;
