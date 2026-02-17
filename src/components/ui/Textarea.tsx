/**
 * Textarea Component
 * Reusable textarea field with validation states
 */

"use client";

import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, fullWidth = false, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
            {props.required && <span className="ml-1 text-secondary-500">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full rounded-xl border-2 px-4 py-3 transition-all duration-300",
            "bg-white dark:bg-gray-900",
            "text-gray-900 dark:text-gray-100",
            "placeholder:text-gray-400 dark:placeholder:text-gray-600",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            "min-h-[120px] resize-y",
            error
              ? "border-secondary-500 focus:border-secondary-500 focus:ring-secondary-500"
              : "border-gray-200 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-800",
            "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50 dark:disabled:bg-gray-900",
            className
          )}
          {...props}
        />

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

Textarea.displayName = "Textarea";

export default Textarea;
