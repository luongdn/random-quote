import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { fetchSearchQuotes, searchQuotesIfNeeded } from './actions'
import {
  getResultBySearchKey,
  getSearchKey,
  getIsFetching
} from './selectors'
import { Link } from 'react-router-dom'
import QuoteList from 'Common/QuoteList'
import { withLoading } from 'Common/Loading'
import * as loadingTypes from 'Constants/LoadingTypes'
import './Search.css'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus()
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { searchTerm } = this.state
    const { searchQuotesIfNeeded } = this.props
    searchQuotesIfNeeded(searchTerm)
  }

  handleClickMore = (e) => {
    e.preventDefault()
    const { result, fetchSearchQuotes } = this.props
    fetchSearchQuotes(result.searchKey, result.page + 1)
  }

  render() {
    const { searchTerm } = this.state
    const { result, searchKey } = this.props

    return(
      <div className="search content-center">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            className="search-form__input"
            type="text"
            value={searchTerm}
            onChange={this.handleChange}
            ref={(node) => { this.input = node }}
          />
          <button className="search-form__button" type="submit">Search</button>
        </form>

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

Search.propTypes = {
  fetchSearchQuotes: PropTypes.func.isRequired,
  searchQuotesIfNeeded: PropTypes.func.isRequired,
  result: PropTypes.shape({
    quotes: PropTypes.array,
    page: PropTypes.number,
    last_page: PropTypes.bool
  }),
  isFetching: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  result: getResultBySearchKey(state.searchQuotes),
  searchKey: getSearchKey(state.searchQuotes),
  isFetching: getIsFetching(state.searchQuotes),
})

export default compose(
  connect(mapStateToProps, { fetchSearchQuotes, searchQuotesIfNeeded }),
  withLoading(loadingTypes.roller)
)(Search)
