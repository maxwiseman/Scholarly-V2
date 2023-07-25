import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  varchar,
  uuid,
  date,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email"),
  created_at: date("created_at"),
  role: text("role"),
  canvas_api_token: text("canvas_api_token"),
  canvas_base_url: text("canvas_base_url"),
});

export const usersRelations = relations(users, ({ many }) => ({
  courses: many(courses),
}));

export const courses = pgTable("courses", {
  id: text("id").primaryKey(),
  userId: text("user_id"),
  name: text("name"),
});

export const coursesRelations = relations(courses, ({ one }) => ({
  user: one(users, {
    fields: [courses.userId],
    references: [users.id],
  }),
}));
