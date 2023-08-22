import { Separator } from "@/src/components/ui/separator";
import { db } from "@/src/database/db";
import { courses, reads } from "@/src/database/schema";
import { sql } from "drizzle-orm";
import PageWrapper from "../pagewrapper";
import MenuCard from "./menuCard";
import NewModal from "./newModal";
import getReads from "./getReads";

export default async function Page() {
  const data = await db.query.reads.findMany({
    where: sql`${reads.userId}::text = '5fb341d4-2e7e-4adc-93bf-c756c00ea700'`,
    // with: {
    //   course: true,
    // },
  });

  return (
    <PageWrapper>
      <div className="m-8">
        <div className="flex justify-between items-center mx-2">
          <h1 className="mt-0 text-4xl font-bold">Read</h1>
          <NewModal />
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2">
          {data &&
            data?.map((item: any, index: number) => {
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
        </div>
      </div>
    </PageWrapper>
  );
}
