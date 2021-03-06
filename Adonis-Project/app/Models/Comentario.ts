import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Comentario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public comentario: string

  @column()
  public autor: number

  @column()
  public post: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
