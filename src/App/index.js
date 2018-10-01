import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import RandomQuote from './RandomQuote'
import Search from './Search'
import FavoriteQuotes from './FavoriteQuotes'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={RandomQuote} />
        <Route path='/search' component={Search} />
        <Route path='/favorite' component={FavoriteQuotes} />
      </div>
    )
  }
}

export default App