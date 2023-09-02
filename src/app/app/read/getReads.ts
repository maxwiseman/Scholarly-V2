"use server";

import { db } from "@/src/database/db";
import { reads, users } from "@/src/database/schema";
import { useQuery } from "@tanstack/react-query";
import { eq, sql } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default async function getReads() {
  "use server";
  const session = await getServerSession();

  if (!session?.user?.email) return;

  const data = await db.query.reads.findMany({
    where: sql`${reads.userId}::text = '5fb341d4-2e7e-4adc-93bf-c756c00ea700'`,
    // with: {
    //   course: true,
    // },
  });
  // const data = await db.execute(
  //   sql`select * from ${reads} where ${reads.userId}::text = '5fb341d4-2e7e-4adc-93bf-c756c00ea700'`
  // );
  // console.log(JSON.stringify(data));
  return data;
}

export function useReads(id?: string) {
  async function fetchReads(id?: string) {
    console.log("Fetching");
    const data = await db.query.reads.findMany({
      where: id ? eq(reads.id, id) : undefined,
    });
    return data;
  }
  console.log("Querying");
  const query = useQuery({
    queryKey: ["reads", id],
    queryFn: async () => await fetchReads(id),
    staleTime: 1000 * 60 * 60 * 24,
  });
  console.log("Queried", query.data);
  return query;
}
