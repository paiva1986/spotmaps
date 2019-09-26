'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LeadSchema extends Schema {
  up () {
    this.create('leads', table => {
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('question_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('questions')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('answer').notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('leads')
  }
}

module.exports = LeadSchema
