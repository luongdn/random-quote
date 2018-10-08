import React from 'react'
import { FavoriteQuotes } from '../'
import QuoteList from 'Common/QuoteList'

const setup = (props = {}) => {
  const actions = {
    fetchFavQuotesIfNeeded: jest.fn()
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

  describe('when allIds is empty', () => {
    it('should render not-found text', () => {
      const { component } = setup(props)
      expect(component.find('.not-found').length).toBe(1)
    })

    it('should call `fetchFavQuotesIfNeeded` on button click', () => {
      const { component, actions } = setup(props)
      component.find('.random-button').at(0).simulate('click')
      expect(actions.fetchFavQuotesIfNeeded).toBeCalled()
    })
  })
})
