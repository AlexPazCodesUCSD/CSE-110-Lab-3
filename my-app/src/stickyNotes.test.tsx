import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates 50 new notes properly", () => {
  render(<StickyNotes />);
  const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
  const createNoteContentTextarea =
    screen.getByPlaceholderText("Note Content");
  const createNoteButton = screen.getByText("Create Note");
  for (let x = 0; x < 50; x++){
    fireEvent.change(createNoteTitleInput, { target: { value: "New Note " + x } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Note content " + x }, });
    fireEvent.click(createNoteButton);
  }

  for (let x = 0; x < 50; x++){
    const newNoteTitle = screen.getByText("New Note " + x);
    const newNoteContent = screen.getByText("Note content " + x);
    expect(newNoteTitle).toBeInTheDocument();
    expect(newNoteContent).toBeInTheDocument();
  }
 });
});

describe("Update StickyNote", () => {
  test("UpdateS a sticky note", () => {
    render(<StickyNotes />);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Note content" }, });
    fireEvent.click(createNoteButton);

    const selectedNote = screen.getByText("New Note");
    fireEvent.blur(selectedNote, {target: {innerHTML: "Updated note!"}});
    expect(screen.getByText("Updated note!"));

  });
});

describe("Delete StickyNote", () => {
  test("deletes note properly", () => {
    render (<StickyNotes />);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    const deleteButton = screen.getByTestId("deleteButton1");

    fireEvent.click(deleteButton);


    expect(screen.queryByText("Note Title")).not.toBeInTheDocument();
  });
});

