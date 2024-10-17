"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import Label from "./Label";
interface Props {
  className: string;
  label: ReactNode | string;
  id: string;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  name?: string;
  value?: string;
  required?: boolean;
  isOptional?: boolean;
  error?: string | boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}
const ChoiceField = (props: Props) => {
  const {
    className,
    label,
    id,
    onChange,
    value,
    isOptional,
    error,
    fullWidth,
  } = props;
  return (
    <div className={clsx([fullWidth && "w-full", className])}>
      <div className="inline-flex w-full justify-between">
        {label && (
          <Label id={id}>
            {label}
            {isOptional && " (اختیاری)"}
          </Label>
        )}
        <input
          type="checkbox"
          className="checkbox m-2"
          onChange={() => onChange(!value)}
        />
      </div>
      {error && (
        <div className="mt-1 min-h-[20px] text-xs text-red-600">
          {error || ""}
        </div>
      )}
    </div>
  );
};

export default ChoiceField;
