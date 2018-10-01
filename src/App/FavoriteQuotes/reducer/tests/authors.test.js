import authors from '../entities/authors'
import * as types from 'Constants/ActionTypes'

describe('reducer', () => {
  describe('entities', () => {
    describe('authors', () => {
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
          it('should add the new author', () => {
            expect(authors({}, action)).toEqual({
              author1: {
                id: 'author1',
                name: 'author1 name',
                quotes:[1],
                selected: false
              }
            })
          })
        })

        describe('when author and tags is included in current state', () => {
          it('should add the new quote id to the author\'s quotes array', () => {
            currentState = {
              author1: {
                id: 'author1',
                name: 'author1 name',
                quotes:[2],
                selected: true
              }
            }
            expect(authors(currentState, action)).toEqual({
              author1: {
                id: 'author1',
                name: 'author1 name',
                quotes:[2, 1],
                selected: true
              }
            })
          })
        })
      })
    })
  })
})