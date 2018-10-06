import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios'
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'
import Header from './Header'
import RandomQuote from './RandomQuote'
import Search from './Search'
import FavoriteQuotes from './FavoriteQuotes'
import './App.css'

const App = ({ location }) => {
  return (
    <div>
      <Header />
      <TransitionGroup className="main">
        <CSSTransition
          key={location.key}
          timeout={200}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path='/' component={RandomQuote} />
            <Route path='/search' component={Search} />
            <Route path='/favorite' component={FavoriteQuotes} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(App)