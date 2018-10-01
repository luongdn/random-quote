import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchSearchQuotes, searchQuotesIfNeeded } from './actions'
import { getResultBySearchKey } from './selectors'
import { Link } from 'react-router-dom'
import QuoteList from 'Common/QuoteList'
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
    const { result } = this.props

    return(
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={this.handleChange}
            ref={(node) => { this.input = node }}
          />
          <button type="submit">Search</button>
        </form>
        { result &&
          <QuoteList
            quotes={result.quotes}
          />
        }

        { result && !result.last_page &&
          <button id="more-btn" onClick={this.handleClickMore}>More</button>
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
  })
}

const mapStateToProps = (state) => ({
  result: getResultBySearchKey(state.searchQuotes)
})

export default connect(
  mapStateToProps,
  { fetchSearchQuotes, searchQuotesIfNeeded }
)(Search)
