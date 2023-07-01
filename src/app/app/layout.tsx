import { Header } from "./header";
import Navbar from "./navbar";
import PageWrapper from "./pagewrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="flex flex-row gap-0 h-full">
          <Navbar />
          <div className="min-w-[18rem]" />
          <div className="grow h-full w-full">
            <PageWrapper>{children}</PageWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
