import clsx from "clsx";
import React from "react";
import Label from "./Label";
import LocationSelector from "./LocationSelector";

interface ILocationFieldProps {
  label?: string;
  id: string;
  labelClassName?: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
  children?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  isOptional?: boolean;
  fullWidth?: boolean;
  editable?: boolean;
  onChange?: any;
}
// type MapboxMapInstance = SDKMap | null;

const LocationField = (props: ILocationFieldProps) => {
  const {
    label = "",
    id,
    labelClassName,
    name = "location",
    error,
    required,
    className,
    children,
    value,
    defaultValue,
    type = "text",
    disabled = false,
    isOptional,
    fullWidth,
    editable = true,
    onChange,
  } = props;

  return (
    <div className={clsx([fullWidth && "w-full", className])}>
      {label && (
        <Label id={id}>
          {label}
          {isOptional && " (اختیاری)"}
        </Label>
      )}
      <div className="w-full">
        <LocationSelector
          onChange={onChange}
          disabled={disabled}
          value={value ? value : defaultValue}
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

export default LocationField;
