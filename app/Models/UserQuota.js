'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserQuota extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  quota () {
    return this.belongsTo('App/Models/Quota')
  }
}

module.exports = UserQuota
