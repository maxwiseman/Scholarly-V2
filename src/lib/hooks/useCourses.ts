"use client";

import { db } from "@/src/database/db";
import { useUser } from "@/src/database/getUser";
import { users } from "@/src/database/schema";
import { eq, sql } from "drizzle-orm";
import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";

export function useCourses(id?: number | string) {
  const url = `/api/canvas/${"knox"}/api/v1/courses`;

  const session = useSession();
  const user = useUser();

  const fetcher = ([url, ...args]: any[]) =>
    fetch(url, ...args).then((res) => res.json());
  const { data, isLoading, isValidating, error, mutate } = useSWR(
    [
      url +
        (id ? "/" + id : "") +
        `?access_token=${user.data?.canvas_api_token}&include[]=teachers&include[]=course_image&include[]=banner_image&include[]=public_description`,
    ],
    fetcher,
    { refreshInterval: 5000 }
  );
  if (
    "user?.unsafeMetadata.canvasToken" != undefined &&
    ("user" != undefined || id != undefined)
  )
    return { data, isLoading, isValidating, error, mutate };
  else return { data: [], isLoading: true, isValidating: true, error: null };
}
