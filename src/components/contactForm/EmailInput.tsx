import { cn } from "../../lib/cn";
import { InputProps } from "../../lib/formZod";

const EmailInput = ({ register, errors }: InputProps) => {
  return (
    <label className="relative flex flex-col">
      <p className="px-5 text-lg capitalize">Your Email</p>
      <input
        {...register("email")}
        className={cn(
          "w-full rounded-[50px] border-2 px-3 py-2 text-black",
          errors.name && "border-2 border-destructive",
        )}
        type="text"
        name="email"
      />
      {errors.email && (
        <p className="absolute -bottom-5 left-5 text-sm text-destructive">
          {errors.email.message}
        </p>
      )}
    </label>
  );
};

export default EmailInput;
