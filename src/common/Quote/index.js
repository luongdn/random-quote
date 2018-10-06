import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './Quote.css'

class Quote extends Component {
  render() {
    const { quote, location } = this.props

    return(
      <div className="quote">
        <h2 className="quote__body">
          <i className="fa fa-quote-left"></i>
          &nbsp;
          {quote.body}
          &nbsp;
          <i className="fa fa-quote-right"></i>
        </h2>
        {location.pathname !== '/' &&
          <div className="quote__tags">
            <h3>Tags: </h3>
            {quote.tags.map((item) => (
              <span key={item}>{item} </span>
            ))}
          </div>
        }
        <p className="quote__author">- {quote.author}</p>
      </div>
    )
  }
}

Quote.propTypes = {
  quote: PropTypes.shape({
    body: PropTypes.string,
    tags: PropTypes.array,
    author: PropTypes.string
  })
}

export default withRouter(Quote)