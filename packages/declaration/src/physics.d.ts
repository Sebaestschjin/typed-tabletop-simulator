/**
 * @module Physics
 */

/**
 * Physics, a static global class, allows access to casts and gravity.
 *
 * Physics casts are a way to detect Objects.
 * You call these functions like this: Physics.getGravity().
 * This class also allows you to access elements of the environment.
 *
 * For more information on physics casts in Unity, refer to the Unity documentation under BoxCast/RayCast/SphereCast.
 *
 * @noSelf
 */
declare interface PhysicsStatic {
    /**
     * The play area being used (ie. how far from middle you can get).
     *
     * Values from 0 - 1. Default is 0.5
     */
    play_area: float;

    /**
     * Returns an array (of up to 1000) intersections.
     *
     * It draws the imaginary cast, then moves the rap/box/sphere along that path instantly.
     * The debug Bool in the parameters allows you to see this shape, to aid in setup, but the visual is not instant (due to that making it pointless, if you can't see it).
     */
    cast(params: Cast): CastResult;

    /**
     * Returns a Vector representing the direction and magnitude of gravity.
     */
    getGravity(): Vector;

    /**
     * Sets the direction gravity pulls.
     *
     * @param direction The new direction.
     */
    setGravity(direction: VectorShape): boolean;
}

/** The type of a cast. */
declare const enum CastType {
    Ray = 1,
    Sphere = 2,
    Box = 3,
}

declare type Cast = RayCast | SphereCast | BoxCast;

interface CastParameters {
    type: CastType;

    /**
     * Position of the starting point.
     *
     * @defaultValue {0,0,0}
     */
    origin?: VectorShape;

    /**
     * A direction for the cast to move in.
     */
    direction?: VectorShape;

    /**
     * How far the cast will travel.
     *
     * @defalutValue Infinity
     */
    max_distance?: float;

    /**
     * If the cast is visualized for the user.
     *
     * @defaultValue false
     */
    debug?: boolean;
}

interface RayCast extends CastParameters {
    type: CastType.Ray;
}

interface SphereCast extends CastParameters {
    type: CastType.Sphere;

    /**
     * size.x specifies the diameter of the sphere.
     *
     * @defaultValue {0,0,0}
     */
    size?: VectorShape;
}

interface BoxCast extends CastParameters {
    type: CastType.Box;

    /**
     * Size of the box.
     *
     * @defaultValue {0,0,0}
     */
    size?: VectorShape;

    /**
     * Euler angles (in degrees) specifying the rotation of the box.
     *
     * @defaultValue {0,0,0}
     */
    orientation?: VectorShape;
}

declare interface CastResult {
    /** Position the cast impacted the Object. */
    point: Vector;

    /** The surface normal of the impact point. */
    normal: Vector;

    /** Distance between cast origin and impact point. */
    distance: float;

    /** An Object reference to the Object hit by the cast. */
    hit_object: TTSObject;
}

declare const Physics: PhysicsStatic;
