'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/movie', 'MovieController.index')
Route.post('/movie', 'MovieController.store')
Route.put('/movie/:id', 'MovieController.update')
Route.delete('/movie/:id', 'MovieController.destroy')


