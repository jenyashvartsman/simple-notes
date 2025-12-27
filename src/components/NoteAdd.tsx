import { useState } from 'react';
import './NoteAdd.css';

interface NoteAddProps {
  onAddNoteClick: (note: string) => void;
}

const NoteAdd = ({ onAddNoteClick }: NoteAddProps) => {
  const [note, setNote] = useState('');

  return (
    <div className="add">
      <textarea
        className="add__textarea"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your note here..."
      />
      <button
        className="add__button"
        onClick={() => {
          onAddNoteClick(note);
          setNote('');
        }}
        disabled={note.trim() === ''}
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteAdd;
