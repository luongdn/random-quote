import React from 'react'
import PropTypes from 'prop-types'
import './Tag.css'

const Tag = ({ onToggle, name, selected, length }) => {
  const selectedClassName = selected ? 'filter-tags__tag--selected' : ''

  if (length === 0) {
    return <div style={{display: 'none'}}></div>
  }

  return(
    <div
      className={`filter-tags__tag ${selectedClassName}`}
      onClick={onToggle}
    >
      <p>{name}</p>
    </div>
  )
}

Tag.propTypes = {
  onToggle: PropTypes.func,
  name: PropTypes.string,
  selected: PropTypes.bool
}

export default Tag
