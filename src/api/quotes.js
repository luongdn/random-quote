const api_key = '773ef45c4cb8dc667cebb107b5e00b05'

export const randomQuote = () =>
  `https://favqs.com/api/qotd`

export const favQuotes = () => ({
  method: 'get',
  url: 'https://favqs.com/api/quotes',
  headers: {
    Authorization: `Token token="${api_key}"`
  }
})

export const searchQuotes = (filter, page) => ({
  method: 'get',
  url: 'https://favqs.com/api/quotes/',headers: {
    Authorization: `Token token="${api_key}"`
  },
  params: {
    filter,
    page
  }
})
