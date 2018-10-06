import * as types from 'Constants/ActionTypes'

const authors = (state = {}, action) => {
  switch(action.type) {
    case types.ADD_TO_FAVORITE:
      const newData = action.payload
      return {
        ...state,
        [newData.author_permalink]: {
          id: newData.author_permalink,
          name: newData.author,
          quotes: [...(state[newData.author_permalink] ? state[newData.author_permalink].quotes : []), newData.id],
          selected: state[newData.author_permalink] ? state[newData.author_permalink].selected : false
        }
      }
    case types.REMOVE_FAV_QUOTE:
      const removedQuote = action.payload
      const newQuotesArray = state[removedQuote.author_permalink].quotes
      newQuotesArray.splice(newQuotesArray.indexOf(removedQuote.id), 1)
      return {
        ...state,
        [removedQuote.author_permalink]: {
          ...state[removedQuote.author_permalink],
          quotes: newQuotesArray
        }
      }
    default:
      return state
  }
}

export default authors
