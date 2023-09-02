"use client";

import { Separator } from "@/src/components/ui/separator";
import { useSession } from "next-auth/react";
import { useReads } from "./getReads";
import MenuCard from "./menuCard";
import NewModal from "./newModal";

export default function Page() {
  const session = useSession();

  // ! This currently queries the entire database
  // ! Fix this so that it only queries the current users' reads instead of every single entry
  // const data = await db.query.reads.findMany({
  //   // TODO where: eq(users.email, session?.user?.email || ""),
  //   with: {
  //     course: true,
  //     user: true,
  //   },
  // });

  const reads = useReads();

  return (
    <>
      <div className="m-8">
        <div className="flex justify-between items-center mx-2">
          <h1 className="mt-0 text-4xl font-bold">Read</h1>
          <NewModal />
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2">
          {reads.data &&
            reads.data?.map((item: any, index: number) => {
              if (item.user.email == session?.data?.user?.email)
                return (
                  <MenuCard
                    key={index}
                    title={item.title || ""}
                    description={item.body || ""}
                    class={item.course?.name || ""}
                    href={item.id}
                  />
                );
            })}
          {reads.data?.length == 0 && (
            <div className="w-full h-full flex justify-center items-center">
              <span className="text-muted-foreground">Nothing here yet!</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
