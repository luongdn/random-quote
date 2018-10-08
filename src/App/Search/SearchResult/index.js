import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { fetchSearchQuotes } from '../actions'
import {
  getResultBySearchKey,
  getSearchKey,
  getIsFetching,
  getError
} from '../selectors'
import QuoteList from 'Common/QuoteList'
import { withError } from 'Common/withError'
import { withLoading } from 'Common/withLoading'
import * as loadingTypes from 'Constants/LoadingTypes'
import './SearchResult.css'

export class SearchResult extends Component {
  handleClickMore = (e) => {
    e.preventDefault()
    const { result, fetchSearchQuotes } = this.props
    fetchSearchQuotes(result.searchKey, result.page + 1)
  }

  render() {
    const { result, searchKey } = this.props

    return(
      <div className='search-result'>
        { searchKey !== '' &&
            <h1>{`Search results for "${searchKey}"`}</h1>
        }

        { result &&
          <QuoteList
            quotes={result.quotes}
          />
        }

        { result && !result.last_page &&
          <button id="more-button" className="more-button" onClick={this.handleClickMore}>More</button>
        }
      </div>
    )
  }
}

SearchResult.propTypes = {
  fetchSearchQuotes: PropTypes.func.isRequired,
  result: PropTypes.shape({
    quotes: PropTypes.array,
    page: PropTypes.number,
    last_page: PropTypes.bool
  }),
  searchKey: PropTypes.string,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  result: getResultBySearchKey(state.searchQuotes),
  searchKey: getSearchKey(state.searchQuotes),
  isFetching: getIsFetching(state.searchQuotes),
  error: getError(state.searchQuotes),
})

export default compose(
  connect(mapStateToProps, { fetchSearchQuotes }),
  withLoading(loadingTypes.roller),
  withError()
)(SearchResult)
