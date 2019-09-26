'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuotaSchema extends Schema {
  up () {
    this.create('quotas', table => {
      table
        .integer('tracker_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('trackers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('plan_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('plans')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('status').notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('quotas')
  }
}

module.exports = QuotaSchema
