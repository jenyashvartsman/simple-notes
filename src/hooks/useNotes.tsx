import { useState } from 'react';
import { initialNotes } from '../data/notes.data';
import type { NoteDto } from '../dtos/note.dto';

const useNotes = () => {
  // state
  const [notes, setNotes] = useState<NoteDto[]>(structuredClone(initialNotes));

  // delete note
  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  // add note
  const addNote = (note: string) => {
    const newNote: NoteDto = {
      id: crypto.randomUUID(),
      note: note,
      createdAt: new Date(),
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  return { notes, deleteNote, addNote };
};

export default useNotes;
