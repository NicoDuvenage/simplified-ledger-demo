'use strict'

const knex = require('../../lib/knex')

const getAllTransfers = async () => {
    try {
        return knex.transfer.find({})
    } catch (e) {
        throw e
    }
}

const createTransfer = async (participantId, amount) => {
    try {
        return await knex.transfer.insert({participantId, amount})
    } catch (e) {
        throw e
    }
}

module.exports = {
    getAllTransfers,
    createTransfer
}