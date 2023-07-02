import { Input } from "@/src/components/ui";
import { Combobox } from "@/src/components/ui/combobox";
import { DatePicker } from "@/src/components/ui/date-picker";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";

export function Setting({
  form,
  name,
  label,
  description,
  type,
  data,
  placeholder,
}: {
  form: any;
  name: string;
  label: string;
  description: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "futureDate"
    | "pastDate"
    | "birthDate"
    | "select";
  data?: any;
  placeholder: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <div className="flex flex-col space-y-2">
              <FormLabel className="mb-0">{label}</FormLabel>
              <FormControl>
                <>
                  {type == "text" && (
                    <Input type="text" placeholder={placeholder} {...field} />
                  )}
                  {type == "password" && (
                    <Input
                      type="password"
                      placeholder={placeholder}
                      {...field}
                    />
                  )}
                  {type == "email" && (
                    <Input type="email" placeholder={placeholder} {...field} />
                  )}
                  {type == "number" && (
                    <Input type="number" placeholder={placeholder} {...field} />
                  )}
                  {type == "futureDate" && (
                    <DatePicker
                      className="my-2"
                      type="future"
                      reversed
                      {...field}
                    />
                  )}
                  {type == "pastDate" && (
                    <DatePicker
                      className="my-2"
                      type="past"
                      reversed
                      {...field}
                    />
                  )}
                  {type == "birthDate" && (
                    <DatePicker
                      className="my-2"
                      type="birthday"
                      reversed
                      {...field}
                    />
                  )}
                  {type == "select" && (
                    <Combobox data={data} placeholder={placeholder} />
                  )}
                </>
              </FormControl>
              <FormDescription className="mt-0">{description}</FormDescription>
              <FormMessage />
            </div>
          </FormItem>
        );
      }}
    />
  );
}
