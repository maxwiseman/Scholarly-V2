import { Card, CardDescription, CardTitle } from "@/src/components/ui";
import Link from "next/link";

export default function MenuCard(props: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <>
      <Link href={props.href}>
        <Card className="min-h-32 p-5">
          <div className="flex gap-2 flex-col">
            <CardTitle className="text-lg">{props.title}</CardTitle>
            <CardDescription className="line-clamp-3">
              {props.description}
            </CardDescription>
          </div>
        </Card>
      </Link>
    </>
  );
}
