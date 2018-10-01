import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Quote extends Component {
  render() {
    const { quote, location } = this.props

    return(
      <div>
        <h2 className="quote__body">{quote.body}</h2>
        {location.pathname !== '/' &&
          <span>
            <h3>Tags: </h3>
            {quote.tags.map((item) => (
              <span key={item}>{item} </span>
            ))}
          </span>
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