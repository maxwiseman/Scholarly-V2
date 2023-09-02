import { AvatarStack } from "@/src/components/avatarStack";
import { LinkButton } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import { Course } from "@/src/lib/types";
import {
  IconChevronRight,
  IconComponents,
  IconNotebook,
} from "@tabler/icons-react";
import Image from "next/image";
import SettingsButton from "./settingsButton";
import { getUser } from "@/src/database/getUser";

// export async function generateMetadata({
//   params,
// }: {
//   params: { courseId: string };
// }) {
//   const token = "user?.unsafeMetadata?.canvasToken";
//   const data = await fetch(
//     `${
//       process.env.URL
//     }/api/canvas/${"user?.unsafeMetadata?.district"}/api/v1/courses/${
//       params.courseId
//     }?access_token=${token}&include[]=teachers&include[]=course_image&include[]=banner_image&include[]=public_description`
//   ).then((res) => res.json() as Promise<Course>);
//   return {
//     title: data?.name + " - " + process.env.NEXT_PUBLIC_APP_NAME,
//   };
// }

export default async function Class({
  params,
}: {
  params: { courseId: string };
}) {
  const user = await getUser();

  const data = await fetch(
    `${process.env.URL}/api/canvas/${user?.canvas_base_url}/api/v1/courses/${params.courseId}?access_token=${user?.canvas_api_token}&include[]=teachers&include[]=course_image&include[]=banner_image&include[]=public_description`
  ).then((res) => res.json() as Promise<Course>);
  const userdata = await fetch(
    `${process.env.URL}/api/canvas/${user?.canvas_base_url}/api/v1/users/self/colors/course_${params.courseId}?access_token=${user?.canvas_api_token}`
  ).then((res) => res.json() as Promise<{ hexcode: string }>);

  return (
    <div>
      <div
        className="h-80 relative w-full"
        style={{ backgroundColor: userdata.hexcode }}
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
          <h1 className="mt-0 text-4xl font-extrabold leading-tight tracking-tight">
            {data?.name}
          </h1>
          <SettingsButton course={data} />
        </div>
        <div className="mt-2 flex gap-1 flex-col">
          <div className="flex w-full items-center gap-2">
            Teachers:
            <AvatarStack people={data?.teachers} />
          </div>
          <div className="flex w-full items-center gap-2 h-8">Grade: 98%</div>
        </div>
        <Separator className="my-4" />
        <p>{data?.public_description}</p>
        <div className="flex flex-col gap-2">
          <LinkButton
            href={`./${params.courseId}/assignments`}
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
            href={`./${params.courseId}/modules`}
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
    </div>
  );
}
