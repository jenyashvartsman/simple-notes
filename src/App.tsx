import { useMemo, useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import NotesSearch from './components/NotesSearch';
import useNotes from './hooks/useNotes';

function App() {
  // state & hooks
  const { notes, deleteNote } = useNotes();
  const [searchTerm, setSearchTerm] = useState('');

  // filtered notes
  const filteredNotes = useMemo(() => {
    return notes
      .filter((note) =>
        note.note.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }, [notes, searchTerm]);

  return (
    <div className="app">
      {/* header */}
      <header className="app__header">
        <div className="app__header-inner">
          <NotesSearch
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
          />
        </div>
      </header>

      {/* main */}
      <main className="app__main">
        <NotesList notes={filteredNotes} onDeleteNoteClick={deleteNote} />
      </main>

      {/* footer */}
      <footer className="app__footer">footer</footer>
    </div>
  );
}

export default App;
