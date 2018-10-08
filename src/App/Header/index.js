import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return(
    <div className="header">
      <ul className="header__navigation">
        <li>
          <NavLink exact to='/' className="header__link" activeClassName="header__link--selected">
            Quote
          </NavLink>
        </li>
        <li>
          <NavLink to='/search' className="header__link" activeClassName="header__link--selected">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to='/favorite' className="header__link" activeClassName="header__link--selected">
            Favorite
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header