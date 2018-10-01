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
    })
  })
})
