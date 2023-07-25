"use client";

import { Card, CardDescription, CardTitle } from "@/src/components/ui/card";
import PageWrapper from "../pagewrapper";
import { Separator } from "@/src/components/ui/separator";
import { IconClipboardText } from "@tabler/icons-react";
import { Percent } from "lucide-react";
import dynamic from "next/dynamic";
import { Area } from "recharts";

// export const metadata: Metadata = {
//   title: 'Home - ' + process.env.NEXT_PUBLIC_APP_NAME,
// }

const AreaChart = dynamic(
  () => import("recharts").then((recharts) => recharts.AreaChart),
  { ssr: false }
);

export default function Page() {
  return (
    <PageWrapper>
      <div className="m-8">
        <h1 className="mt-0 text-4xl font-bold">Home</h1>
        <Separator className="my-4" />
        <div className="flex flex-row w-full justify-between gap-2 flex-wrap">
          <Card className="min-w-72 flex flex-row items-center">
            <div className="min-w-max w-full">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-0 w-max">
                <h3 className="tracking-tight text-sm font-medium">
                  Average Grade
                </h3>
                {/* <Percent className="w-4 h-4 text-accent-foreground" /> */}
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-muted-foreground">
                  +50% from last month
                </p>
              </div>
            </div>
            <Separator orientation="vertical" className="h-3/4" />
            <div className="h-full px-6 flex justify-center items-center">
              <AreaChart
                width={150}
                height={70}
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
                className="rounded-b-md overflow-hidden"
              >
                <defs>
                  <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                    <stop offset="30%" stopColor="#6584FF" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.5} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </div>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
