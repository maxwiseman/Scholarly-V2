import { Header } from "./header";
import Navbar from "./navbar";
import PageWrapper from "./pagewrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col w-full max-h-screen h-full">
        <Header />
        <div className="flex flex-row gap-0 h-screen max-h-screen overflow-clip">
          <Navbar />
          {/* <div className="min-w-[18rem]" /> */}
          <div className="grow h-full max-h-screen overflow-hidden w-full">
            <PageWrapper>{children}</PageWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
