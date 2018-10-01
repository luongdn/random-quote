import * as types from 'Constants/ActionTypes'
import entities from './entities/index'
import filter from './filter'
import allIds from './allIds'

const initialState = {
  entities: {
    quotes: {},
    authors: {},
    tags: {}
  },
  filter: {
    byAuthor: [],
    byTag: []
  },
  allIds: [],
  isFetching: false,
  error: null
}

const favQuotes = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_FAV_QUOTES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_FAV_QUOTES_SUCCESS:
      return {
        ...state,
        entities: action.payload.entities,
        allIds: action.payload.result,
        isFetching: false,
        error: null
      }
    case types.FETCH_FAV_QUOTES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return {
        ...state,
        entities: entities(state.entities, action),
        filter: filter(state.filter, action),
        allIds: allIds(state.allIds, action)
      }
  }
}

export default favQuotes
