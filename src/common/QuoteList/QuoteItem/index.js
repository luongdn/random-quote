import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { addToFavorite, removeFavQuote } from './actions'
import Quote from 'Common/Quote'

class QuoteItem extends Component {
  render() {
    const { quote, addToFavorite, removeFavQuote, location } = this.props
    if (location.pathname === '/favorite' && !quote.favorite) {
      return <div></div>
    }

    return(
      <div>
        <Quote
          quote={quote}
        />
        { location.pathname === '/favorite'
          ? <button
              onClick={() => removeFavQuote(quote)}
            >
              Remove
            </button>
          : <button
              onClick={() => addToFavorite(quote)}
            >
              Add to favorite
            </button>
        }
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
