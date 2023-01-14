import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NewNote } from "./components/NewNote";
import Home from "./Home";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";
import { NoteLayout } from "./components/NoteLayout";
import { Note } from "./components/Note";
import { EditNote } from "./components/EditNote";

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
};

function App() {
  const [notes, setNotes] = useLocalStorage<Note[]>("NOTES", []);

  function onCreateNote(data: NoteData) {
    setNotes((prevNotes) => {
      return [...prevNotes, { ...data, id: uuidV4() }];
    });
  }

  function onDeleteNote(id: string) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }

  function onUpdateNote(id: string, { ...data }: NoteData) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data };
        } else {
          return note;
        }
      });
    });
  }

  return (
    <Routes>
      <Route path="/" element={<Home notes={notes} />} />
      <Route path="/new" element={<NewNote onSubmit={onCreateNote} />} />
      <Route path="/:id" element={<NoteLayout notes={notes} />}>
        <Route index element={<Note onDelete={onDeleteNote} />} />
        <Route path="edit" element={<EditNote onSubmit={onUpdateNote} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
