import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'
import { getAuthors, getTags } from '../selectors'
import { toggleAuthor, toggleTag } from './actions'
import FilterTags from './FilterTags'
import './Filter.css'

export class Filter extends Component {

  makeid = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  render() {
    const { authors, tags, toggleAuthor, toggleTag } = this.props

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
}

Filter.propTypes = {
  authors: PropTypes.object.isRequired,
  tags: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  authors: getAuthors(state.favQuotes),
  tags: getTags(state.favQuotes)
})

export default connect(
  mapStateToProps,
  { toggleAuthor, toggleTag }
)(Filter)