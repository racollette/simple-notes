import { Link } from "react-router-dom";
import { Note } from "../App";

type NoteListProps = {
  notes: Note[];
};

export function NoteList({ notes }: NoteListProps) {
  return (
    <div className="p-2">
      {notes.map((note) => (
        <Link to={`/${note.id}`}>
          <div className="m-2 p-6 bg-zinc-700 rounded-xl">
            <div className="font-black text-xl mb-2">{note.title}</div>
            <div>{note.markdown}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
