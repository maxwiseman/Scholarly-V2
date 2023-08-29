import { redirect } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { UnsplashImage } from "./image";
import { SignIn } from "./sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - " + process.env.NEXT_PUBLIC_APP_NAME,
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: any;
}) {
  // if (user) {
  //   redirect("/app/home");
  // }

  return (
    <>
      <div className="flex flex-row max-w-[100vw] max-h-screen h-screen">
        <div className="h-full flex items-center">
          <div className="flex items-start max-h-screen min-w-max overflow-y-scroll no-scrollbar">
            <div className="flex-col p-8 rounded-lg lg:min-w-[500px] max-w-[100vw] flex justify-center items-center">
              <div className="flex flex-col gap-0 max-w-[400px] h-max">
                <h1 className="mt-0 mb-5 font-bold leading-tight text-4xl">
                  Welcome back to {process.env.NEXT_PUBLIC_APP_NAME}
                </h1>
                <p className="text-muted-foreground">
                  {
                    "Let's get you signed in. Please enter your details. If you don't have an account, you can make one."
                  }
                </p>
              </div>
              <Tabs
                defaultValue="login"
                className="w-[min(100%,400px)] min-h-max"
              >
                <TabsList className="w-[100%] mb-4 mt-4">
                  <TabsTrigger className="grow" value="login">
                    Sign in
                  </TabsTrigger>
                  <TabsTrigger className="grow" value="signup">
                    Sign up
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <SignIn redirectURL={searchParams.redirect_url} />
                </TabsContent>
                <TabsContent value="signup">
                  <p>Sign up</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <UnsplashImage className="w-0 hidden lg:block lg:w-[75vw] max-h-[100%] relative" />
      </div>
    </>
  );
}
