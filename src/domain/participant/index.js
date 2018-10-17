'use strict'

const model = require('../../models/participants/participant')

const transform = async (accountName) => {
    const participant = {
        participantName: accountName,
    }
    await model.createParticipantObject(participant)
}

module.exports = {
    transform
}