'use strict'

const Handler = require('./handler.js')


module.exports = [
    {
        method: 'GET',
        path: '/transfers',
        handler: Handler.getAllTransfers
    },
    {
        method: 'POST',
        path: '/transfers',
        handler: Handler.createTransfer
    }
]