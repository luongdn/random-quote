import { createSelector } from 'reselect'

const getResults = (state) =>
  state.results

const getSearchKey = (state) =>
  state.searchKey

export const getResultBySearchKey = createSelector(
  [getResults, getSearchKey],
  (results, searchKey) => {
    return results[searchKey] || null
  }
)
