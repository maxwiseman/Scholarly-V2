import { pgTable, serial, text, varchar, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
})
