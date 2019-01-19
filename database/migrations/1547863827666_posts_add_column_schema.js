'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsAddColumnSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      // alter table
      table.text('other')
    })
  }

  down () {
    this.table('posts', (table) => {
      // reverse alternations
      table.dropColumn('other')
    })
  }
}

module.exports = PostsAddColumnSchema
