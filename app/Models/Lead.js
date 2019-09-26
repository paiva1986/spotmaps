'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lead extends Model {
  client () {
    return this.belongsTo('App/Models/Client')
  }

  questions () {
    return this.belongsToMany('App/Models/Question')
  }
}

module.exports = Lead
