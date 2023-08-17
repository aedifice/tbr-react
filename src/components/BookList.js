import "./Book.css"
import Book from "./Book";
import { useState, useRef } from "react";

function BookList(props) {
    // save the list of books as a state to track
    const [books, setBooks] = useState(props.books);
    const [isDragging, setIsDragging] = useState(false);
    let bookListRef = useRef(null);

    function bookDragHandler() {
        setIsDragging(true);
    }

    function reorderHandler(bookNumber, yPosition) {
        // use the book list reference to get a list of its book children
        const childList = Array.from(bookListRef.current.children);
        setIsDragging(false);
        
        for (let i = 0; i < childList.length; i++) {
            // find the midpoint of each child element
            const childY = childList[i].offsetTop + (childList[i].offsetHeight / 2);

            if (yPosition < childY) {
                // don't bother changing if we're reordering a book onto its original position
                if (i !== (bookNumber - 1)) {
                    setBooks((prevBooks) => {
                        let newBookList = [...prevBooks];
            
                        // pull out book from its original position in the list and
                        // insert it into its new position
                        const bookToMove = newBookList.splice(bookNumber-1, 1)[0];
                        const insertIndex = newBookList.indexOf(prevBooks[i]);
                        newBookList.splice(insertIndex, 0, bookToMove);
            
                        return newBookList;
                    });
                }

                // return early once we've located the drop position
                return;
            }
        }

        // the drop position wasn't above any existing books' midpoints: it must have
        // been at the end instead
        setBooks((prevBooks) => {
            let newBookList = [...prevBooks];
            const bookToMove = newBookList.splice(bookNumber-1, 1)[0];
            newBookList.push(bookToMove);
    
            return newBookList;
        });
    }

    return (
        // also set the drag class if the user is currently in drag and drop mode
        <div className={`book-list ${isDragging ? "drag" : ""}`} ref={bookListRef}>
            {books.map((book, index) => 
                (<Book 
                    key={book.id}
                    position={index+1} 
                    book={book} 
                    onBookDrag={bookDragHandler}
                    onReorder={reorderHandler} 
                />)
            )}
        </div>
    );
}

export default BookList;