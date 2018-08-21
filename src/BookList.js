import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfSelector from './ShelfSelector'
import { Link } from "react-router-dom"
import Books from './Books'

class BookList extends Component {
  static propTypes = {
  moveBookToShelf: PropTypes.func.isRequired
}

     render() {
       const { moveBookToShelf} = this.props
       //displays list of books based off of what Shelf
       //the books belong too
       return(
         <ol>
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div>
            <ol className='book-list'>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                  <Books
                    books={this.props.books.filter(book => book.shelf === "currentlyReading")}
                    moveBookToShelf={this.props.moveBookToShelf}
                  />
              </div>
            </ol>
          </div>
          <div>
            <ol className='book-list'>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                  <Books
                    books={this.props.books.filter(book => book.shelf === "wantToRead")}
                    moveBookToShelf={this.props.moveBookToShelf}
                  />
              </div>
            </ol>
         </div>
         <div>
          <ol className='book-list'>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <Books
                  books={this.props.books.filter(book => book.shelf === "read")}
                  moveBookToShelf={this.props.moveBookToShelf}
                />
            </div>
          </ol>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </ol>
    )
  }
}

export default BookList
