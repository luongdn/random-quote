import * as types from 'Constants/ActionTypes'

const initialState = {
  results: {},
  searchKey: '',
  isFetching: false,
  error: null
}

export const results = (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_QUOTES_SUCCESS:
      if (state[action.payload.searchKey]) {
        return {
          ...state,
          [action.payload.searchKey]: {
            ...action.payload,
            quotes: [...(state[action.payload.searchKey].quotes), ...action.payload.quotes],
          }
        }
      }
      return {
        ...state,
        [action.payload.searchKey]: action.payload
      }
    default:
      return state
  }
}

const searchQuotes = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_QUOTES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_SEARCH_QUOTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        searchKey: action.payload.searchKey,
        results: results(state.results, action)
      }
    case types.FETCH_SEARCH_QUOTES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case types.CHANGE_SEARCH_KEY:
      return {
        ...state,
        searchKey: action.payload
      }
    default:
      return state
  }
}

export default searchQuotes
