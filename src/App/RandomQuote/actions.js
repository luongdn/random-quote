import axios from 'axios'
import * as quotes from 'Api/quotes'
import * as types from 'Constants/ActionTypes'

const formatQuote= (quote) => {
  const {
    dialogue,
    downvotes_count,
    favorites_count,
    upvotes_count,
    url,
    ...rest
  } = quote
  return  {
    ...rest,
    favorite: true
  }
}

export const addToFavorite = (quote) => (dispatch, getState) => {
  if (getState().favQuotes.entities.quotes[quote.id]) {
    return
  }
  dispatch({
    type: types.ADD_TO_FAVORITE,
    payload: formatQuote(quote)
  })
}

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
