'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', table => {
      table.string('name').notNullable()
      table.date('brithday')
      table.string('identify').notNullable().unique()
      table.string('type_identify')
      table.string('street')
      table.string('number')
      table.string('complement')
      table.string('zipcode')
      table.string('city')
      table.string('state')
      table.string('country')
      table.string('phone')
      table
        .string('email')
        .notNullable()
        .unique()
      table
        .string('slug')
        .notNullable()
        .unique()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
