import React from 'react'
import { RandomQuote } from '../'
import Quote from 'Common/Quote'

const setup = (quote) => {
  const actions = {
    fetchRandomQuote: jest.fn()
  }

  const component = shallow(
    <RandomQuote quote={quote} {...actions}/>
  )

  return {
    actions,
    component,
    quoteComponent: component.find(Quote),
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

  it('should render one Quote component', () => {
    const { quoteComponent } = setup(quote)
    expect(quoteComponent.length).toBe(1)
  })

  it('should call `fetchRandomQuote` on button click', () => {
    const { newQuoteBtn, actions } = setup(quote)
    newQuoteBtn.simulate('click')
    expect(actions.fetchRandomQuote).toBeCalled()
  })
})
