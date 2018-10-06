import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QuoteItem from './QuoteItem'
import './QuoteList.css'

class QuoteList extends Component {
  render() {
    const { quotes } = this.props

    if (quotes[0].id === 0) {
      return <div className="not-found">No Quotes Found</div>
    }

    return (
      <div className='quote-list'>
          {quotes.map((item, index) => (
              <QuoteItem
                key={item.id}
                index={index}
                quote={item}
              />
          ))}
      </div>
    )
  }
}

QuoteList.propTypes = {
  quote: PropTypes.object
}

export default QuoteList