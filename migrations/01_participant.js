'use strict'

exports.up = async (knex) => {
    return await knex.schema.hasTable('participant').then(async function(exists) {
        if (!exists) {
            return await knex.schema.createTable('participant', (t) => {
                t.increments('participantId').primary().notNullable()
                t.string('participantName', 128).notNullable()
                t.dateTime('createdDate').defaultTo(knex.fn.now()).notNullable()
            })
        }
    })
}

exports.down = async (knex) => {
    return await knex.schema.dropTableIfExists('participant')
}
