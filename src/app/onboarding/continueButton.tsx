import { Button } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { IconLoader } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";

export default function Continue(props: {
  onClick?: () => Promise<void>;
  paginate: (arg0: number) => void;
  page: number;
  className: string;
}) {
  const [loading, setLoading] = useState(false);
  const { onClick, paginate, page } = props;

  return (
    <div className={cn("flex gap-2", props.className)}>
      {page != 0 && (
        <Button
          variant={loading ? "disabled" : "outline"}
          size={"icon"}
          onClick={() => paginate(-1)}
          type="submit"
        >
          <IconArrowLeft className="w-4 h-4" />
        </Button>
      )}
      <Button
        variant={loading ? "disabled" : "default"}
        onClick={async () => {
          setLoading(true);
          if (onClick) await onClick();
          paginate(1);
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
