import React from 'react';
import BooksShelf from './BooksShelf';

const BooksShelves = ({books , changeBookShelf}) => {

    const currentlyReading = books.filter((pointer) => pointer.shelf === "currentlyReading");
    const  wantToRead= books.filter((pointer) => pointer.shelf === "wantToRead");
    const read = books.filter((pointer) => pointer.shelf === "read");

        return (
            <div>

               <BooksShelf title="Currently Reading" books={currentlyReading} changeBookShelf={changeBookShelf} /> 
               <BooksShelf title="Want to Read" books={wantToRead} changeBookShelf={changeBookShelf} /> 
               <BooksShelf title="Read" books={read} changeBookShelf={changeBookShelf} /> 

            </div>
        );
    
}
 
export default BooksShelves;