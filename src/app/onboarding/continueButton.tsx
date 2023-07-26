import { Button } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { IconLoader } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";

export default function Continue(props: {
  onClick?: () => Promise<void>;
  setStep: Dispatch<SetStateAction<number>>;
  currentStep: number;
  className: string;
}) {
  const [loading, setLoading] = useState(false);
  const { onClick, setStep, currentStep } = props;

  return (
    <div className={cn("flex gap-2", props.className)}>
      {currentStep != 0 ? (
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => setStep(currentStep - 1)}
        >
          <IconArrowLeft className="w-4 h-4" />
        </Button>
      ) : (
        <></>
      )}
      <Button
        variant={loading ? "disabled" : "default"}
        onClick={async () => {
          setLoading(true);
          if (onClick) await onClick();
          setStep(currentStep + 1);
        }}
        className="flex-grow"
      >
        {loading ? (
          <IconLoader className="w-4 h-4 animate-spin" />
        ) : (
          // <IconArrowRight className="w-4 h-4" />
          <></>
        )}
        Continue
      </Button>
    </div>
  );
}
