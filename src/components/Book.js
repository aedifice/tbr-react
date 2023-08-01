import './Book.css'

// eventually allow books to be dragged and dropped to reorder items in the list
function Book(props) {
    const book = props.book;

    return (
        <div className='book-item'>
            <span className='position'>#{props.position}</span>
            <img className='cover-img'
                src={book.cover} 
                alt={book.title} 
            />
            <span>
                <span className='title'>{book.title}</span>
                <div className='description'>{book.description}</div>
            </span>
        </div>
    );
}

export default Book;