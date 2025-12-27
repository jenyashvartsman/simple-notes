import './NotesSearch.css';

interface NotesSearchProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

const NotesSearch = ({ searchTerm, onSearchTermChange }: NotesSearchProps) => {
  return (
    <div className="search">
      {/* search input  */}
      <input
        type="text"
        className="search__input"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  );
};

export default NotesSearch;
