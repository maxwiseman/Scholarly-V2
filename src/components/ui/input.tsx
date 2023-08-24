import * as React from "react";

import { cn } from "@/src/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type, ...props }, ref) => {
    const iconProps = {
      className: "w-4 h-4",
    };
    var iconWithProps;
    // @ts-ignore
    if (icon) iconWithProps = React.cloneElement(icon, iconProps);

    return (
      <div className={cn(className, "text-muted-foreground relative")}>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
            icon ? "pl-7" : ""
          )}
          ref={ref}
          {...props}
        />
        {icon ? (
          <div className="absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-4 h-4 w-4">
            {iconWithProps}
          </div>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
