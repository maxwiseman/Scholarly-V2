"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import { Calendar } from "@/src/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { Input } from "./input";

export function DatePicker({
  reversed,
  noIcon,
  className,
  type,
  mode,
  value = undefined,
  onChange,
}: {
  reversed?: boolean;
  noIcon?: boolean;
  className?: string;
  type?: "past" | "future" | "birthday";
  mode?: "single" | "range";
  value?: string;
  onChange?: (value: string) => void;
}) {
  // const { reversed, className, type, mode } = props;
  const [date, setDate] = React.useState<Date>();
  const birthDate = new Date();
  birthDate.setFullYear(new Date().getFullYear() - 13);

  React.useEffect(() => {
    if (value) setDate(new Date(value));
  }, [value]);

  React.useEffect(() => {
    if (onChange) onChange(date?.toString() || "");
  }, [value]);

  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
              reversed && "justify-between",
              noIcon && "px-3"
            )}
          >
            {reversed != true && !noIcon && (
              <CalendarIcon className="mr-2 h-4 w-4" />
            )}
            {/* @ts-ignore */}
            {date && date != "Invalid Date" ? (
              format(date, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
            {reversed == true && !noIcon && (
              <CalendarIcon className="mr-2 h-4 w-4" />
            )}
          </Button>
          {/* <Input
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
              reversed && "justify-between"
            )}
            placeholder={"Pick a date"}
            value={date ? format(date, "PPP") : ""}
            onChange={(event) => {
              setDate(event.target.valueAsDate as Date | undefined);
            }}
            {...props}
          /> */}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode={"single"}
            selected={date}
            onSelect={setDate}
            disabled={check}
            toYear={new Date().getFullYear() - 13}
            toMonth={birthDate}
            toDate={birthDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
  function check(date: Date) {
    if (type === "past") return checkPast(date);
    if (type === "future") return checkFuture(date);
    if (type === "birthday") return checkBirthday(date);
    return false;
  }
}

function checkFuture(date: Date) {
  const now = new Date();
  const today = new Date();
  today.setDate(now.getDate() - 1);
  return date <= today;
}
function checkPast(date: Date) {
  const now = new Date();
  const today = new Date();
  today.setDate(now.getDate() - 1);
  return date >= today;
}
function checkBirthday(date: Date) {
  const now = new Date();
  const today = new Date();
  today.setDate(now.getDate() - 4745);
  return date >= today;
}
