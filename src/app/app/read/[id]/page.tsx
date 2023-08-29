import { Separator } from "@/src/components/ui/separator";
import { db } from "@/src/database/db";
import { reads, users } from "@/src/database/schema";
import { cn } from "@/src/lib/utils";
import { eq } from "drizzle-orm";
import PageWrapper from "../../pagewrapper";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";

export default async function Page(props: { params: { id: string } }) {
  const session = await getServerSession();

  // TODO This currently queries the entire database
  // Fix this so that it only queries the current users' reads instead of every single entry
  const data = await db.query.reads.findFirst({
    where: eq(reads.id, props.params.id),
    with: {
      course: true,
      user: true,
    },
  });

  const date = new Date(data?.createdAt || "");
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (data?.user?.email == session?.user?.email)
    return (
      <PageWrapper>
        <div className="m-8 max-w-full flex flex-row justify-center items-center">
          <div className="max-w-[840px] w-full">
            <span className="mb-4 text-muted-foreground tracking-wide font-semibold text-sm">
              {data?.course?.name}
            </span>
            <h1 className="mt-0 text-4xl font-bold mb-2">{data?.title}</h1>
            <div className="flex gap-2 flex-row">
              <span className="text-muted-foreground text-base">
                By: {data?.user?.name}
              </span>
              <span className="w-[2px] h-[2px] rounded-full bg-muted-foreground inline-block self-center" />
              <time className="text-muted-foreground text-base">
                {date.toLocaleDateString("en-US", options)}
              </time>
            </div>
            <Separator className="my-7" />
            <div
              className={cn(styles.reading, "space-y-7")}
              dangerouslySetInnerHTML={{ __html: data?.body as string }}
            ></div>
          </div>
        </div>
      </PageWrapper>
    );
}
