import { LinkButton } from "../components/ui/button";

export const metadata = {
  title: "Not Found - " + process.env.NEXT_PUBLIC_APP_NAME,
};

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-5">
      <h1
        className="text-9xl font-black text-center w-max bottom-full mb-[-1rem]"
        style={{
          textShadow: "1px 5px 14px rgba(0,0,0,0.36)",
        }}
      >
        404
      </h1>
      <p className="text-center">{`This page doesn't exist`}</p>
      <div className="flex gap-2">
        <LinkButton href="/">Main site</LinkButton>
        <LinkButton href="/app/home" variant={"secondary"}>
          Home screen
        </LinkButton>
      </div>
    </div>
  );
}
