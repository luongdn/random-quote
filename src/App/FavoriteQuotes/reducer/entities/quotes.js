import * as types from 'Constants/ActionTypes'

const quotes = (state = {}, action) => {
  switch(action.type) {
    case types.ADD_TO_FAVORITE:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case types.REMOVE_FAV_QUOTE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          favorite: false
        }
      }
    default:
      return state
  }
}

export default quotes