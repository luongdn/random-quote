import React from 'react'
import { Search } from '../'
import QuoteList from 'Common/QuoteList'

const setup = (result) => {
  const actions = {
    fetchSearchQuotes: jest.fn(),
    searchQuotesIfNeeded: jest.fn()
  }

  const component = shallow(
    <Search result={result} {...actions} />
  )

  return {
    actions,
    component,
    quoteList: component.find(QuoteList),
    moreBtn: component.find('#more-btn'),
  }
}

describe('Search Component', () => {
  describe('when search result is fetched', () => {
    let result
    beforeEach(() => {
      result = {
        quotes: [],
        page: 1,
        last_page: false
      }
    })

    it('should render one QuoteList component', () => {
      const { quoteList } = setup(result)
      expect(quoteList.length).toBe(1)
    })

    it('should render the more button', () => {
      const { moreBtn } = setup(result)
      expect(moreBtn.length).toBe(1)
    })

    describe('when last page is true', () => {
      it('should not render the more button', () => {
        result.last_page = true
        const { moreBtn } = setup(result)
        expect(moreBtn.length).toBe(0)
      })
    })
  })

  describe('when search is not fetched', () => {
    it('should not render QuoteList component', () => {
      const { quoteList } = setup(null)
      expect(quoteList.length).toBe(0)
    })
  })
})
