'use strict'

const Sinon = require('sinon')
const Test = require('tapes')(require('tape'))
const ParticipantModel = require('../../../src/models/participants/participant')
const Db = require('../../../src/lib/knex')

const participants = [{
    participantId: 1,
    participantName: 'testName',
    createdDate: new Date()
}]

Test('Participant Model', async (participantTest) =>{
    let sandbox
    participantTest.beforeEach(t => {
        sandbox = Sinon.createSandbox()
        Db.participant = {
            insert: sandbox.stub(),
            find: sandbox.stub()
        }
        t.end()
    })

    participantTest.afterEach(t => {
        sandbox.restore()
        t.end()
    })

    await participantTest.test('should return a list of participants', async (getAllTest) => {
        Db.participant.find.returns(participants)
        const participantList = await ParticipantModel.getAllParticipants()
        getAllTest.equal(participantList, participants)
        getAllTest.end()
    })

    await participantTest.test('should return throw and error is the database is disconnect', async (getAllTest) => {
        try {
            Db.participant.find.throws(new Error())
            await ParticipantModel.getAllParticipants()
            getAllTest.fail()
            getAllTest.end()
        } catch (e) {
            getAllTest.pass()
            getAllTest.end()
        }
    })

    participantTest.end()

})