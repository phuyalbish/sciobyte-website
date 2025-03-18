import { z } from "zod";

export const nameSchema = z
  .string()
  .trim()
  .nonempty("This Field is required.")
  .min(4, { message: "Must be 4 or more characters long." });
export const emailSchema = z
  .string()
  .trim()
  .nonempty("This Field is required.")
  .email();
export const textareaSchema = z
  .string()
  .trim()
  .nonempty("This Field is required.")
  .min(20, { message: "Must be 20 or more characters long." });

export const phoneNumberSchema = z
  .string()
  .trim()
  .nonempty("This Field is required.")
  .regex(/^(97|98)\d{8}$/, {
    message:
      "Must be a valid phone number starting with 98 or 97 and 10 digits long.",
  });
