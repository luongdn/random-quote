import * as types from 'Constants/ActionTypes'

const authors = (state = initialState.authors, action) => {
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
    default:
      return state
  }
}

export default authors
