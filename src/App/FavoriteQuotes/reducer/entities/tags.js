import * as types from 'Constants/ActionTypes'

const tags = (state = initialState.tags, action) => {
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
    default:
      return state
  }
}

export default tags
