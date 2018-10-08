import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAuthors, getTags } from '../selectors'
import { toggleAuthor, toggleTag } from './actions'
import FilterTags from './FilterTags'
import './Filter.css'

export const Filter = ({ authors, tags, toggleAuthor, toggleTag }) => {
  return(
    <div className="filter">
      <div className="filter__by-author">
        <h2>Filter by author</h2>
        <FilterTags filterTags={authors} handleToggle={toggleAuthor} />
      </div>
      <div className="filter__by-tag">
        <h2>Filter by tag</h2>
        <FilterTags filterTags={tags} handleToggle={toggleTag} />
      </div>
    </div>
  )
}

Filter.propTypes = {
  authors: PropTypes.object.isRequired,
  tags: PropTypes.object.isRequired,
  toggleAuthor: PropTypes.func.isRequired,
  toggleTag: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  authors: getAuthors(state.favQuotes),
  tags: getTags(state.favQuotes)
})

export default connect(
  mapStateToProps,
  { toggleAuthor, toggleTag }
)(Filter)
