import { FormEvent } from "react";
import Button from "./Button";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { BooleanField, LocationField, SelectField, TextField } from "./Fields";
import { TFieldType } from "../../types";
import clsx from "clsx";

interface Props {
  config: TFieldType[];
  isLoading: boolean;
  isValid: boolean;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  btnText: string;
  options?: any;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  subform?: React.ReactNode;
  select?: React.ReactNode;
}

export default function Form({
  config,
  isLoading,
  btnText,
  control,
  errors,
  onSubmit,
  subform,
  select,
}: Props) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {config.map((field) => (
        <Controller
          key={field.name}
          control={control}
          name={field.name}
          rules={field.rules}
          defaultValue={field.defaultValue || ""}
          render={({ field: { value, onChange, onBlur, name } }) => (
            <>
              {field.type === "boolean" ? (
                <BooleanField
                  className="mb-4"
                  label={field.label}
                  id={field.name}
                  onChange={onChange}
                  value={value}
                  name={name}
                />
              ) : field.type === "select" ? (
                <SelectField
                  className="mb-4"
                  onChange={onChange}
                  error={`${errors[field.name]?.message || ""}`}
                  id={field.name}
                  label={field.label}
                >
                  {select}
                </SelectField>
              ) : field.type === "location" ? (
                <LocationField
                  className="mb-4"
                  onChange={onChange}
                  error={`${errors[field.name]?.message || ""}`}
                  id={field.name}
                  label={field.label}
                  name={name}
                  value={value}
                />
              ) : (
                <TextField
                  className={clsx("mb-4")}
                  type={
                    field.name === "password" || field.name === "re_password"
                      ? "password"
                      : field.type === "time"
                        ? "time"
                        : "text"
                  }
                  fullWidth
                  label={field.label}
                  id={field.name}
                  error={`${errors[field.name]?.message || ""}`}
                  isOptional={!field.rules?.required}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  defaultValue={field.defaultValue}
                  element={field.type === "textarea" ? "textarea" : "input"}
                />
              )}
              {field.useSubform && subform}
            </>
          )}
        />
      ))}
      {btnText && (
        <Button
          className="my-4 w-full text-lg disabled:btn-disabled"
          disabled={isLoading}
          color="cyan"
          type="submit"
        >
          {btnText}
          {isLoading && (
            <span className="loading loading-spinner loading-sm"></span>
          )}
        </Button>
      )}
    </form>
  );
}
