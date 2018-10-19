const base_url = process.env.BASE_URL || 'localhost://8080'

export const randomQuote = () =>
  `https://favqs.com/api/qotd`

export const favQuotes = () => ({
  method: 'get',
  url: `${base_url}/favQuotes`,
})

export const searchQuotes = (filter, page) => ({
  method: 'get',
  url: `${base_url}/searchQuotes,
  params: {
    filter,
    page
  }
})
