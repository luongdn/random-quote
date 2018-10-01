import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchRandomQuote } from './actions'
import { addToFavorite } from '../FavoriteQuotes/actions'
import { getRandomQuote } from './selectors'
import Quote from 'Common/Quote'

export class RandomQuote extends Component {
  componentDidMount() {
    this.fetchRandomQuoteIfNeeded()
  }

  fetchRandomQuoteIfNeeded = () => {
    const { quote, fetchRandomQuote } = this.props
    if (!quote.id) {
      fetchRandomQuote()
    }
  }

  render() {
    const { quote, fetchRandomQuote, addToFavorite } = this.props

    return(
      <div className="random-quote">
        <Quote quote={quote} />
        <button className="random-quote__button" onClick={() => addToFavorite(quote)}>Add to favorite</button>
        <button className="random-quote__button" onClick={fetchRandomQuote}>New Quote</button>
      </div>
    )
  }
}

RandomQuote.propTypes = {
  quote: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    author: PropTypes.string,
  }),
  fetchRandomQuote: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  quote: getRandomQuote(state.randomQuote),
})

export default connect(
  mapStateToProps,
  { fetchRandomQuote, addToFavorite }
)(RandomQuote)