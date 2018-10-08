import React from 'react'
import { connect } from 'react-redux'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import './Search.css'

const Search = () => {
  return(
    <div className="search content-center">
      <SearchForm />
      <SearchResult />
    </div>
  )
}

export default Search
