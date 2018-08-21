import React, {Component} from 'react'
import ShelfSelector from './ShelfSelector'
import { Link } from 'react-router-dom'
import Books from './Books'

class SearchBar extends Component {




//handles search of books based on input in search bar
//handles display of search page if search bar is emptied
  handleSearch = (query) => {
    this.props.handleSearch(query)
  }

  componentWillUnmount() {
    this.props.handleSearch("")
  }

  render() {
    const { moveBookToShelf } = this.props


//displays search bar along with list of books matching query
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >
          </Link>
          <div className="search">
            <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.handleSearch(event.target.value)}
            />
            </div>
          </div>
          <div className="search-books-results">
          <Books
            books={this.props.books}
            moveBookToShelf={this.props.moveBookToShelf}
          />
       </div>
      </div>
    </div>
    )
  }
}

export default SearchBar
