import { FieldErrors, UseFormRegister } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export type TFormSchema = z.infer<typeof formSchema>;

export type InputProps = {
  errors: FieldErrors<{
    name: string;
    email: string;
    message: string;
  }>;
  register: UseFormRegister<{
    name: string;
    email: string;
    message: string;
  }>;
};
