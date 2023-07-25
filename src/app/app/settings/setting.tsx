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
import { ThemeSelector } from "./themeSelector";
import { Textarea } from "@/src/components/ui/textarea";

export function Setting({
  form,
  name,
  label,
  description,
  type,
  data,
  placeholder,
  className,
}: {
  form: any;
  name: string;
  label: string;
  description: string;
  type?:
    | "text"
    | "longText"
    | "password"
    | "email"
    | "number"
    | "futureDate"
    | "pastDate"
    | "birthDate"
    | "select"
    | "theme";
  data?: any;
  placeholder: string;
  className?: string;
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
              {type == "theme" && (
                <FormDescription className="mt-0">
                  {description}
                </FormDescription>
              )}
              <FormControl>
                <>
                  {type == "text" && (
                    <Input
                      type="text"
                      className={className}
                      placeholder={placeholder}
                      {...field}
                    />
                  )}
                  {type == "longText" && (
                    <Textarea
                      className={className}
                      placeholder={placeholder}
                      {...field}
                    />
                  )}
                  {type == "password" && (
                    <Input
                      type="password"
                      placeholder={placeholder}
                      className={className}
                      {...field}
                    />
                  )}
                  {type == "email" && (
                    <Input
                      type="email"
                      placeholder={placeholder}
                      className={className}
                      {...field}
                    />
                  )}
                  {type == "number" && (
                    <Input
                      type="number"
                      placeholder={placeholder}
                      className={className}
                      {...field}
                    />
                  )}
                  {type == "futureDate" && (
                    <DatePicker className="my-2" type="future" {...field} />
                  )}
                  {type == "pastDate" && (
                    <DatePicker className="my-2" type="past" {...field} />
                  )}
                  {type == "birthDate" && (
                    <DatePicker className="my-2" type="birthday" {...field} />
                  )}
                  {type == "select" && (
                    <Combobox
                      data={data}
                      placeholder={placeholder}
                      {...field}
                    />
                  )}
                  {type == "theme" && <ThemeSelector {...field} />}
                </>
              </FormControl>
              {type != "theme" && (
                <FormDescription className="mt-0">
                  {description}
                </FormDescription>
              )}
              <FormMessage />
            </div>
          </FormItem>
        );
      }}
    />
  );
}
