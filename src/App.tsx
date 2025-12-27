import './App.css';
import NotesList from './components/NotesList';
import useNotes from './hooks/useNotes';

function App() {
  const { notes } = useNotes();
  return (
    <div className="app">
      <header className="app__header">header</header>

      <main className="app__main">
        <NotesList notes={notes} />
      </main>

      <footer className="app__footer">footer</footer>
    </div>
  );
}

export default App;
