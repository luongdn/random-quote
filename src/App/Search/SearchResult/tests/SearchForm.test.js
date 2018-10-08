import React from 'react'
import { SearchResult } from '../'
import QuoteList from 'Common/QuoteList'

const setup = (props) => {
  const actions = {
    fetchSearchQuotes: jest.fn()
  }

  const component = shallow(
    <SearchResult {...props} {...actions} />
  )

  return {
    actions,
    component,
    quoteList: component.find(QuoteList),
    moreBtn: component.find('#more-button'),
  }
}

describe('SearchResult Component', () => {
  describe('when search result is fetched', () => {
    let result
    beforeEach(() => {
      result = {
        quotes: [],
        page: 1,
        last_page: false
      }
    })

    it('should render h1 text', () => {
      const { component } = setup({searchKey: 'searchKey'})
      expect(component.find('h1').text()).toEqual(`Search results for "searchKey"`)
    })

    it('should render one QuoteList component', () => {
      const { quoteList } = setup({ result })
      expect(quoteList.length).toBe(1)
    })

    it('should render the more button', () => {
      const { moreBtn } = setup({ result })
      expect(moreBtn.length).toBe(1)
    })

    describe('when last page is true', () => {
      it('should not render the more button', () => {
        result.last_page = true
        const { moreBtn } = setup({ result })
        expect(moreBtn.length).toBe(0)
      })
    })
  })

  describe('when search result is not fetched', () => {
    it('should not render h1 tag', () => {
      const { component } = setup({result: null, searchKey: ''})
      expect(component.find('h1').length).toBe(0)
    })

    it('should not render QuoteList component', () => {
      const { quoteList } = setup({ result: null })
      expect(quoteList.length).toBe(0)
    })
  })
})
