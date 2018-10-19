const env = process.env.NODE_ENV || 'development'

const development = {
  api_key: '773ef45c4cb8dc667cebb107b5e00b05',
}

const production = {
  api_key: process.env.API_KEY
}

const config = {
  development,
  production
}

module.exports = config[env]
