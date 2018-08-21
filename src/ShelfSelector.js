import React, {Component} from 'react'
import PropTypes from 'prop-types'



class ShelfSelector extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
  }
  state = {
    shelf: this.props.book.shelf
  }


//selected book will be moved to selected book shelf
  handleChange = (event) => {
    this.props.moveBookToShelf(this.props.book, event.target.value)
      this.setState({
        shelf: event.target.value
      })
  }


  render() {
    //book shelf dropdown box
    return(
      <div className="book-shelf-changer">
        <select
        value={this.state.shelf}
        onChange={(e) => this.handleChange(e)}>
          <option value="moveTo" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfSelector
