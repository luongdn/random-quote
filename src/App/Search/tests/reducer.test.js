import searchQuotes, { results } from '../reducer'
import * as types from 'Constants/ActionTypes'

describe('reducer', () => {
  describe('searchQuotes', () => {
    describe('results', () => {
      let action, currentState, nextState
      beforeEach(() => {
        currentState = {
          now: {
            last_page: false,
            page: 1,
            quotes: [1: {}, 2: {}],
            searchKey: 'now'
          }
        }

        action = {
          type: types.FETCH_SEARCH_QUOTES_SUCCESS,
          payload: {
            last_page: true,
            page: 2,
            quotes: [3: {}, 4: {}],
            searchKey: 'now'
          }
        }

        nextState = {
          now: {
            last_page: true,
            page: 2,
            quotes: [1: {}, 2: {}, 3: {}, 4: {}],
            searchKey: 'now'
          }
        }
      })

      describe('when search result existed', () => {
        it('should merge the new quotes', () => {
          expect(results(currentState, action)).toEqual(nextState)
        })
      })

      describe('when search result is not existed', () => {
        currentState = {}
        nextState = {
          now: {
            last_page: true,
            page: 2,
            quotes: [3: {}, 4: {}],
            searchKey: 'now'
          }
        }

        it('should add the new quotes', () => {
          expect(results(currentState, action)).toEqual(nextState)
        })
      })
    })
  })
})