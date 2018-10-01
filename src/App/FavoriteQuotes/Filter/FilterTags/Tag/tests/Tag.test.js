import React from 'react'
import Tag from '../'

const setup = (props) => {
  const component = shallow(
    <Tag {...props} />
  )

  return {
    component
  }
}

describe('Tag component', () => {
  it('should match snapshot when tag is selected', () => {
    const { component } = setup({ name: 'tag name', selected: true })
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot when tag is not selected', () => {
    const { component } = setup({ name: 'tag name', selected: false })
    expect(component).toMatchSnapshot()
  })
})
