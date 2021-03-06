'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('name').notNullable()
      table.date('brithday')
      table.string('identify')
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
      table.string('password').notNullable()
      table.string('token')
      table.timestamp('token_created_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
