"use client";

import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import { IconPlus } from "@tabler/icons-react";
import PageWrapper from "../pagewrapper";
import MenuCard from "./menuCard";
import NewModal from "./newModal";
import getReads from "./getReads()";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<
    | {
        id: string;
        userId: string | null;
        courseId: string | null;
        createdAt: string | null;
        title: string | null;
        body: string | null;
        course: {
          id: string;
          name: string | null;
          userId: string | null;
        } | null;
      }[]
    | undefined
  >();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getReads();
      setData(result);
    };
    fetchData();
  });

  return (
    <PageWrapper>
      <div className="m-8">
        <div className="flex justify-between items-center mx-2">
          <h1 className="mt-0 text-4xl font-bold">Read</h1>
          <NewModal>
            <Button>
              <IconPlus className="w-4 h-4" />
              New
            </Button>
          </NewModal>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2">
          {data &&
            data?.map((item, index) => {
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
