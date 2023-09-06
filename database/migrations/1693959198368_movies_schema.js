'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoviesSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('duration').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MoviesSchema
