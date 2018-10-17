'use strict'

exports.up = async (knex) => {
    return await knex.schema.hasTable('transfer').then(async function(exists) {
        if (!exists) {
            return await knex.schema.createTable('transfer', (t) => {
                t.increments('transferId').primary().notNullable()
                t.integer('participantId', 128).notNullable()
                t.foreign('participantId').references('participantId').inTable('participant')
                t.decimal('amount', 18, 2).notNullable()
                t.dateTime('createdDate').defaultTo(knex.fn.now()).notNullable()
            })
        }
    })
}

exports.down = async (knex) => {
    return await knex.schema.dropTableIfExists('transfer')
}
