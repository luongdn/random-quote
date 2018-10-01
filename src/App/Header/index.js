import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><NavLink to='/'>Random Quote</NavLink></li>
          <li><NavLink to='/search'>Search</NavLink></li>
          <li><NavLink to='/favorite'>Favorite Quotes</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Header