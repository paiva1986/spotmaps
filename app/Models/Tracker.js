'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tracker extends Model {
  quota () {
    return this.hasOne('App/Models/Quota')
  }

  vehicle () {
    return this.hasOne('App/Models/Vehicle')
  }
}

module.exports = Tracker
