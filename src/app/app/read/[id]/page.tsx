import { Separator } from "@/src/components/ui/separator";
import styles from "./page.module.css";
import PageWrapper from "../../pagewrapper";
import { cn } from "@/src/lib/utils";

export default function Page(props: { params: { id: string } }) {
  return (
    <PageWrapper>
      <div className="m-8 max-w-full flex flex-row justify-center items-center shrink">
        <div className="max-w-[580px] shrink">
          <span className="mb-4 text-muted-foreground tracking-wide font-semibold text-sm">
            English 1
          </span>
          <h1 className="mt-0 text-4xl font-bold mb-2">Article Title</h1>
          <div className="flex gap-2 flex-row">
            <span className="text-muted-foreground text-base">
              By: Author Name
            </span>
            <span className="w-[2px] h-[2px] rounded-full bg-muted-foreground inline-block self-center" />
            <time className="text-muted-foreground text-base">
              March 14th, 2023
            </time>
          </div>
          <Separator className="my-7" />
          <div className={cn(styles.reading, "space-y-7")}>
            <p>
              Quis deserunt Lorem dolore. Incididunt aute mollit amet aliqua
              sint dolor labore commodo cillum aute. Est laborum voluptate
              minim. Dolor incididunt cupidatat id laboris voluptate incididunt
              proident laboris duis incididunt. Duis dolore est sit esse sint
              sit proident veniam et labore. Duis et eu tempor laborum velit
              reprehenderit irure magna anim reprehenderit nisi dolor. Et nulla
              aliquip eiusmod cillum do culpa sunt consectetur ipsum sit labore
              ex sit anim velit. Nisi cillum ipsum cupidatat ea minim aliquip ex
              ea ipsum.
            </p>
            <h2>Test heading 2</h2>
            <p>
              Fugiat ad magna minim irure nostrud reprehenderit do incididunt
              quis consectetur proident et enim et anim. Magna esse est ipsum
              ipsum culpa nostrud anim commodo non. Et veniam cillum anim
              deserunt Lorem sint consectetur exercitation commodo consequat
              dolor id proident deserunt velit. Elit dolore ullamco ex culpa
              irure occaecat irure. Ullamco consequat laboris fugiat. Elit id et
              occaecat. Voluptate officia dolore elit ad eiusmod enim
              adipisicing reprehenderit qui nulla elit labore.
            </p>
            <p>
              Eu elit ad dolore Lorem non magna id consequat adipisicing esse
              qui minim Lorem duis proident. Ullamco veniam dolore anim. Non ex
              velit quis commodo anim elit ullamco aliqua occaecat sit elit ex
              cupidatat. Officia veniam dolor proident. Mollit deserunt quis do
              ex officia. Labore ea eu nulla dolor laboris enim labore ad.
              Tempor in aliqua fugiat sunt consequat elit non do eu commodo non.
              Deserunt do pariatur consectetur veniam mollit nostrud sint.
              Aliquip nulla quis anim ad.
            </p>
            <p>
              {" "}
              Consequat et mollit deserunt. Adipisicing est dolore magna. Dolor
              et duis sint pariatur tempor deserunt deserunt incididunt
              exercitation esse cillum amet labore quis. Fugiat adipisicing
              cillum velit id nostrud ea fugiat adipisicing occaecat. Commodo
              veniam consectetur minim in anim ullamco sint consectetur ex sint.
            </p>
          </div>
          p
        </div>
      </div>
    </PageWrapper>
  );
}
