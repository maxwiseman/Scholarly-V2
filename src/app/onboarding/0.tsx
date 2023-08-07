"use client";

import { Dispatch, SetStateAction } from "react";
import Continue from "./continueButton";
import Motion from "./motion";

export default function Step0({
  paginate,
  page,
}: {
  paginate: (arg0: number) => void;
  page: number;
}) {
  return (
    <>
      <p className="">{`Welcome! \nLet's get you set up`}</p>
      <Continue page={page} className="w-full mt-2" paginate={paginate} />
    </>
  );
}
