import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QuoteItem from './QuoteItem'
import './QuoteList.css'

class QuoteList extends Component {
  render() {
    const { quotes } = this.props
    return (
      <div className='quote-list'>
          {quotes.map(item => (
            <QuoteItem
              key={item.id}
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