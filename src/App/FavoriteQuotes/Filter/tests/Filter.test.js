import React from 'react'
import { Filter } from '../'
import FilterTags from '../FilterTags'

const setup = (authors, tags) => {
  const actions = {
    toggleAuthor: jest.fn(),
    toggleTag: jest.fn()
  }

  const component = shallow(
    <Filter authors={authors} tags={tags} {...actions}/>
  )

  return {
    actions,
    component,
    filterTags: component.find(FilterTags)
  }
}

describe('Filter component', () => {
  it('should render two FilterTags component', () => {
    const { filterTags } = setup({}, {})
    expect(filterTags.length).toBe(2)
  })
})
