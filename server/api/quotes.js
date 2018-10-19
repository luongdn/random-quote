const config = require('../config')

const api_key = config.api_key

const favQuotesApi = () => ({
  method: 'get',
  url: 'https://favqs.com/api/quotes',
  headers: {
    Authorization: `Token token="${api_key}"`
  }
})

const searchQuotesApi = (filter, page) => ({
  method: 'get',
  url: 'https://favqs.com/api/quotes/',
  headers: {
    Authorization: `Token token="${api_key}"`
  },
  params: {
    filter,
    page
  }
})

module.exports = {
  favQuotesApi,
  searchQuotesApi
}
