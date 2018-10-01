import quotes from '../entities/quotes'
import * as types from 'Constants/ActionTypes'

describe('reducer', () => {
  describe('entities', () => {
    describe('quotes', () => {
      describe('when quote added to favorite', () => {
        let action, currentState
        beforeEach(() => {
          action = {
            type: types.ADD_TO_FAVORITE,
            payload: {
              id: 1,
              author: 'author1 name',
              author_permalink: 'author1',
              tags: ["great", "best"]
            }
          }
          currentState = {}
        })

        describe('when current state is empty', () => {
          it('should add the new quote', () => {
            expect(quotes(currentState, action)).toEqual({
              1: action.payload
            })
          })
        })
      })

      describe('when quote removed', () => {
        let action, currentState
        beforeEach(() => {
          action = {
            type: types.REMOVE_FAV_QUOTE,
            payload: {
              id: 1,
              author: 'author1 name',
              author_permalink: 'author1',
              tags: ["great", "best"]
            }
          }

          currentState = {
            1: {
              id: 1,
              author: 'author1 name',
              author_permalink: 'author1',
              tags: ["great", "best"],
              favorite: true
            }
          }
        })

        it('should change favorite prop to false', () => {
          expect(quotes(currentState, action)).toEqual({
            1: {
              id: 1,
              author: 'author1 name',
              author_permalink: 'author1',
              tags: ["great", "best"],
              favorite: false
            }
          })
        })

      })
    })
  })
})