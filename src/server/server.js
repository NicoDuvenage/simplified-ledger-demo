'use strict'

const Hapi = require('hapi')
const Plugins = require('./plugins')
const Routes = require('../api/routes')
const Db = require('../lib/knex')
const Config = require('../lib/config')

const createServer = async (port = 2345) => {
    return (async () => {
        const server = await new Hapi.Server({
            port
        })
        await Plugins.registerPlugins(server)
        await server.register([Routes])
        await server.start()
        return server
    })()
}

const connectDatabase = async () => {
    await Db.connect(Config.DATABASE_URI)
}

const initialize = async (port) => {
    await connectDatabase()
    await createServer(port)
}

module.exports = {
    initialize
}