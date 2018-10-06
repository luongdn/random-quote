import * as types from 'Constants/ActionTypes'

const tags = (state = {}, action) => {
  switch(action.type) {
    case types.ADD_TO_FAVORITE:
      const newData = action.payload
      return newData.tags.reduce((nextState, item) => {
        nextState[item] = {
          id: item,
          name: item,
          quotes: [ ...(nextState[item] ? nextState[item].quotes : []), newData.id],
          selected: nextState[item] ? nextState[item].selected : false
        }
        return nextState
      }, { ...state })
    case types.REMOVE_FAV_QUOTE:
      const removedQuote = action.payload
      removedQuote.tags.reduce((nextState, item) => {
        var newQuotes = nextState[item].quotes
        newQuotes.splice(newQuotes.indexOf(removedQuote.id), 1)
        return {
          ...nextState,
          [item]: {
            ...nextState[item],
            quotes: newQuotes
          }
        }
      }, { ...state })
    default:
      return state
  }
}

export default tags
