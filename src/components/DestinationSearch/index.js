import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchInputResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="search"
              className="search-input"
              onChange={this.onChange}
            />

            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon-image"
            />
          </div>
          <ul className="image-container">
            {searchInputResult.map(each => (
              <DestinationItem key={each.id} destinationsListDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
