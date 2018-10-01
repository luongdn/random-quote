import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Tag.css'

class Tag extends Component {
  render() {
    const { onToggle, name, selected } = this.props

    return(
      <div
        className="filter__tag"
        onClick={onToggle}
      >
        <p className={selected ? 'filter_tag--selected' : ''}>{name}</p>
      </div>
    )
  }
}

Tag.propTypes = {
  onToggle: PropTypes.func,
  name: PropTypes.string,
  selected: PropTypes.bool
}

export default Tag
