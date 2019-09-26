'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contract extends Model {
  client () {
    return this.belongsTo('App/Models/Client')
  }

  vehicle () {
    return this.belongsTo('App/Models/Vehicle')
  }

  plan () {
    return this.belongsTo('App/Models/Plan')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Contract
