'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])

    const user = await User.create(data)

    await user.companies().attach(request.company.id)

    return user
  }
}

module.exports = UserController
