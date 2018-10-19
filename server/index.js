const express = require('express')
const path = require('path')
const axios = require('axios')
const quotesApi = require('./api/quotes')
const port = process.env.PORT || 8080
const app = express()

app.use(express.static(path.join(__dirname, '../')))

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/favQuotes', (req, res) => {
  axios.request(quotesApi.favQuotesApi())
    .then((response) => {
      res.send(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
      res.sendStatus(500)
    })
})

app.get('/searchQuotes', (req, res) => {
  const { filter, page } = req.query
  axios.request(quotesApi.searchQuotesApi(filter, page))
    .then((response) => {
      res.send(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
      res.sendStatus(500)
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

app.listen(port)
