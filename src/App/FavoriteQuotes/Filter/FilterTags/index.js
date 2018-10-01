import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'

const FilterTags = ({ filterTags, handleToggle }) => {
  return(
    <div>
      {Object.keys(filterTags).map((key) => (
        <Tag
          key={key}
          name={filterTags[key].name}
          selected={filterTags[key].selected}
          onToggle={() => handleToggle(key)}
        />
      ))}
    </div>
  )
}

FilterTags.propTypes = {
  filterTags: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  handleToggle: PropTypes.func.isRequired
}

export default FilterTags
