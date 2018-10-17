'use strict'

const Server = require('./server')
const Config = require('../lib/config')

module.exports = Server.initialize(Config.PORT)
