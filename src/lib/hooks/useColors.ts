"use client";

import { TokenContext } from "@/src/app/providers";
import { useUser } from "@clerk/nextjs";
import { useContext } from "react";
import useSWR from "swr";

export function useColors(id?: number | string) {
  const token = useContext(TokenContext);
  const { user } = useUser();
  const url = `/api/canvas/${user?.unsafeMetadata?.district}/api/v1/users/self/colors`;

  const fetcher = ([url, ...args]: any[]) =>
    fetch(url, ...args).then((res) => res.json());
  const { data, isLoading, isValidating, error, mutate } = useSWR(
    [url + (id ? "/course_" + id : "") + `?access_token=${token}`],
    fetcher,
    { refreshInterval: 5000 }
  );
  if (token != undefined && (user != undefined || id != undefined))
    return { data, isLoading, isValidating, error, mutate };
  else return { data: [], isLoading: true, isValidating: true, error: null };
}
