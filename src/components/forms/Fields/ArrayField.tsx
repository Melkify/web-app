"use client";
import { Controller } from "react-hook-form";
import Label from "./Label";

interface Props {
  data: any;
  fields: any[];
  append: any;
  remove: any;
  control: any;
  label: string;
  isMulti: boolean;
}
const ArrayField = ({
  fields,
  append,
  remove,
  control,
  label,
  isMulti,
}: Props) => {
  return (
    <>
      <div className="w-full">
        <div className="inline-flex w-full justify-between">
          {label && <Label id={label}>{label}</Label>}
        </div>
        {fields?.map((field, index) => (
          <div
            key={field.id}
            className="flex w-full flex-col gap-2 border-b border-base-300 p-2 sm:inline-flex"
          >
            <Controller
              name={`prices.${index}.name`}
              control={control}
              defaultValue={field.name}
              render={({ field }) => (
                <input
                  placeholder="نام سرویس را وارد کنید"
                  className="md:text-md input input-bordered block  w-full sm:text-sm lg:text-lg"
                  {...field}
                />
              )}
            />
            <Controller
              name={`prices.${index}.price`}
              control={control}
              defaultValue={field.price}
              render={({ field }) => (
                <input
                  placeholder="قیمت را وارد کنید"
                  className="md:text-md input input-bordered block  w-full sm:text-sm lg:text-lg"
                  {...field}
                />
              )}
            />
            {isMulti && index > 0 && (
              <button
                className="btn btn-outline btn-error"
                onClick={() => remove(index)}
              >
                حذف
              </button>
            )}
          </div>
        ))}
        <button
          className="btn my-3 w-full"
          disabled={!isMulti && fields.length > 0}
          onClick={() => append({ name: "", price: "" })}
        >
          افزودن قیمت
        </button>
      </div>
    </>
  );
};

export default ArrayField;
