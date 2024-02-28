import { cn } from "../../../../lib/cn";
import { InputProps } from "../../../../lib/formZod";

const NameInput = ({ register, errors }: InputProps) => {
  return (
    <label className="relative flex flex-col">
      <p className="px-5 text-lg capitalize">Your Name</p>
      <input
        {...register("name")}
        className={cn(
          "w-full rounded-[50px] border-2 px-3 py-2 text-black",
          errors.name && "border-2 border-destructive",
        )}
        type="text"
        name="name"
      />
      {errors.name && (
        <p className="absolute -bottom-5 left-5 text-sm text-destructive">
          {errors.name.message}
        </p>
      )}
    </label>
  );
};

export default NameInput;
