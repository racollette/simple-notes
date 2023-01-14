import { NoteData } from "../App";
import { NoteForm } from "./NoteForm";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
};

export function EditNote({ onSubmit }: EditNoteProps) {
  const note = useNote();
  return (
    <>
      <h1 className="text-2xl font-black mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        onSubmit={(data) => onSubmit(note.id, data)}
      />
    </>
  );
}
