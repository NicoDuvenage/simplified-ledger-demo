'use strict'

const transferModel = require('../../models/index').Transfer

const getAllTransfers = async (request, h) => {
    try {
        const results = await transferModel.getAllTransfers()
        return h.response(results).code(200)
    } catch (e) {
        throw e
    }
}

const createTransfer = async (request, h) => {
    try {
        await transferModel.createTransfer(request.payload.participantId, request.payload.amount)
        return h.response().code(202)
    } catch (e) {
        throw e
    }
}


module.exports = {
    getAllTransfers,
    createTransfer
}