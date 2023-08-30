"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: 'Classes - ' + process.env.NEXT_PUBLIC_APP_NAME,
// }

export default function Page() {
  return (
    <>
      <h1 className="mt-0 text-4xl font-bold">Classes</h1>
      <Link href={"/app/home"}>
        <Button>Test</Button>
      </Link>
    </>
  );
}
