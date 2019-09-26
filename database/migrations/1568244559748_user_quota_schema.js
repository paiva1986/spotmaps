'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserQuotaSchema extends Schema {
  up () {
    this.create('user_quotas', table => {
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('quota_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('quotas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_quotas')
  }
}

module.exports = UserQuotaSchema
