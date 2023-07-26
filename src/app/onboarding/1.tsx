"use client";

import { Dispatch, SetStateAction } from "react";
import Continue from "./continueButton";
import Motion from "./motion";
import { Badge } from "@/src/components/ui/badge";
import CircleBadge from "./circleBadge";
import Image from "next/image";

export default function Step1({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const stepNumber = 1;

  return (
    <Motion key={stepNumber}>
      <p className=" mb-2 text-lg">{`First, you'll need to connect your Canvas account`}</p>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <CircleBadge>1</CircleBadge>
          <div>
            <div className="w-40 h-12 relative">
              <Image
                src={"/onboarding/account.png"}
                alt='Click "Account"'
                className="object-left"
                fill
                objectFit="contain"
              />
            </div>
            <p className="text-dimmed">
              Click your profile picture on the left sidebar
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <CircleBadge>2</CircleBadge>
          <div>
            <div className="w-40 h-7 relative">
              <Image
                src={"/onboarding/settings.png"}
                alt='Click "Account"'
                className="object-left"
                fill
                objectFit="contain"
              />
            </div>
            <p className="text-dimmed">Click Settings</p>
          </div>
        </div>
        <div className="flex gap-2">
          <CircleBadge>3</CircleBadge>
          <div>
            <div className="w-40 h-7 relative">
              <Image
                src={"/onboarding/accessToken.png"}
                alt='Click "Account"'
                className="object-left"
                fill
                objectFit="contain"
              />
            </div>
            <p className="text-secondary-foreground">Click New Access Token</p>
          </div>
        </div>
      </div>
      <Continue
        className="w-full mt-2"
        setStep={setStep}
        currentStep={stepNumber}
      />
    </Motion>
  );
}
