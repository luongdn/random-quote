import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFavQuotes } from './actions'
import PropTypes from 'prop-types'
import Filter from './Filter'
import QuoteList from 'Common/QuoteList'
import { getAllIds, getFavQuotesByListIds, getError } from './selectors'

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
    const { quotes, error } = this.props

    if (error) {
      return <div>{error}</div>
    }

    return(
      <div>
        <Filter />
        <h1>Favorite Quotes</h1>
        <QuoteList quotes={quotes} />
      </div>
    )
  }
}

FavoriteQuotes.propTypes = {
  allIds: PropTypes.array.isRequired,
  quotes: PropTypes.array,
  error: PropTypes.string
}

const mapStateToProps = (state) => ({
  allIds: getAllIds(state.favQuotes),
  quotes: getFavQuotesByListIds(state.favQuotes),
  error: getError(state.favQuotes)
})

export default connect(
  mapStateToProps,
  { fetchFavQuotes }
)(FavoriteQuotes)