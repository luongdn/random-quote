import React from 'react'
import { RandomQuote } from '../'

const setup = (quote) => {
  const actions = {
    fetchRandomQuote: jest.fn(),
    addToFavorite: jest.fn()
  }

  const component = shallow(
    <RandomQuote quote={quote} {...actions}/>
  )

  return {
    actions,
    component,
    addBtn: component.find('button').at(0),
    newQuoteBtn: component.find('button').at(1)
  }
}

let quote

describe('RandomQuote component', () => {
  beforeEach(() => {
    quote = {
      id: 123,
      body: 'quote body',
      author: 'me'
    }
  })

  it('should call `addToFavorite` on button click', () => {
    const { addBtn, actions } = setup(quote)
    addBtn.simulate('click', { preventDefault() {} })
    expect(actions.addToFavorite).toBeCalled()
  })

  it('should call `fetchRandomQuote` on button click', () => {
    const { newQuoteBtn, actions } = setup(quote)
    newQuoteBtn.simulate('click', { preventDefault() {} })
    expect(actions.fetchRandomQuote).toBeCalled()
  })
})
