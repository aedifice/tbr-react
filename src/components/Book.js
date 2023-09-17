import './Book.css'

// use data from OpenLibrary to populate book objects
function Book(props) {
    const book = props.book;

    function dragStartHandler() {
        props.onBookDrag();
    }

    function dragEndHandler(event) {
        props.onReorder(props.position, event.clientY);
    }

    function deleteHandler() {
        props.onDelete(props.position);
    }

    return (
        <div className='book-item' 
            draggable 
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
        >
            <span className='position'>#{props.position}</span>
            <img className='cover-img'
                draggable='false'
                src={book.cover} 
                alt={book.title} 
            />
            <span>
                <span className='title'>{book.title}</span>
                <div className='description'>{book.description}</div>
            </span>
            <span className='delete-btn' onClick={deleteHandler}>X</span>
        </div>
    );
}

export default Book;