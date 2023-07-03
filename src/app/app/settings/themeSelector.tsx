import { cn } from "@/src/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSelector({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
}) {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState<string>(value || theme || "light");

  return (
    <div className="flex gap-2">
      <div
        className={cn(
          "rounded-md hover:bg-accent hover:text-accent-foreground border-2 border-muted",
          selected == "system" && "border-primary hover:border-primary"
        )}
        onClick={() => {
          setSelected("system");
          if (onChange) onChange(selected);
        }}
      >
        <div className={"absolute w-[104px] overflow-hidden"}>
          <div className={"items-center rounded-md p-1 w-52"}>
            <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
              <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]"></div>
                <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className={"items-center rounded-md bg-popover p-1 w-52"}>
          <div className="space-y-2 rounded-sm bg-slate-950 p-2">
            <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
              <div className="h-2 w-[80px] rounded-lg bg-slate-400"></div>
              <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-slate-400"></div>
              <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-slate-400"></div>
              <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "items-center rounded-md border-2 border-muted p-1 hover:bg-accent hover:border-accent w-52",
          selected == "light" && "border-primary hover:border-primary"
        )}
        onClick={() => {
          setSelected("light");
          if (onChange) onChange(selected);
        }}
      >
        <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
          <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
            <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]"></div>
            <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
          </div>
          <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
            <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
            <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
          </div>
          <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
            <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
            <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground w-52",
          selected == "dark" && "border-primary hover:border-primary"
        )}
        onClick={() => {
          setSelected("dark");
          if (onChange) onChange(selected);
        }}
      >
        <div className="space-y-2 rounded-sm bg-slate-950 p-2">
          <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
            <div className="h-2 w-[80px] rounded-lg bg-slate-400"></div>
            <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
          </div>
          <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
            <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
          </div>
          <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
            <div className="h-2 w-[100px] rounded-lg bg-slate-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
