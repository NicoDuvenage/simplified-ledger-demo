'use strict'

const knex = require('../../lib/knex')

const getAllParticipants = async () => {
    try {
        return await knex.participant.find({}, {order: 'participantName asc'})
    } catch (e) {
        throw e
    }
}

const createParticipant = async (name) => {
    try {
        return await knex.participant.insert({participantName: name})
    } catch (e) {
        throw e
    }
}

const createParticipantObject = async (participant) => {
    try {
        return await knex.participant.insert(participant)
    } catch (e) {
        throw e
    }
}

module.exports = {
    getAllParticipants,
    createParticipant,
    createParticipantObject
}