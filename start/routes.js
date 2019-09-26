'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Route.post('users', 'UserController.store').validator('User')

Route.post('sessions', 'SessionController.store')
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')
Route.get('questions', 'QuestionController.index')

Route.group(() => {
  Route.resource('companies', 'CompanyController').apiOnly()
  Route.resource('questions', 'QuestionController')
    .apiOnly()
    .except('index')
}).middleware('auth')

Route.group(() => {
  Route.post('users', 'UserController.store').validator('User')

  Route.resource('clients', 'ClientController').apiOnly()
}).middleware(['auth', 'company'])
