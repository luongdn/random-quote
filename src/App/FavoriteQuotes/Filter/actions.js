import * as types from 'Constants/ActionTypes'

export const toggleAuthor = (id) => ({
  type: types.TOGGLE_AUTHOR,
  payload: id
})

export const toggleTag = (id) => ({
  type: types.TOGGLE_TAG,
  payload: id
})
