'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
  leads () {
    return this.hasMany('App/Models/Lead')
  }

  vehicles () {
    return this.hasMany('App/Models/Vehicle').pivotModel('App/Models/Contract')
  }
}

module.exports = Client
