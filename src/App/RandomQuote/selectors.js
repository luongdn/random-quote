import { createSelector } from 'reselect'

const getQuote = (state) =>
  state.quote

export const getRandomQuote = createSelector(
  [getQuote],
  (quote) => quote
)