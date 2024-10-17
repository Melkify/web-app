import clsx from "clsx";
import Label from "./Label";

interface ISelectFieldProps {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
  onChange: (e: any) => void;
  error?: string;
}
const formClasses = "input input-bordered block w-full  sm:text-sm";
export default function SelectField({
  id,
  label,
  className,
  children,
  onChange,
  error,
}: ISelectFieldProps) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select
        id={id}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={clsx(formClasses, "pr-8")}
      >
        {children}
      </select>
      {error && (
        <div className="mt-1 min-h-[20px] text-xs text-red-600">
          {error || ""}
        </div>
      )}
    </div>
  );
}
