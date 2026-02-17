/**
 * Input Component
 * Reusable input field with validation states and icons
 */

"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, icon, fullWidth = false, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
            {props.required && <span className="ml-1 text-secondary-500">*</span>}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full rounded-xl border-2 px-4 py-3 transition-all duration-300",
              "bg-white dark:bg-gray-900",
              "text-gray-900 dark:text-gray-100",
              "placeholder:text-gray-400 dark:placeholder:text-gray-600",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              error
                ? "border-secondary-500 focus:border-secondary-500 focus:ring-secondary-500"
                : "border-gray-200 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-800",
              "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50 dark:disabled:bg-gray-900",
              icon && "pl-10",
              className
            )}
            {...props}
          />
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

Input.displayName = "Input";

export default Input;
