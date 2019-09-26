'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Company = use('App/Models/Company')

/**
 * Resourceful controller for interacting with companies
 */
class CompanyController {
  /**
   * Show a list of all companies.
   * GET companies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const companies = await Company.query().fetch()

    return companies
  }

  /**
   * Create/save a new company.
   * POST companies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only([
      'name',
      'brithday',
      'identify',
      'type_identify',
      'street',
      'number',
      'complement',
      'zipcode',
      'city',
      'state',
      'country',
      'phone',
      'email'
    ])

    const company = Company.create(data)

    return company
  }

  /**
   * Display a single company.
   * GET companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const company = await Company.query()
      .where('id', params.id)
      .first()

    return company
  }

  /**
   * Update company details.
   * PUT or PATCH companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const data = request.only([
      'name',
      'brithday',
      'identify',
      'type_identify',
      'street',
      'number',
      'complement',
      'zipcode',
      'city',
      'state',
      'country',
      'phone',
      'email'
    ])

    const company = await Company.query()
      .where('id', params.id)
      .first()

    company.merge(data)

    await company.save()

    return company
  }

  /**
   * Delete a company with id.
   * DELETE companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const company = await Company.query()
      .where('id', params.id)
      .first()

    await company.delete()
  }
}

module.exports = CompanyController
