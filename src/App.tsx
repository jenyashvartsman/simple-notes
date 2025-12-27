import { useMemo, useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import NotesSearch from './components/NotesSearch';
import useNotes from './hooks/useNotes';

function App() {
  const { notes } = useNotes();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = useMemo(
    () =>
      notes.filter((note) =>
        note.note.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [notes, searchTerm]
  );

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-inner">
          <NotesSearch
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
          />
        </div>
      </header>

      <main className="app__main">
        <NotesList notes={filteredNotes} />
      </main>

      <footer className="app__footer">footer</footer>
    </div>
  );
}

export default App;
