require('dotenv').config()

module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    DATOCMS_API_TOKEN:
      process.env.DATOCMS_API_TOKEN,
  },
}
