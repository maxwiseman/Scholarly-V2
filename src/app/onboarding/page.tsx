"use client";

import { useState } from "react";
import Step0 from "./0";
import Step1 from "./1";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Step2 from "./2";

export default function Page() {
  const [step, setStep] = useState(0);
  const user = useUser();

  if (!user) redirect("/sign-in");

  return (
    <>
      {step === 0 && <Step0 setStep={setStep} />}
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
    </>
  );
}
