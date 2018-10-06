import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'
import { fetchRandomQuote, addToFavorite } from './actions'
import { getRandomQuote, getIsFetching } from './selectors'
import Quote from 'Common/Quote'
import './RandomQuote.css'

export class RandomQuote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        "#472E32",
        "#77B1A9",
        "#73A857",
        "#0098FF",
        "#5C19FF",
      ]
    }
  }

  componentDidMount() {
    this.fetchRandomQuoteIfNeeded()
  }

  fetchRandomQuoteIfNeeded = () => {
    const { quote, fetchRandomQuote } = this.props
    if (!quote.id) {
      fetchRandomQuote()
    }
  }

  handleFetchRandomQuote = (e) => {
    e.preventDefault()
    const { fetchRandomQuote } = this.props
    fetchRandomQuote()
    this.setNewColor()
  }

  setNewColor = () => {
    const { colors } = this.state
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.documentElement.style.setProperty('--random-color', randomColor)
  }

  render() {
    const {
      quote,
      isFetching,
      fetchRandomQuote,
      addToFavorite,
    } = this.props

    return(
      <div className="random-quote-section">
        <div className="random-quote__quote">
          <CSSTransition
            in={!isFetching}
            timeout={2000}
            classNames="fade"
          >
            <div>
              <h2 className="random-quote__body">
                <i className="fa fa-quote-left"></i>
                &nbsp;
                {quote.body}
              </h2>
              <p className="random-quote__author">- {quote.author}</p>
            </div>
          </CSSTransition>
          <div className="random-quote__button">
            <button className="" onClick={() => addToFavorite(quote)}><i className="fa fa-heart"></i></button>
            <button className="" onClick={this.handleFetchRandomQuote}>New Quote</button>
          </div>
        </div>
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
  isFetching: PropTypes.bool,
  fetchRandomQuote: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  quote: getRandomQuote(state.randomQuote),
  isFetching: getIsFetching(state.randomQuote),
})

export default connect(
  mapStateToProps,
  { fetchRandomQuote, addToFavorite }
)(RandomQuote)
