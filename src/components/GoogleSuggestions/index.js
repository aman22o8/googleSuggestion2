// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {initialSearch: ''}

  myItem = event => this.setState({initialSearch: event.target.value})

  suggestionList = suggestion => {
    this.setState({initialSearch: suggestion})
  }

  render() {
    const {initialSearch} = this.state
    const {suggestionsList} = this.props
    const filteredSearch = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(initialSearch.toLowerCase()),
    )
    const finalFilter = suggestionsList.filter(
      each => each.suggestion === initialSearch,
    )

    console.log(initialSearch)
    console.log(finalFilter)
    return (
      <div className="main_container">
        <img
          className="image_google"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="card_container">
          <div className="search_box">
            <img
              className="search_icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
            />
            <input
              onChange={this.myItem}
              value={initialSearch}
              className="search_input"
              type="search"
              placeholder="Search Google"
            />
          </div>
          <ul className="list_container">
            {filteredSearch.map(each => (
              <SuggestionItem
                clickedSuggestion={this.suggestionList}
                key={each.id}
                mylist={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
