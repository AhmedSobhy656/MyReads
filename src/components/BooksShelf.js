import React from 'react';
import Book from './Book';

const BooksShelf = ({title , books , changeBookShelf}) => {
        return (
            <div>

              <div className="bookshelf">
                  <h2 className="bookshelf-title"> {title} </h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(pointer => (
                          <li key={pointer.id}>
                             <Book book={pointer} changeBookShelf={changeBookShelf} />
                          </li>
                        ))}
                      
                    </ol>
                  </div>
              </div>

            </div>
        )
     
    
}
 
export default BooksShelf;