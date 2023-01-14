import { NoteData } from "../App";
import { NoteForm } from "./NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

export function NewNote({ onSubmit }: NewNoteProps) {
  return (
    <div className="flex flex-col justify-center items-center place-items-center h-screen">
      <h2 className="mb-4 text-3xl">New Note</h2>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
}
