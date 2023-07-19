import { redirect } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { UnsplashImage } from "./image";
import { SignIn } from "./sign-in";
import { SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - " + process.env.NEXT_PUBLIC_APP_NAME,
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const user = await currentUser();
  if (user) {
    redirect("/app/home");
  }

  return (
    <>
      <div className="flex flex-row max-w-[100vw] min-h-screen">
        <div className="flex-col p-8 rounded-lg grow lg:min-w-[500px] max-w-[100vw] flex justify-center items-center overflow-y-scroll">
          <div className="flex flex-col gap-0 max-w-[400px] min-h-max">
            <h1 className="mt-0 mb-5 font-bold leading-tight text-4xl">
              Welcome back to {process.env.NEXT_PUBLIC_APP_NAME}
            </h1>
            <p className="text-muted-foreground">
              {
                "Let's get you signed in. Please enter your details. If you don't have an account, you can make one."
              }
            </p>
          </div>
          <Tabs defaultValue="login" className="w-[min(100%,400px)] min-h-max">
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
              <SignUp
                appearance={{
                  elements: {
                    formFieldInput:
                      "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary transition-[border] disabled:cursor-not-allowed disabled:opacity-50",
                    formButtonPrimary:
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                  },
                }}
              />
            </TabsContent>
          </Tabs>
        </div>
        <UnsplashImage className="w-0 hidden lg:block lg:w-[75vw] max-h-[100%] relative" />
      </div>
    </>
  );
}
