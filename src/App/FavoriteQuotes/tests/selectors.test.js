import {
  getIdsByAuthor,
  getVisibleIds
} from '../selectors'

describe('selectors', () => {
  describe('favQuotes', () => {
    let state
    beforeEach(() => {
      state  = {
        entities: {
          authors: {
            author1: {
              quotes: [1, 2]
            },
            author2: {
              quotes: [3, 4]
            }
          },
          tags: {
            "unique": {
              quotes: [5, 6]
            }
          }
        },
        filter: {
          byAuthor: [],
          byTag: [],
        },
        allIds: [1, 2, 3, 4, 5, 6]
      }
    })

    describe('when filter is empty', () => {
      describe('getIdsByAuthor', () => {
        it('should return an array of an empty array', () => {
          expect(getIdsByAuthor(state)).toEqual([[]])
        })
      })

      describe('getVisibleIds', () => {
        it('should return allIds', () => {
          expect(getVisibleIds(state)).toEqual(state.allIds)
        })
      })
    })

    describe('when filter is set', () => {
      beforeEach(() => {
        state.filter.byAuthor = ['author1'],
        state.filter.byTag = ['unique']
      })

      describe('getIdsByAuthor', () => {
        it('should return an array of the array of list quotes ids', () => {
          expect(getIdsByAuthor(state)).toEqual([state.entities.authors['author1'].quotes])
        })
      })

      describe('getVisibleIds', () => {
        it('should return an array of list ids', () => {
          expect(getVisibleIds(state)).toEqual([1, 2, 5, 6])
        })
      })

    })
  })
})
