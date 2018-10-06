import { createSelector } from 'reselect'

const getResults = (state) =>
  state.results

export const getSearchKey = (state) =>
  state.searchKey

export const getResultBySearchKey = createSelector(
  [getResults, getSearchKey],
  (results, searchKey) => {
    return results[searchKey] || null
  }
)

export const getIsFetching = (state) =>
  state.isFetching
