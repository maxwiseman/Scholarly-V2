import { ReactNode } from "react";

export default function CircleBadge({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary w-7 h-7 text-white text-center rounded-full flex justify-center items-center">
      <p>{children}</p>
    </div>
  );
}
