import React from 'react';
import Book from './Book';

function RenderingLists() {
    const bookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'triple zero'
    ]

    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'harper lee',
            pages: 281,
        },
        {
            title: 'the great gatsby',
            author: 'f. scott fitzgerald',
            pages: 218,
        },
        {
            title: 'triple zero',
            author: 'karen traviss',
            pages: 324,
        },
    ]

  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
            books.map(book => {
                return <Book key={book.title} book={book} />
            })
        }
        
    </div>
  )
}

export default RenderingLists