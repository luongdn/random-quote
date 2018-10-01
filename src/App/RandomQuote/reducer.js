import {
  FETCH_RANDOM_QUOTE_REQUEST,
  FETCH_RANDOM_QUOTE_SUCCESS,
  FETCH_RANDOM_QUOTE_FAILURE
} from 'Constants/ActionTypes'

const initialState = {
  quote: {},
  isFetching: false
}

const randomQuote = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_RANDOM_QUOTE_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_RANDOM_QUOTE_SUCCESS:
    case FETCH_RANDOM_QUOTE_FAILURE:
      return {
        quote: action.payload,
        isFetching: false,
      }
    default:
      return state
  }
}

export default randomQuote
