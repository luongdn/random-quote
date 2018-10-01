import * as types from 'Constants/ActionTypes'

const initialState = {
  byAuthor: [],
  byTag: []
}

export const toggleFilter = (state = [], action) => {
  if (state.includes(action.payload)) {
    let nextState = state
    nextState.splice(state.indexOf(action.payload), 1)
    return nextState
  }
  return [
    ...state,
    action.payload
  ]
}

const filter = (state = initialState, action) => {
  switch(action.type) {
    case types.TOGGLE_AUTHOR:
      return {
        ...state,
        byAuthor: toggleFilter(state.byAuthor, action)
      }
    case types.TOGGLE_TAG:
      return {
        ...state,
        byTag: toggleFilter(state.byTag, action)
      }
    default:
      return state
  }
}

export default filter
