/**
 * Some objects provide additional behavior.
 *
 * This functionality is accessible as Object member variables, but will be `nil` unless the Object includes the behavior.
 *
 * @module ObjectBehavior
 */

/**
 * The AssetBundle behavior is present on Objects that were created from a custom AssetBundle.
 *
 * @noSelf
 */
declare interface AssetBundleBehavior {
  /**
   * @returns Index of the currently looping effect.
   *          Indexes starts at 0.
   */
  getLoopingEffectIndex(): int;

  /**
   * @returns The list of looping effects.
   */
  getLoopingEffects(): AssetBundleEffect[];

  /**
   * @returns The list of trigger effects.
   */
  getTriggerEffects(): AssetBundleEffect[];

  /**
   * Starts playing a looping effect.
   *
   * Indexes starts at 0.
   *
   * @param index The index of the looping effect.
   */
  playLoopingEffect(index: int): void;

  /**
   * Starts playing a trigger effect. Indexes starts at 0.
   *
   * @param index The index of the looping effect.
   */
  playTriggerEffect(index: int): void;
}

/**
 * The Book behavior is present on Custom PDF Objects.
 *
 * The Book behaviour allows you to manipulate the displayed PDF.
 *
 * @noSelf
 */
declare interface BookBehavior {
  /**
   * The page numbers displayed in the Custom PDF UI are offset by this amount.
   */
  page_offset: int;

  /**
   * Clears the current highlight.
   */
  clearHighlight(): boolean;

  /**
   * Gets the current page of the PDF.
   *
   * @param offsetPageNumbering Indicates whether or not [[page_offset]] should be applied to the page number returned.
   *                            Defaults to `false`.
   */
  getPage(offsetPageNumbering?: boolean): int;

  /**
   * Draws a highlight rectangle on the popout mode of the PDF at the given coordinates.
   *
   * Coordinates (0,0) are the lower left corner of the PDF, while coordinates (1,1) are the upper right corner.
   *
   * @param x1 x coordinate of the rectangle's left side.
   * @param y1 y coordinate of the rectangle's bottom side.
   * @param x2 x coordinate of the rectangle's right side.
   * @param y2 y coordinate of the rectangle's top side.
   *
   * @example Highlight the upper right quarter of a PDF.
   *
   * ```lua
   * object.Book.setHighlight(0.5, 0.5, 1, 1)
   * ```
   */
  setHighlight(x1: float, y1: float, x2: float, y2: float): boolean;

  /**
   * Sets the current page of the PDF.
   *
   * Returns `true` if the page was succesfully set, `false` if the page number was invalid.
   *
   * @param page The new page number.
   * @param offsetPageNumbering Indicates whether or not [[page_offset]] should be applied to the page number set.
   *                            Defaults to `false`.
   */
  setPage(page: int, offsetPageNumbering?: boolean): boolean;
}

/**
 * The Browser behavior is present on the Tablet Object.
 *
 * @noSelf
 */
declare interface BrowserBehavior {
  /**
   * URL which currently wants to display.
   */
  url: string;

  /**
   * The pixel width the browser is virtually rendering to.
   */
  pixel_width: int;
}

/**
 * The Clock behavior is present on the Digital Clock object.
 *
 * @noSelf
 */
declare interface ClockBehavior {
  /**
   * If the clock timer is paused.
   */
  paused: boolean;

  /**
   * Current time in stopwatch or timer mode.
   *
   * Clock mode returns 0.
   * This function acts the same as [[TTSObject.getValue()]].
   */
  getValue(): int;

  /**
   * Pauses/resumes a Clock in stopwatch or timer mode.
   */
  pauseStart(): boolean;

  /**
   * Switches clock to timer and sets countdown time.
   *
   * This function acts the same as [[TTSObject.setValue()]].
   *
   * If the Clock is not in timer mode, it will be switched.
   * If it is in timer mode, it will be paused and the remaining time will be changed.
   * This will not start the countdown on its own.
   *
   * @param value How many seconds will be counted down.
   */
  setValue(value: int): boolean;

