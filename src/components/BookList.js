import "./Book.css"
import Book from "./Book";

function BookList(props) {
    return (
        <div className="book-list">
            {props.books.map((book, index) => 
                <Book position={index+1} book={book} />
            )}
        </div>
    );
}

export default BookList;