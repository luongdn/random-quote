import { createSelector } from 'reselect'
import _ from 'lodash'

export const getFavQuotes = (state) =>
  state.entities.quotes

export const getAuthors = (state) =>
  state.entities.authors

export const getTags = (state) =>
  state.entities.tags

const getFilterByAuthor = (state) =>
  state.filter.byAuthor

const getFilterByTag = (state) =>
  state.filter.byTag

export const getAllIds = (state) =>
  state.allIds

export const getIdsByAuthor = createSelector(
  [getAuthors, getFilterByAuthor],
  (authors, byAuthor) => {
    if (byAuthor.length === 0) return [[]]
    return byAuthor.map(item => authors[item].quotes)
  }
)

export const getIdsByTag = createSelector(
  [getTags, getFilterByTag],
  (tags, byTag) => {
    if (byTag.length === 0) return [[]]
    return byTag.map(item => tags[item].quotes)
  }
)

export const getVisibleIds = createSelector(
  [getIdsByAuthor, getIdsByTag, getAllIds],
  (idsByAuthor, idsByTag, allIds) => {
    const visibleIds = _.union(...idsByAuthor, ...idsByTag)
    if (visibleIds.length === 0) {
      return allIds.reverse()
    }
    return visibleIds
  }
)

export const getFavQuotesByListIds = createSelector(
  [getFavQuotes, getVisibleIds],
  (quotes, visibleIds) => {
    return visibleIds.map(id => quotes[id])
  }
)

export const getError = (state) =>
  state.error
