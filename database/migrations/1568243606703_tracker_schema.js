'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrackerSchema extends Schema {
  up () {
    this.create('trackers', table => {
      table.string('maker')
      table.string('description').notNullable()
      table.string('imei').notNullable()
      table.string('chip')
      table.string('line')
      table.string('operator')
      table
        .boolean('workshop')
        .notNullable()
        .defaultTo(0)
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('trackers')
  }
}

module.exports = TrackerSchema
