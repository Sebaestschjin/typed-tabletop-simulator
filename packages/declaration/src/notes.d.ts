/**
 * @module Notes
 */

/**
 * `Notes`, a static global class, allows access to the on-screen notes and the notebook.
 *
 * @noSelf
 */
declare class NotesStatic {
    /**
     * Returns Table containing data on all tabs in the notebook.
     */
    getNotebookTabs(): NotebookTab[];

    /**
     * Add a new notebook tab.
     *
     * If it failed to create a new tab, a -1 is returned instead.
     * Indexes for notebook tabs begin at 0
     *
     * @param notebook The information about the notebook to add.
     */
    addNotebookTab(notebook: AddNotebookTabParameter): int;

    /**
     * Edit an existing Tab in the notebook.
     *
     * Indexes for notebook tabs begin at 0.
     *
     * @param notebook The notebook to edit.
     */
    editNotebookTab(notebook: EditNotebookTabParameter): boolean;

    /**
     * Remove a notebook tab.
     *
     * Notebook tab indexes begin at 0.
     *
     * @param index Index for the notebook to remove.
     */
    removeNotebookTab(index: int): boolean;

    /**
     * Returns the contents of the on-screen notes section.
     */
    getNotes(): string;

    /**
     * Replace the text in the notes window with the string.
     *
     * @param notes The new notes.
     */
    setNotes(notes: string): void;
}

declare interface NotebookTab {
    /** Index of the tab. Indexes for notebook tabs begin at 0. */
    index: int;
    /** Title of the tab. */
    title: string;
    /** Text in the body of the tab. */
    body: string;
    /** Player Color associated with the tab. */
    color: PlayerColor;
}

/** Parameters for the [[Notes.addNotebookTab()]] function. */
type AddNotebookTabParameter = Omit<AllOptionalExpect<NotebookTab, "title">, "index">;
/** Parameters for the [[Notes.editNotebookTab()]] function. */
type EditNotebookTabParameter = AllOptionalExpect<NotebookTab, "index">;

declare const Notes: NotesStatic;
