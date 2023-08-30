import { Separator } from "@/src/components/ui/separator";
import { db } from "@/src/database/db";
import { getServerSession } from "next-auth";
import MenuCard from "./menuCard";
import NewModal from "./newModal";

export default async function Page() {
  const session = await getServerSession();

  // ! This currently queries the entire database
  // ! Fix this so that it only queries the current users' reads instead of every single entry
  const data = await db.query.reads.findMany({
    // TODO where: eq(users.email, session?.user?.email || ""),
    with: {
      course: true,
      user: true,
    },
  });

  return (
    <>
      <div className="m-8">
        <div className="flex justify-between items-center mx-2">
          <h1 className="mt-0 text-4xl font-bold">Read</h1>
          <NewModal />
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2">
          {data &&
            data?.map((item: any, index: number) => {
              if (item.user.email == session?.user?.email)
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
          {data?.length == 0 && (
            <div className="w-full h-full flex justify-center items-center">
              <span className="text-muted-foreground">Nothing here yet!</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
