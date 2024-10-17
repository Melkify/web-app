import clsx from "clsx";
import React, { ReactNode } from "react";
import Label from "./Label";
import { weekDaysFullName } from "../../utils/jalaaliFuncs";
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
  options?: any;
}
const ChoiceField = (props: Props) => {
  const {
    className,
    label,
    id,
    onChange,
    name,
    required,
    value,
    isOptional,
    error,
    fullWidth,
    disabled = false,
    options,
  } = props;
  return (
    <div className={clsx([fullWidth && "w-full", className])}>
      {label && (
        <Label id={id}>
          {label}
          {isOptional && " (اختیاری)"}
        </Label>
      )}
      <div
        className={clsx([
          "grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-7",
          fullWidth && "w-full",
          error && "!border-red",
          disabled && "cursor-not-allowed",
        ])}
      >
        {options?.choice_type === "checkbox" && (
          <TimeChoices onChange={onChange} value={value} disabled={disabled} />
        )}
        {options?.choice_type === "radio" && (
          <FeatureChoice
            onChange={onChange}
            value={value}
            disabled={disabled}
          />
        )}
      </div>
      {error && (
        <div className="mt-1 min-h-[20px] text-xs text-red-600">
          {error || ""}
        </div>
      )}
    </div>
  );
};
function TimeChoices({ onChange, value, disabled = false }: any) {
  return (
    <>
      {weekDaysFullName.map((day, index) => (
        <div
          key={index}
          className="flex flex-row items-center  justify-between sm:flex-col"
        >
          <label>{day}</label>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox m-2"
            onChange={() => {
              let updatedWeekdays = [...value];
              updatedWeekdays[index] =
                updatedWeekdays[index] === "1" ? "0" : "1";
              onChange(updatedWeekdays.join(""));
            }}
          />
        </div>
      ))}
    </>
  );
}
function FeatureChoice({ onChange, value, disabled = false }: any) {
  return (
    <>
      <div
        className={clsx(
          "h-25 card card-bordered w-full shadow-3 hover:bg-gray-300 sm:h-36",
          disabled && "border-2 opacity-50 hover:bg-inherit",
          value === "reserve" && "bg-gray-300"
        )}
        onClick={() => onChange("reserve")}
      >
        <div className="card-body">
          <p className="card-title">رزرو</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div
        className={clsx(
          "h-25 card card-bordered w-full shadow-3 hover:bg-gray-300 sm:h-36",
          true && "border-2 opacity-50 hover:bg-inherit",
          value === "support" && "bg-gray-300"
        )}
        onClick={() => onChange("support")}
      >
        <div className="card-body">
          <p className="card-title">پشتیبانی</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">به‌زودی</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChoiceField;
