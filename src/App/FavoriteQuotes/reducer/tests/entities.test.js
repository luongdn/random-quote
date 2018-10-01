import entities from '../entities'
import * as types from 'Constants/ActionTypes'

describe('reducer', () => {
  describe('entities', () => {
    describe('when dispatch toggle action', () => {

      const initialState = {
        quotes: {},
        authors: {},
        tags: {}
      }

      const state1 = {
        quotes: {},
        authors: {
          author1: {
            selected: false
          }
        },
        tags: {
          unique: {
            selected: true
          }
        }
      }

      const state2 = {
        quotes: {},
        authors: {
          author1: {
            selected: true
          }
        },
        tags: {
          unique: {
            selected: false
          }
        }
      }

      it('should provide initial state', () => {
        expect(entities(undefined, {})).toEqual(initialState)
      })

      it('should handle TOGGLE_AUTHOR action', () => {
        expect(entities(state1, {
          type: types.TOGGLE_AUTHOR,
          payload: 'author1'
        }).authors).toEqual(state2.authors)

        expect(entities(state2, {
          type: types.TOGGLE_AUTHOR,
          payload: 'author1'
        }).authors).toEqual(state1.authors)
      })
    })
  })
})
