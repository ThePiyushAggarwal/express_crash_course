const moment = require('moment')

// This function logs required details whenever there is a request
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }: ${moment().format()}`
  )
  next()
}

module.exports = logger
