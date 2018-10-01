import * as types from 'Constants/ActionTypes'
import authors from './authors'
import tags from './tags'
import quotes from './quotes'

const initialState = {
  quotes: {},
  authors: {},
  tags: {}
}

const toggleSelected = (state = {}, action) => {
  return {
    ...state,
    [action.payload]: {
      ...state[action.payload],
      selected: !state[action.payload].selected
    }
  }
}

const entities = (state = initialState, action) => {
  switch(action.type) {
    case types.TOGGLE_AUTHOR:
      return {
        ...state,
        authors: toggleSelected(state.authors, action)
      }
    case types.TOGGLE_TAG:
      return {
        ...state,
        tags: toggleSelected(state.tags, action)
      }
    default:
      return {
        ...state,
        quotes: quotes(state.quotes, action),
        authors: authors(state.authors, action),
        tags: tags(state.tags, action)
      }
  }
}

export default entities
