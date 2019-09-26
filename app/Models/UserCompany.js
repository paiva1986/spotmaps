'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserCompany extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  company () {
    return this.belongsTo('App/Models/Company')
  }
}

module.exports = UserCompany
