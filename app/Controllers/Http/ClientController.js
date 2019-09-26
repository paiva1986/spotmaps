'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clients
 */
class ClientController {
  /**
   * Show a list of all clients.
   * GET clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const clients = request.company.clients().fetch()

    return clients
  }

  /**
   * Create/save a new client.
   * POST clients
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
      'email',
      'pendete',
      'status'
    ])

    const client = request.company.clients().create(data)

    return client
  }

  /**
   * Display a single client.
   * GET clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request }) {
    const project = await request.company
      .clients()
      .where('id', params.id)
      .first()

    return project
  }

  /**
   * Update client details.
   * PUT or PATCH clients/:id
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
      'email',
      'pendete',
      'status'
    ])

    const project = await request.company
      .clients()
      .where('id', params.id)
      .first()

    project.merge(data)

    await project.save()

    return project
  }

  /**
   * Delete a client with id.
   * DELETE clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request }) {
    const project = await request.company
      .clients()
      .where('id', params.id)
      .first()

    await project.delete()
  }
}

module.exports = ClientController
