import axios from 'axios'
import { normalize } from 'normalizr'
import quotesSchema from './schema'
import * as types from 'Constants/ActionTypes'
import * as quotes from 'Api/quotes'

const fetchFavQuotesSuccess = (data) =>  ({
  type: types.FETCH_FAV_QUOTES_SUCCESS,
  payload: normalize(data.quotes, quotesSchema)
})

const fetchFavQuotesFailure = (message) => ({
  type: types.FETCH_FAV_QUOTES_FAILURE,
  payload: message,
})

export const fetchFavQuotes = () => (dispatch) => {
  dispatch({
    type: types.FETCH_FAV_QUOTES_REQUEST
  })

  axios.request(quotes.favQuotes())
    .then((response) => {
      dispatch(fetchFavQuotesSuccess(response.data))
    })
    .catch((error) => {
      console.log(quotes.favQuotes())
      if (error.response) {
        //server response
        dispatch(fetchFavQuotesFailure(error.response.data))
      }
      else if (error.request) {
        dispatch(fetchFavQuotesFailure(error.message))
      }
      else {
        console.log('Error: ', error.message)
      }
    })
}
