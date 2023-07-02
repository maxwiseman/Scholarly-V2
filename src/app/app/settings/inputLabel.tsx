import { Input, Label } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";

export function InputLabel(props: {
  label: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1", props.className)}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <Input
        className="max-w-xs w-full"
        placeholder={props.placeholder}
        id={props.label}
      />
    </div>
  );
}
