import { LinkButton } from "../components/ui/button";

export const metadata = {
  title: "Not Found - " + process.env.NEXT_PUBLIC_APP_NAME,
};

export default function NotFound() {
  return (
    <div className="w-screen h-full flex justify-center items-center flex-col gap-5">
      <div className="relative">
        <h1 className="absolute text-9xl font-black text-center w-full bottom-full">
          404
        </h1>
        <p style={{ boxShadow: "0px -47px 77px -41px rgba(255,255,255,1);" }}>
          The resource you requested does not exist
        </p>
      </div>
      <LinkButton href="/">Back home</LinkButton>
    </div>
  );
}
