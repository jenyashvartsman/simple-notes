import './NotesList.css';
import type { NoteDto } from '../dtos/note.dto';

interface NotesListProps {
  notes: NoteDto[];
  onDeleteNoteClick: (id: string) => void;
}

const NotesList = ({ notes, onDeleteNoteClick }: NotesListProps) => {
  return (
    <div className="notes">
      {/* notes */}
      <div className="notes__grid">
        {notes.map((note) => (
          <div key={note.id} className="notes__card">
            <p className="notes__card-content">{note.note}</p>
            <p className="notes__card-date">
              Created on: {note.createdAt.toDateString()}
            </p>
            <div className="notes__card-actions">
              <button
                className="notes__card-delete"
                onClick={() => onDeleteNoteClick(note.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* empty */}
      {notes.length === 0 && (
        <div className="notes__empty">
          <p>No notes found.</p>
        </div>
      )}
    </div>
  );
};

export default NotesList;
