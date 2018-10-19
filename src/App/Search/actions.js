import axios from 'axios'
import { searchQuotes } from 'Api/quotes'
import * as types from 'Constants/ActionTypes'

const fetchSearchQuotesSuccess = (data) => ({
  type: types.FETCH_SEARCH_QUOTES_SUCCESS,
  payload: data
})

const fetchSearchQuotesFailure = (message) => ({
  type: types.FETCH_SEARCH_QUOTES_FAILURE,
  payload: message
})

export const fetchSearchQuotes = (searchTerm, page = 1) => (dispatch, getState) => {
  if (getState().searchQuotes.isFetching) {
    return
  }

  dispatch({
    type: types.FETCH_SEARCH_QUOTES_REQUEST
  })

  axios.request(searchQuotes(searchTerm, page))
    .then((response) => {
      dispatch(fetchSearchQuotesSuccess({
        ...response,
        searchKey: searchTerm
      }))
    })
    .catch(error => {
      if (error.response) {
        //server response
        dispatch(fetchSearchQuotesFailure(error.response.data))
      }
      else if (error.request) {
        dispatch(fetchSearchQuotesFailure(error.message))
      }
      else {
        console.log('Error: ', error.message)
      }
    })
}

export const searchQuotesIfNeeded = (searchTerm) => (dispatch, getState) => {
  if (!getState().searchQuotes.results[searchTerm]) {
    dispatch(fetchSearchQuotes(searchTerm))
  } else {
    dispatch({
      type: types.CHANGE_SEARCH_KEY,
      payload: searchTerm
    })
  }
}
