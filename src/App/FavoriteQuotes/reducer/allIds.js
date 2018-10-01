import * as types from 'Constants/ActionTypes'

const allIds = (state = [], action) => {
  switch(action.type) {
    case types.ADD_TO_FAVORITE:
      return [
        ...state,
        action.payload.id
      ]
    case types.REMOVE_FAV_QUOTE:
      let nextState = state
      if (nextState.includes(action.payload.id)) {
        nextState.splice(nextState.indexOf(action.payload.id), 1)
      }
      return nextState
    default:
      return state
  }
}

export default allIds
