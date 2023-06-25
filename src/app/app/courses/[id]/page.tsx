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
import { currentUser } from "@clerk/nextjs";
import { CourseSettings } from "../../courseSettingsDialog";

export default async function Class({ params }: { params: { id: string } }) {
  const user = await currentUser();
  const token = user?.unsafeMetadata?.canvasToken;

  if (user == null) {
    return;
  }

  const data = await fetch(
    `${process.env.URL}/api/canvas/${user?.unsafeMetadata?.district}/api/v1/courses/${params.id}?access_token=${token}&include[]=teachers&include[]=course_image&include[]=banner_image&include[]=public_description`
  ).then((res) => res.json() as Promise<Course>);
  console.log(user.unsafeMetadata);

  return (
    <PageWrapper>
      <div
        className="h-80 relative w-full"
        style={{ backgroundColor: data?.course_color }}
      >
        {data?.image_download_url ? (
          <Image
            className="object-cover object-center"
            alt="Course Image"
            fill
            src={data?.banner_image_download_url || data?.image_download_url}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="m-8">
        <div className="flex items-center justify-between w-full">
          <h1 className="mt-0 text-4xl font-bold">{data?.name}</h1>
          <CourseSettings user={user} course={data} />
        </div>
        <AvatarStack people={data?.teachers} />
        <p>{data?.public_description}</p>
        <div className="flex flex-col gap-2">
          <LinkButton
            href={`./${params.id}/assignments`}
            variant={"outline"}
            className="justify-between w-full"
          >
            <div className="flex flex-row items-center">
              <IconNotebook className="h-4 w-4 mr-2" />
              Assignments
            </div>
            <IconChevronRight className="h-4 w-4" />
          </LinkButton>
          <LinkButton
            href={`./${params.id}/modules`}
            variant={"outline"}
            className="justify-between w-full"
          >
            <div className="flex flex-row items-center">
              <IconComponents className="h-4 w-4 mr-2" />
              Modules
            </div>
            <IconChevronRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </PageWrapper>
  );
}
