"use client";

import { Dispatch, SetStateAction } from "react";
import Continue from "./continueButton";
import Motion from "./motion";

export default function Step0({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const stepNumber = 0;

  return (
    <Motion key={stepNumber}>
      <p className="">{`Welcome! \nLet's get you set up`}</p>
      <Continue
        className="w-full mt-2"
        setStep={setStep}
        currentStep={stepNumber}
      />
    </Motion>
  );
}
