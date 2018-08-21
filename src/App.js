import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBar from './SearchBar'
import {Route} from 'react-router-dom'



class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  componentDidMount() {
    this.acquireBooks()
  }

  acquireBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      })
    }

//Updates shelf with new booklist
  moveBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    });
  };

  handleSearch = (query, books) => {
    if (query < 1) {
      this.setState({
        searchResults: []
      })
    } else {
      BooksAPI.search(query).then((books) => {
        if(books.hasOwnProperty('error')) {
          console.log("no matches")
        } else {
          books.forEach((book, index) => {
            let myBook = this.state.books.find((b) => b.id === book.id)
            book.shelf = myBook ? myBook.shelf : 'none'
            books[index] = book
          })
            this.setState({searchResults: books})
        }
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
          <BookList
          books={this.state.books}
          moveBookToShelf={this.moveBookToShelf}
          />

        } />
          <Route path="/search" render={() =>
            <SearchBar
            books={this.state.searchResults}
            moveBookToShelf={this.moveBookToShelf}
            handleSearch={this.handleSearch}
            />
          }/>
      </div>
    )
  }
}

export default BooksApp
