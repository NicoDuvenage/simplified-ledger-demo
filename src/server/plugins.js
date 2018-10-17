'use strict'

const Package = require('../../package')
const Inert = require('inert')
const Blipp = require('blipp')
const Vision = require('vision')

const registerPlugins = async (server) => {
    await server.register({
        plugin: require('hapi-swagger'),
        options: {
            info: {
                'title': 'Central Ledger API Documentation',
                'version': Package.version
            }
        }
    })

    await server.register({
        plugin: require('good'),
        options: {
            ops: {
                interval: 10000
            }
        }
    })

    await server.register([Inert, Vision, Blipp])
}

module.exports = {
    registerPlugins
}
