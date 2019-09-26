'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', table => {
      table.string('name').notNullable()
      table.date('brithday')
      table.string('identify').notNullable()
      table.string('type_identify')
      table.string('street')
      table.string('number')
      table.string('complement')
      table.string('zipcode')
      table.string('city')
      table.string('state')
      table.string('country')
      table.string('phone')
      table.string('email').notNullable()
      table.string('status')
      table
        .integer('company_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