  /**
   * Switches clock to display current time.
   *
   * It will clear any stopwatch or timer.
   */
  showCurrentTime(): boolean;

  /**
   * Switches clock to stopwatch, setting time to 0.
   *
   * It will reset time if already in stopwatch mode.
   */
  startStopwatch(): boolean;
}

/**
 * The Container behavior is present on decks and bags.
 *
 * @noSelf
 */
declare interface ContainerBehavior {
  /**
   * Opens the search window of the container for the given player color.
   */
  Search(playerColor: PlayerColor): void;
}

/**
 * The Counter behavior is present on the Counter object.
 *
 * @noSelf
 */
declare interface CounterBehavior {
  /**
   * Resets Counter to 0.
   */
  clear(): boolean;

  /**
   * Reduces Counter's value by 1.
   */
  decrement(): boolean;

  /**
   * Returns Counter's current value.
   *
   * This function behaves the same as [[TTSObject.getValue()]].
   */
  getValue(): int;

  /**
   * Increases Counter's value by 1.
   */
  increment(): boolean;

  /**
   * Sets the current value of the Counter.
   *
   * This function behaves the same as [[TTSObject.setValue()]].
   *
   * @param value The new value.
   */
  setValue(value: int): boolean;
}

/**
 * The LayoutZone behavior is present on Layout Zones.
 *
 * @noSelf
 */
declare interface LayoutZoneBehavior {
  /**
   * Returns the layout zones options.
   */
  getOptions(): LayoutZoneOptions;

  /**
   * Causes the layout zone to (re)layout.
   */
  layout(): boolean;

  /**
   * Sets the layout zone's options.
   *
   * If an option is not included in the table, then the zone's value for that option will remain unchanged.
   *
   * @param options The updated options.
   */
  setOptions(options: Partial<LayoutZoneOptions>): boolean;
}

/**
 * The RPGFigurine behavior is present on Objects that are figurines with built-in animations i.e. RPG Kit objects.
 *
 * @noSelf
 */
declare interface RPGFigurineBehavior {
  /**
   * Plays a random attack animation.
   */
  attack(): boolean;

  /**
   * Changes the figurine's current mode.
   *
   * What the mode represents is based on the figurine.
   */
  changeMode(): boolean;

  /**
   * Plays the death animation or causes it to return to life.
   */
  die(): boolean;

  /**
   * Executed when an attack is performed by the RPGFigurine Object.
   *
   * An attack is triggered via the context menu or by pressing the appropriate number key.
   * If another RPGFigurine is within its attack arc, then onHit will be executed on the other figurine.
   *
   * @param hitObjects A list of RPGFigurine Objects within the reach of the attack.
   *
   * @example
   * Assign an onAttack callback that prints the name of each object attacked.
   *
   * ```lua
   * function object.RPGFigurine.onAttack(hitObjects)
   *     for _, v in ipairs(hitObjects) do
   *         print(v.getName() .. " was hit!")
   *     end
   * end
   * ```
   */
  onAttack?: (hitObjects: TTSRPGFigurine[]) => unknown;

  /**
   * Executed when the RPGFigurine Object is hit by another attacking RPGFigure Object.
   *
   * An attack is triggered via the context menu or by pressing the appropriate number key.
   * If this RPGFigurine Object is within the attack radius of an attacker, this function will be executed.
   *
   * @param attacker The RPGFigurine Object performing the attack.
   *
   * @example
   * Assign an onHit callback that prints the name of the object that performed the attack.
   *
   * ```lua
   * function object.RPGFigurine.onHit(attacker)
   *     print(attacker.getName() .. " attacked the Cyclops!")
   * end
   * ```
   */
  onHit?: (attacker: TTSRPGFigurine) => unknown;
}

/**
 * The TextTool behavior is present on 3DText objects i.e those created with the text tool.
 *
 * @noSelf
 */
