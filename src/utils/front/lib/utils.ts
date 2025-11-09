import { clsx, type ClassValue } from "clsx";
import { FormEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatInputLogin = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 11);
  if (e.currentTarget.value.length <= 3)
    e.currentTarget.value = e.currentTarget.value;
  if (e.currentTarget.value.length <= 6)
    e.currentTarget.value = e.currentTarget.value.replace(
      /(\d{3})(\d{1,3})/,
      "$1.$2"
    );
  if (e.currentTarget.value.length <= 9)
    e.currentTarget.value = e.currentTarget.value.replace(
      /(\d{3})(\d{3})(\d{1,3})/,
      "$1.$2.$3"
    );
  e.currentTarget.value = e.currentTarget.value.replace(
    /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
    "$1.$2.$3-$4"
  );
};