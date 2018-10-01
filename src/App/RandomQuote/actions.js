import axios from 'axios'
import * as quotes from 'Api/quotes'
import * as types from 'Constants/ActionTypes'

const fetchRandomQuoteSuccess = (data) => ({
  type: types.FETCH_RANDOM_QUOTE_SUCCESS,
  payload: data
})

const fetchRandomQuoteFailure = (message) => ({
  type: types.FETCH_RANDOM_QUOTE_FAILURE,
  payload: {
    id: 0,
    body: message,
    author: '',
  }
})

export const fetchRandomQuote = () => (dispatch, getState) => {
  if (getState().randomQuote.isFetching) {
    return
  }

  dispatch({
    type: types.FETCH_RANDOM_QUOTE_REQUEST,
  })
  axios.request(quotes.randomQuote())
    .then((response) => {
      dispatch(fetchRandomQuoteSuccess(response.data.quote))
    })
    .catch((error) => {
      if (error.response) {
        //
      }
      else if (error.request) {
        dispatch(fetchRandomQuoteFailure(error.message))
      } else {
        console.log('Error: ', error.message)
      }
    })
}
