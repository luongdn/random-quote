import reducer from '../reducer'
import * as types from 'Constants/ActionTypes'

describe('reducer', () => {
  describe('randomQuote', () => {
    const initialState = {
      quote: {},
      isFetching: false
    }

    it('should provide initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle FETCH_RANDOM_QUOTE_SUCCESS action', () => {
      expect(reducer({}, {
        type: types.FETCH_RANDOM_QUOTE_SUCCESS,
        payload: 'quote'
      })).toEqual({ quote: 'quote', isFetching: false})
    })
  })
})