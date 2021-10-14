import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Comentarios extends BaseSchema {
  protected tableName = 'comentarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.text('comentario', 'longtext')
      table
      .integer('autor')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE')
      table
      .integer('post')
      .unsigned()
      .references('posts.id')
      .onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
