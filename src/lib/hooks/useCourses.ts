"use client";

import { useUser } from "@clerk/nextjs";
import useSWR from "swr";

export function useCourses(id?: number | string) {
  const { user } = useUser();
  const url = `/api/canvas/${user?.unsafeMetadata.district}/api/v1/courses`;

  const fetcher = ([url, ...args]: any[]) =>
    fetch(url, ...args).then((res) => res.json());
  const { data, isLoading, isValidating, error, mutate } = useSWR(
    [
      url +
        (id ? "/" + id : "") +
        `?access_token=${user?.unsafeMetadata.canvasToken}&include[]=teachers&include[]=course_image&include[]=banner_image&include[]=public_description`,
    ],
    fetcher,
    { refreshInterval: 5000 }
  );
  if (
    user?.unsafeMetadata.canvasToken != undefined &&
    (user != undefined || id != undefined)
  )
    return { data, isLoading, isValidating, error, mutate };
  else return { data: [], isLoading: true, isValidating: true, error: null };
}
