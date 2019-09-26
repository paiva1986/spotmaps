'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehicle extends Model {
  client () {
    return this.belongsTo('App/Models/Client').pivotModel('App/Models/Contract')
  }

  tracker () {
    return this.hasOne('App/Models/Tracker')
  }

  company () {
    return this.belongsTo('App/Models/Company')
  }
}

module.exports = Vehicle
