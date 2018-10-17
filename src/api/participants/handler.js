'use strict'

const participantModel = require('../../models/index').Participant


const getAllParticipants = async (request, h) => {
    try {
        const results = await participantModel.getAllParticipants()
        return h.response(results).code(200)
    } catch (e) {
        throw e
    }
}

const createParticipant = async (request, h) => {
    try {
        await participantModel.createParticipant(request.payload.name)
        return h.response().code(202)
    } catch (e) {
        throw e
    }
}

const createParticipantObject = async (request, h) => {
    try {
        await participantModel.createParticipant(request.payload.accountName)
        return h.response().code(202)
    } catch (e) {
        throw e
    }
}


module.exports = {
    getAllParticipants,
    createParticipant,
    createParticipantObject
}