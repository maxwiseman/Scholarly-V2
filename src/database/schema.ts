import { pgTable, serial, text, varchar, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  canvas_api_token: text('canvas_api_token'),
  canvas_base_url: text('canvas_base_url'),
})
