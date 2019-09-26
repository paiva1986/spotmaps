'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Company {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {
    const slug = request.header('COMPANY')

    let company = null

    if (slug) {
      company = await auth.user
        .companies()
        .where('slug', slug)
        .first()
    }

    if (!company) {
      return response.status(401).send()
    }

    auth.user.currentCompany = company.id
    request.company = company

    await next()
  }
}

module.exports = Company
