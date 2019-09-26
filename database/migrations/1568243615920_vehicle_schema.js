'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehicleSchema extends Schema {
  up () {
    this.create('vehicles', table => {
      table.string('maker')
      table.string('description').notNullable()
      table.string('board').notNullable()
      table.string('chassi')
      table.string('year')
      table.string('color')
      table.string('fuel')
      table
        .integer('company_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('tracker_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('trackers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('vehicles')
  }
}

module.exports = VehicleSchema
