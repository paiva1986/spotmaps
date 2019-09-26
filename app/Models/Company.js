'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        slug: 'name'
      },
      strategy: 'dbIncrement',
      disableUpdates: false
    })
  }

  users () {
    return this.belongsToMany('App/Models/User').pivotModel(
      'App/Models/UserCompany'
    )
  }

  contracts () {
    return this.hasMany('App/Models/Contract')
  }

  clients () {
    return this.hasMany('App/Models/Client')
  }
}

module.exports = Company
