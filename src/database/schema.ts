import { relations } from "drizzle-orm";
import {
  date,
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { AdapterAccount } from "next-auth/adapters";

export const users = pgTable("user", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  password: text("password").notNull(),
  role: text("role"),
  canvas_api_token: text("canvas_api_token"),
  canvas_base_url: text("canvas_base_url"),
});

export const usersRelations = relations(users, ({ many }) => ({
  courses: many(courses),
  reads: many(reads),
}));

export const reads = pgTable("reads", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  userId: uuid("user_id"),
  courseId: uuid("course_id"),
  createdAt: date("created_at"),
  title: text("title"),
  body: text("body"),
  author: text("author"),
});

export const courses = pgTable("courses", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  userId: uuid("user_id"),
  name: text("name"),
});

export const coursesRelations = relations(courses, ({ one }) => ({
  user: one(users, {
    fields: [courses.userId],
    references: [users.id],
  }),
}));
export const readsRelations = relations(reads, ({ one }) => ({
  user: one(users, {
    fields: [reads.userId],
    references: [users.id],
  }),
  course: one(courses, {
    fields: [reads.courseId],
    references: [courses.id],
  }),
}));

export const accounts = pgTable(
  "account",
  {
    userId: uuid("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);
