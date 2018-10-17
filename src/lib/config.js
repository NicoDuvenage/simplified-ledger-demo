'use strict'

const RC = require('rc')('LEDGER', require('../../env.json'))

module.exports = {
    PORT: RC.PORT,
    DATABASE_URI: RC.DATABASE_URI
}