import tags from '../entities/tags'
import * as types from 'Constants/ActionTypes'

describe('reducer', () => {
  describe('entities', () => {
    describe('tags', () => {
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
          it('should add the new tags', () => {
            expect(tags({}, action)).toEqual({
              great: {
                id: 'great',
                name: 'great',
                quotes: [1],
                selected: false
              },
              best: {
                id: 'best',
                name: 'best',
                quotes: [1],
                selected: false
              }
            })
          })
        })

        describe('when author and tags is included in current state', () => {
          it('should add the new quote id to the tags\'s quotes array', () => {
            currentState = {
              great: {
                id: 'great',
                name: 'great',
                quotes: [2],
                selected: true
              }
            }
            expect(tags(currentState, action)).toEqual({
              great: {
                id: 'great',
                name: 'great',
                quotes: [2, 1],
                selected: true
              },
              best: {
                id: 'best',
                name: 'best',
                quotes: [1],
                selected: false
              }
            })
          })
        })
      })

      describe('when quote removed from favorite', () => {
        let action, currentState, nextState
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
            great: {
              id: 'great',
              name: 'great',
              quotes: [1, 2, 3],
              selected: false
            },
            best: {
              id: 'best',
              name: 'best',
              quotes: [1],
              selected: true
            }
          }

          nextState = {
            great: {
              id: 'great',
              name: 'great',
              quotes: [2, 3],
              selected: false
            },
            best: {
              id: 'best',
              name: 'best',
              quotes: [],
              selected: true
            }
          }
        })

        it('should remove quote id from quotes array', () => {
          expect(tags(currentState, action)).toEqual(nextState)
        })

      })
    })
  })
})
