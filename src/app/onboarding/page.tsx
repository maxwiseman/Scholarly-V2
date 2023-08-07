"use client";

import { useState } from "react";
import Step0 from "./0";
import Step1 from "./1";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Step2 from "./2";
import { AnimatePresence } from "framer-motion";
import Motion from "./motion";
import { Button } from "@/src/components/ui";

export default function Page() {
  const [step, setStep] = useState(0);
  const user = useUser();

  if (!user) redirect("/sign-in");

  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    if (page + newDirection < pages.length)
      setPage([page + newDirection, newDirection]);
  };

  const pages = [
    <Step0 page={page} paginate={paginate} key={0} />,
    <Step1 page={page} paginate={paginate} key={1} />,
    <Step2 page={page} paginate={paginate} key={2} />,
  ];

  return (
    <AnimatePresence initial={false} custom={direction}>
      {pages.map((pageContent, i) => {
        if (page == i)
          return (
            <Motion key={i} direction={direction}>
              {pageContent}
            </Motion>
          );
      })}

      {/* {page == 0 && (
        <Motion key={1} direction={direction}>
          1 <Button onClick={() => paginate(1)}>Next</Button>
        </Motion>
      )}
      {page == 1 && (
        <Motion key={2} direction={direction}>
          2 <Button onClick={() => paginate(1)}>Next</Button>
        </Motion>
      )}
      {page == 2 && (
        <Motion key={3} direction={direction}>
          3 <Button onClick={() => paginate(-1)}>Back</Button>
        </Motion>
      )} */}
    </AnimatePresence>
  );
}
