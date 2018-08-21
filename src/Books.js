import ShelfSelector from './ShelfSelector'
import React, {Component} from 'react'

class Books extends React.Component {


render() {
    return(
      <div className="bookshelf-books">
        <div className="books-grid">
        {this.props.books.map((book) => (
          <li key={book.id} className='contact-list-item'>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ height: 192, width: 128, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''})` }}></div>
                <div className="book-shelf-changer">
                  <ShelfSelector book={book} moveBookToShelf={this.props.moveBookToShelf}/>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors ? book.authors.join(' , ') : ''}</div>
            </div>
          </li>
        ))}
      </div>
    </div>
    )
  }
}

export default Books
