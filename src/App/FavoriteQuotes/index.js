import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { fetchFavQuotes } from './actions'
import Filter from './Filter'
import QuoteList from 'Common/QuoteList'
import {
  getAllIds,
  getFavQuotesByListIds,
  getError,
  getIsFetching
} from './selectors'
import { withLoading } from 'Common/Loading'
import * as loadingTypes from 'Constants/LoadingTypes'
import './FavoriteQuotes.css'

export class FavoriteQuotes extends Component {
  componentDidMount() {
    this.fetchFavQuotesIfNeeded()
  }

  fetchFavQuotesIfNeeded = () => {
    const { allIds, fetchFavQuotes } = this.props
    if (allIds.length === 0) {
      fetchFavQuotes()
    }
  }

  render() {
    const { quotes, allIds, error } = this.props

    if (error) {
      return <div>{error}</div>
    }

    if (allIds.length === 0) {
      return <div className="not-found">No Favorite Quotes Found</div>
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
}

FavoriteQuotes.propTypes = {
  fetchFavQuotes: PropTypes.func.isRequired,
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
  connect(mapStateToProps, { fetchFavQuotes }),
  withLoading(loadingTypes.ripple)
)(FavoriteQuotes)