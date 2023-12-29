// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {mylist, clickedSuggestion} = props
  const {suggestion} = mylist
  const mysugg = () => {
    clickedSuggestion(suggestion)
  }

  return (
    <li className="each_item_container">
      <p className="desc_search">{suggestion}</p>
      <img
        onClick={mysugg}
        className="arrow_icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
