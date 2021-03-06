import React, { useState , useEffect  } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelves from './components/BooksShelves'
import Book from './components/Book';


const BooksApp = () => {

  const [books, setBooks] = useState([]);

  const [searchBooks , setSearchBooks] = useState([]); 
  
  const [showSearchPage, setShowSearchPage] = useState(false);

  const [query , setQuery] = useState("");

 
  // const initialBooksState = [
  //     {
  //       id: 1,
  //       url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
  //       title: "To Kill a Mockingbird",
  //       author: "Harper Lee",
  //       bookshelf: "currentlyReading",
  //     },
  //     {
  //       id: 2,
  //       url: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
  //       title: "Ender's Game",
  //       author: "Orson Scott Card",
  //       bookshelf: "currentlyReading",
  //     },
  //     {
  //       id: 3,
  //       url: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
  //       title: "1776",
  //       author: "David McCullough",
  //       shelf: "wantToRead",
  //     },
  //     {
  //       id: 4,
  //       url: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
  //       title: "Harry Potter and the Sorcerer's Stone",
  //       author: "J.K. Rowling",
  //       bookshelf: "wantToRead",
  //     },
  //     {
  //       id: 5,
  //       url: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
  //       title: "The Hobbit",
  //       author: "J.R.R. Tolkien",
  //       bookshelf: "read",
  //     },
  //     {
  //       id: 6,
  //       url: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
  //       title: "Oh, the Places You'll Go!",
  //       author: "Seuss",
  //       bookshelf: "read",
  //     },
  //     {
  //       id: 7,
  //       url: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
  //       title: "The Adventures of Tom Sawyer",
  //       author: "Mark Twain",
  //       bookshelf: "read",
  //     }
  //   ]       
    
  useEffect(() => {

     BooksAPI.getAll()
     .then(data => {
      //  console.log(data)
       setBooks(data)
     }
     );
  }, [] )

  useEffect(() => {
    // console.log("CALL API")
    let isActive = true;

    if(query){
      BooksAPI.search(query).then(data => {
        if(data.error) {
          console.log(data)
        } else {
          if(isActive){
            console.log(data)
            setSearchBooks(data);
          }
        }
        console.log(data)
    })
  }
   return() => {
     isActive = false;
     setSearchBooks([])
   }

  } , [query])


   
  const changeBookShelf = (book, movedTo) => {
    // console.log(book)
    // console.log(movedTo)

    const changeBookShelfState = books.map(pointer => {
      if (pointer.id === book.id) {
        book.shelf = movedTo;
        return book;
      }
      return pointer;
    })
    setBooks(changeBookShelfState);

    BooksAPI.update(book , movedTo).then();
    //data => console.log(data)
  }

  

    return (
     
      <div className="app">
        {showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => setShowSearchPage (false )}> Close </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={query} onChange={ (event) => setQuery(event.target.value)} />
                 {/* {console.log(query)} */}
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
                {/* {console.log(searchBooks)} */}
                {
                   searchBooks.map(pointer => (
                    <li key={pointer.id}>
                       <Book book={pointer} changeBookShelf={changeBookShelf} />
                    </li>
                  ))
                }
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BooksShelves books={books} changeBookShelf={changeBookShelf}/>
            </div>
            <div className="open-search">
              <button onClick={() => setShowSearchPage(true)}> Add a book </button>
            </div>
          </div>
        )}
      </div>
    )
  
}

export default BooksApp
