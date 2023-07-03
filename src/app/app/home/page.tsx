"use client";

import { Card, CardDescription, CardTitle } from "@/src/components/ui";
import PageWrapper from "../pagewrapper";
import { Separator } from "@/src/components/ui/separator";

// export const metadata: Metadata = {
//   title: 'Home - ' + process.env.NEXT_PUBLIC_APP_NAME,
// }

export default function Page() {
  return (
    <PageWrapper>
      <div className="m-8">
        <h1 className="mt-0 text-4xl font-bold">Home</h1>
        <Separator className="my-4" />
        <div className="flex flex-row gap-2">
          <Card className="p-6 w-96 h-32">
            <CardDescription>Totally Real Class</CardDescription>
            <CardTitle className="text-5xl">98%</CardTitle>
          </Card>
          <Card>
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium">
                Subscriptions
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </div>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}
