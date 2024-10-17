"use client";
import { RegisterOptions } from "react-hook-form";

export type TFieldType = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  options?: any;
  defaultValue?: string;
  useSubform?: boolean;
  rules?: RegisterOptions;
};
