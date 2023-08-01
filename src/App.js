import './App.css';

// eventually move JSON data to testing resources and retrieve book info via backend
import books from './resources/data'
import BookList from './components/BookList';

function App() {
  return (
    <div>
      <header className='app-header'>
        Reading List
      </header>
      <BookList books={books.elements} />
    </div>
  );
}

export default App;