declare interface TextBehavior {
  /**
   * Returns Table of font Color.
   */
  getFontColor(): Color;

  /**
   * Returns Int of the font size.
   */
  getFontSize(): int;

  /**
   * Returns the current text.
   *
   * Behaves the same as [[TTSObject.getValue()]].
   */
  getValue(): string;

  /**
   * Sets font Color.
   *
   * @param color The new color.
   */
  setFontColor(color: ColorValue): boolean;

  /**
   * Sets font size.
   *
   * @param fontSize The new font size.
   */
  setFontSize(fontSize: int): boolean;

  /**
   * Sets the current text.
   *
   * Behaves the same as [[TTSObject.setValue()]].
   *
   * @param text The new text.
   */
  setValue(text: string): boolean;
}

/**
 * Information about a looping or trigger effect of an asset bundle.
 */
declare interface AssetBundleEffect {
  /** Index in the asset bundle. */
  index: int;

  /** Name of the effect. */
  name: string;
}

/**
 * Options for the [[LayoutZoneBehavior]].
 */
declare interface LayoutZoneOptions {
  /**
   * When moving an object from one full group to another, the object you drop on will be moved to the original group.
   */
  allow_swapping: boolean;

  /**
   * Objects added to a group will be aligned up or right, different from the preceding object in the group.
   *
   * Used, for example, in trick-taking games to make counting easier.
   */
  alternate_direction: boolean;

  /**
   * Sets the size of decks made by the layout zone when it combines newly added cards.
   */
  cards_per_deck: int;

  /**
   * Whether cards added to the zone should be combined into decks.
   *
   * You may specify the number of cards per deck.
   */
  combine_into_decks: boolean;

  /**
   * The directions the groups in the zone expand into.
   *
   * This will determine the origin corner.
   */
  direction: LayoutZoneDirection;

  /**
   * How much horizontal space is inserted between groups.
   */
  horizontal_group_padding: float;

  /**
   * How far each object in a group is moved horizontally from the previous object.
   */
  horizontal_spread: float;

  /**
   * When enabled, if ever a group is picked up or removed the rest of the layout will trigger to fill in the gap.
   */
  instant_refill: boolean;

  /**
   * The zone will not automatically lay out objects: it must be triggered manually.
   */
  manual_only: boolean;

  /**
   * Each group in the zone may not contain more than this number of objects.
   */
  max_objects_per_group: int;

  /**
   * When new objects are added to a zone, they will be gathered into groups of this many objects.
   */
  max_objects_per_new_group: int;

  /**
   * The direction the objects within a group will expand into.
   */
  meld_direction: int;

  /**
   * When enabled the sort order inside a group is reversed.
   */
  meld_reverse_sort: boolean;

  /**
   * How groups are sorted internally.
   */
  meld_sort: int;

  /**
   * When enabled all groups will be sorted when laid out, rather than only newly added groups.
   */
  meld_sort_existing: boolean;

  /**
   * Determines whether newly added objects are turned face-up or face-down.
   */
  new_object_facing: int;

  /**
   * Objects will be randomized whenever they are laid out.
   */
  randomize: boolean;

  /**
   * Decks added to the zone will be split into their individual cards.
   */
  split_added_decks: boolean;

  /**
   * When picked up, cards above the grabbed card will also be lifted.
   */
  sticky_cards: boolean;

  /**
   * Face-Down objects dropped on zone will be laid out.
   */
  trigger_for_face_down: boolean;

  /**
   * Face-Up objects dropped on zone will be laid out.
   */
  trigger_for_face_up: boolean;

  /**
   * Non-card objects dropped on zone will be laid out.
   */
  trigger_for_non_cards: boolean;

  /**
   * How much vertical space is inserted between groups.
   */
  vertical_group_padding: float;

  /**
   * How far each object in a group is moved vertically from the previous object.
   */
  vertical_spread: float;
}
