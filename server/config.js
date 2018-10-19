const env = process.env.NODE_ENV || 'development'

const development = {
  api_key: '<YOUR_API_KEY>',
}

const production = {
  api_key: process.env.API_KEY
}

const config = {
  development,
  production
}

module.exports = config[env]
