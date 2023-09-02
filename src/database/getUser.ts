import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { db } from "./db";
import { users } from "./schema";
import { useSession } from "next-auth/react";

export async function getUser() {
  const session = await getServerSession();

  const user = await db.query.users.findFirst({
    where: eq(users.email, session?.user?.email || ""),
  });
  return user;
}

export function useUser() {
  const session = useSession();
  async function fetchUser({ session }: { session?: any }) {
    if (session?.status != "authenticated") {
      // setTimeout(fetchUser, 100);
      console.log("Waiting for session");
      return;
    }
    console.log("Fetching", session?.status);
    const data = await db.query.users.findFirst({
      where: eq(users.email, session?.data?.user?.email || ""),
    });
    return data;
  }
  console.log("Querying", session);
  const query = useQuery({
    queryKey: ["user", session],
    queryFn: async () => await fetchUser({ session }),
    staleTime: 1000 * 60 * 60 * 24,
  });
  console.log("Queried", query.data);
  return query;
}
