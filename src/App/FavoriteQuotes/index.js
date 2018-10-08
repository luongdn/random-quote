import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { fetchFavQuotesIfNeeded } from './actions'
import Filter from './Filter'
import QuoteList from 'Common/QuoteList'
import {
  getAllIds,
  getFavQuotesByListIds,
  getError,
  getIsFetching
} from './selectors'
import { withLoading } from 'Common/withLoading'
import * as loadingTypes from 'Constants/LoadingTypes'
import { withError } from 'Common/withError'
import './FavoriteQuotes.css'

export const FavoriteQuotes = ({ quotes, allIds, fetchFavQuotesIfNeeded }) => {
  if (allIds.length === 0) {
    return (
      <div className="not-found">
        <p>No Favorite Quotes Found</p>
        <button
          className="random-button"
          onClick={() => fetchFavQuotesIfNeeded()}
        >
          Get some random quotes
        </button>
      </div>
    )
  }

  return(
    <div className="favorite-quotes">
      <div className="content-right">
        <Filter />
      </div>
      <div className="content-left">
        <QuoteList quotes={quotes} />
      </div>
    </div>
  )
}

FavoriteQuotes.propTypes = {
  fetchFavQuotesIfNeeded: PropTypes.func.isRequired,
  allIds: PropTypes.array.isRequired,
  quotes: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  allIds: getAllIds(state.favQuotes),
  quotes: getFavQuotesByListIds(state.favQuotes),
  error: getError(state.favQuotes),
  isFetching: getIsFetching(state.favQuotes)
})

export default compose(
  connect(mapStateToProps, { fetchFavQuotesIfNeeded }),
  withLoading(loadingTypes.ripple),
  withError(),
)(FavoriteQuotes)
