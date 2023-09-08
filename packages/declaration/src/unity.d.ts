/**
 * @module Unity
 */

/** @noSelf */
interface GameObject extends GameObjectFunctions {
  /** The name of the Component. */
  name: string;
}

interface GameObjectFunctions {
  /**
   * Returns a child GameObject matching the specified name.
   *
   * @param name The name of the child.
   *
   * @category Component
   */
  getChild(name: string): GameObject;

  /**
   * Returns the list of children GameObjects.
   *
   * @category Component
   */
  getChildren(): GameObject[];

  /**
   * Returns a Component matching the specified name from the GameObject's list of Components.
   *
   * @param name The name of the Component.
   *
   * @category Component
   */
  getComponent(name: string): Component;

  /**
   * Returns a Component matching the specified name.
   *
   * Found by searching the Components of the GameObject and its children recursively (depth first).
   *
   * @category Component
   */
  getComponentInChildren(name: string): Component;

  /**
   * Returns the GameObject's list of Components.
   *
   * name is optional, when specified only Components with specified name will be included.
   *
   * @category Component
   */
  getComponents(name: string): Component[];

  /**
   * Returns a list of Components found by searching the GameObject and its children recursively (depth first).
   *
   * name is optional, when specified only Components with specified name will be included.
   *
   * @category Component
   */
  getComponentsInChildren(name: string): Component[];
}

/**
 * Danger
 *
 * Component APIs are an advanced feature. An understanding of how Unity works is required to utilize them.
 *
 * @noSelf
 */
interface Component {
  /** The GameObject the Component composes. */
  game_object: GameObject;

  /** The name of the Component. */
  name: string;

  /** Obtains the value of a given Variable on a Component. */
  get(name: string): unknown;

  /** Returns a table mapping Var names (string) to their type, which is also represented as a string. */
  getVars(): { [key: string]: string };

  /** Sets the Var of the specified name to the provided value. */
  set(name: string, value: unknown): boolean;
}
