import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import Label from "./Label";
import clsx from "clsx";

const formClasses =
  "input input-bordered block w-full  sm:text-sm md:text-md lg:text-lg";

export interface ITextFieldProps
  extends Omit<InputHTMLAttributes<Element>, "onChange"> {
  label: ReactNode | string;
  id: string;
  onChange?: (e: any) => void;
  name?: string;
  variant?: "outlined";
  elementClassName?: string;
  labelClassName?: string;
  element?: "input" | "textarea";
  type?: "text" | "password" | "number" | "email" | "time" | "date";
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  isOptional?: boolean; // this prop is to show the "optional" text inside the input
  error?: string | boolean;
  fullWidth?: boolean;
  editable?: boolean;
}
export default function TextField(props: ITextFieldProps) {
  const {
    label = "",
    id,
    element = "input",
    error,
    className,
    value,
    type = "text",
    disabled,
    isOptional,
    fullWidth,
    onChange,
    editable = true,
    defaultValue,
    placeholder
  } = props;

  // const inputStyles: { [key: string]: string } = {
  //   // other variants could be added here
  //   "outlined-input": "bg-white focus:border-gray-primary autofill:!bg-white",
  //   "outlined-label": "bg-white text-gray-line",
  // };

  return (
    <div className={clsx([fullWidth && "w-full", className])}>
      {label && (
        <Label id={id}>
          {label}
          {isOptional && " (اختیاری)"}
        </Label>
      )}
      {!editable ? (
        <div
          className={clsx([
            "w-full",
            error && "!border-red",
            disabled && "cursor-not-allowed",
          ])}
        >
          <p>{defaultValue || value}</p>
        </div>
      ) : element === "textarea" ? (
        <textarea
          id={id}
          value={value}
          className={clsx([
            "md:text-md textarea textarea-bordered block  w-full sm:text-sm lg:text-lg",
            fullWidth && "w-full",
            error && "!border-red",
            "py-4",
            disabled && "cursor-not-allowed",
          ])}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            const val = e.target.value;
            onChange?.(val);
          }}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          className={clsx([
            formClasses,
            fullWidth && "w-full",
            error && "!border-red",
            disabled && "cursor-not-allowed",
          ])}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            onChange?.(val);
          }}
        />
      )}

      {error && (
        <div className="mt-1 min-h-[20px] text-xs text-red-600">
          {error || ""}
        </div>
      )}
    </div>
  );
}
