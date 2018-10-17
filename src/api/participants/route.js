'use strict'

const Handler = require('./handler.js')

module.exports = [
    {
        method: 'GET',
        path: '/participants',
        handler: Handler.getAllParticipants
    },
    {
        method: 'POST',
        path: '/participants',
        handler: Handler.createParticipant
    },
    {
        method: 'PUT',
        path: '/participants',
        handler: Handler.createParticipantObject
    }
]