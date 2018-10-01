import { combineReducers } from 'redux'
import randomQuote from './RandomQuote/reducer'
import searchQuotes from './Search/reducer'
import favQuotes from './FavoriteQuotes/reducer/index.js'

export default combineReducers({
  randomQuote,
  searchQuotes,
  favQuotes,
})