import { getResultBySearchKey } from '../selectors'

describe('selectors', () => {
  describe('searchQuotes', () => {
    describe('when search result is fetched', () => {
      let state
      beforeEach(() => {
        state = {
          results: {
            future: {}
          },
          searchKey: 'future'
        }
      })
      it('should return quotes by key passed', () => {
        expect(getResultBySearchKey(state)).toEqual({})
      })
    })

    describe('when search result is not fetched', () => {
      let state
      beforeEach(() => {
        state = {
          results: {
            future: {}
          },
          searchKey: 'past'
        }
      })
      it('should return null', () => {
        expect(getResultBySearchKey(state)).toBe(null)
      })
    })
  })
})
