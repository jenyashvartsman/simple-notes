import { useState } from 'react';
import { initialNotes } from '../data/notes.data';
import type { NoteDto } from '../dtos/note.dto';

const useNotes = () => {
  const [notes] = useState<NoteDto[]>(structuredClone(initialNotes));

  return { notes };
};

export default useNotes;
