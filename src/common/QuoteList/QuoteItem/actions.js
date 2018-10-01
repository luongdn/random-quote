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

export const removeFavQuote = (quote) => ({
  type: types.REMOVE_FAV_QUOTE,
  payload: quote
})
