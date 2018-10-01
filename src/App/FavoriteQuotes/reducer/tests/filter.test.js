import filter, { toggleFilter } from '../filter'
import * as types from 'Constants/ActionTypes'

describe('reducer', () => {
  describe('filter', () => {
    const initialState = {
      byAuthor: [],
      byTag: []
    }

    const state1 = {
      byAuthor: ['author2', 'author1'],
      byTag: []
    }

    const state2 = {
      byAuthor: ['author2'],
      byTag: ['unique']
    }

    it('should provide initial state', () => {
      expect(filter(undefined, {})).toEqual(initialState)
    })

    describe('toggleFilter', () => {
      it("should add item when it's not in array", () => {
        expect(toggleFilter(
          [],
          { payload: 'author1' }
        )).toEqual(['author1'])
      })

      it("should remove item when it's already in array", () => {
        expect(toggleFilter(
          ['author1'],
          { payload: 'author1'}
        )).toEqual([])
      })
    })

    it('should handle TOGGLE_TAG action', () => {
      expect(filter(state1, {
        type: types.TOGGLE_TAG,
        payload: 'unique'
      }).byTag).toEqual(state2.byTag)

      expect(filter(state2, {
        type: types.TOGGLE_TAG,
        payload: 'unique'
      }).byTag).toEqual(state1.byTag)
    })
  })
})