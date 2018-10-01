import React from 'react'
import { FavoriteQuotes } from '../'
import QuoteList from 'Common/QuoteList'

const setup = (props = {}) => {
  const actions = {
    fetchFavQuotes: jest.fn()
  }

  const component = shallow(
    <FavoriteQuotes { ...props } { ...actions } />
  )

  return {
    actions,
    component,
    quoteList: component.find(QuoteList)
  }
}

describe('FavoriteQuotes component', () => {
  let props
  beforeEach(() => {
    props = {
      allIds: [],
      quotes: [],
    }
  })

  it('should call `fetchFavQuotes` on mounting', () => {
    const { actions } = setup(props)
    expect(actions.fetchFavQuotes).toBeCalled()
  })

  it('should render error message', () => {
    const { component } = setup({ ...props, error: 'Error message' })
    expect(component.text()).toEqual('Error message')
  })

  it('should render QuoteList component', () => {
    const { quoteList } = setup(props)
    expect(quoteList.length).toBe(1)
  })
})
