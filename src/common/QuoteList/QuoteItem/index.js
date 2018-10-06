import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { addToFavorite, removeFavQuote } from './actions'
import Quote from 'Common/Quote'
import './QuoteItem.css'

class QuoteItem extends Component {
  render() {
    const { quote, index, addToFavorite, removeFavQuote, location } = this.props

    if (location.pathname === '/favorite' && !quote.favorite) {
      return <div style={{display: 'none'}}></div>
    }

    const color = (index % 2) === 0 ?
    'quote-item--black-text' :
    'quote-item--white-text'

    return(
      <div className="quote-item-container">
        <div className={`quote-item ${color}`}>
          <Quote
            quote={quote}
          />
          { location.pathname === '/favorite'
            ? <button
                onClick={() => removeFavQuote(quote)}
                className="quote-item__button"
              >
                <i className="fa fa-trash"></i>
              </button>
            : <button
                onClick={() => addToFavorite(quote)}
                className="quote-item__button"
              >
                <i className="fa fa-heart"></i>
              </button>
          }
        </div>
      </div>
    )
  }
}

QuoteItem.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  removeFavQuote: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({})

export default withRouter(
  connect(mapStateToProps, { addToFavorite, removeFavQuote })(QuoteItem)
)
