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

export function DatePicker({
  reversed,
  className,
  type,
  mode = "single",
}: {
  reversed?: boolean;
  className?: string;
  type?: "past" | "future" | "birthday";
  mode?: "single" | "range";
}) {
  const [date, setDate] = React.useState<Date>();
  const birthDate = new Date();
  birthDate.setFullYear(new Date().getFullYear() - 13);

  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
              reversed && "justify-between"
            )}
          >
            {reversed != true && <CalendarIcon className="mr-2 h-4 w-4" />}
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            {reversed == true && <CalendarIcon className="mr-2 h-4 w-4" />}
          </Button>
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
