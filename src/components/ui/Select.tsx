/**
 * Select Component
 * Reusable select dropdown with validation states
 */

"use client";

import { SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  fullWidth?: boolean;
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, error, helperText, options, fullWidth = false, placeholder, id, ...props },
    ref
  ) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
            {props.required && <span className="ml-1 text-secondary-500">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full rounded-xl border-2 px-4 py-3 pr-10 transition-all duration-300",
              "bg-white dark:bg-gray-900",
              "text-gray-900 dark:text-gray-100",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              "cursor-pointer appearance-none",
              error
                ? "border-secondary-500 focus:border-secondary-500 focus:ring-secondary-500"
                : "border-gray-200 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-800",
              "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50 dark:disabled:bg-gray-900",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        {(error || helperText) && (
          <p
            className={cn(
              "text-sm",
              error ? "text-secondary-500" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
