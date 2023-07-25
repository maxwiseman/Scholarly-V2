import Image from "next/image";
import { LinkButton } from "../../components/ui/button";

export const metadata = {
  title: "Not Found - " + process.env.NEXT_PUBLIC_APP_NAME,
};

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-5">
      <div className="relative">
        {/* <h1 className="absolute text-9xl font-black text-center w-full bottom-full">
          404
        </h1> */}
        <div className="h-72 w-[34rem] relative">
          <Image
            className="object-cover"
            src={"/404.gif"}
            alt="404: Page not found"
            fill
          />
        </div>
        <p
          style={{ boxShadow: "0px -47px 77px -41px rgba(255,255,255,1);" }}
          className="text-center"
        >
          The resource you requested does not exist
        </p>
      </div>
      <LinkButton href="/app/home">Back home</LinkButton>
    </div>
  );
}
