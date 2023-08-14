import { AvatarStack } from "@/src/components/avatarStack";
import { Button, LinkButton } from "@/src/components/ui/button";
import { Course } from "@/src/lib/types";
import {
  IconChevronRight,
  IconComponents,
  IconDotsVertical,
  IconNotebook,
} from "@tabler/icons-react";
import Image from "next/image";
import PageWrapper from "../../pagewrapper";
import { Skeleton } from "@/src/components/ui/skeleton";

export default async function Class({ params }: { params: { id: string } }) {
  return (
    <PageWrapper>
      <Skeleton className="h-80 relative w-full"></Skeleton>
      <div className="m-8">
        <div className="flex items-center justify-between w-full">
          <Skeleton className="mt-0 text-4xl font-bold h-10 w-72"></Skeleton>
          <Skeleton className="w-9 h-9 aspect-square" />
        </div>
        <Skeleton className="mt-2 w-[26px] h-[26px] rounded-full" />
        <Skeleton className="w-full h-12" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </div>
      </div>
    </PageWrapper>
  );
}
