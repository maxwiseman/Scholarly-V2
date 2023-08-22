"use server";

import { db } from "@/src/database/db";
import { reads, users } from "@/src/database/schema";
import { sql } from "drizzle-orm";
import { getServerSession } from "next-auth";

export default async function getReads() {
  "use server";
  const session = await getServerSession();

  if (!session?.user?.email) return;

  const data = await db.query.reads.findMany({
    where: sql`${reads.userId}::text = '5fb341d4-2e7e-4adc-93bf-c756c00ea700'`,
    with: {
      course: true,
    },
  });
  return data;
}
