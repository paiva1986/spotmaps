'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Quota extends Model {
  plan () {
    return this.belongsTo('App/Models/Plan')
  }

  tracker () {
    return this.hasOne('App/Models/Tracker')
  }

  user () {
    return this.belongsTo('App/Models/User').pivotModel('App/Models/UserQuota')
  }
}

module.exports = Quota
