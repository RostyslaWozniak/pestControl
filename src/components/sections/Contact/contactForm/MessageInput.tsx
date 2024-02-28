import { cn } from "../../../../lib/cn";
import { InputProps } from "../../../../lib/formZod";

const MessageInput = ({ register, errors }: InputProps) => {
  return (
    <label className="relative mb-2 flex flex-col">
      <p className="px-5 text-lg capitalize">Your Message</p>
      <textarea
        {...register("message")}
        className={cn(
          "max-h-[900px] min-h-[200px] w-full rounded-[20px] border-2 px-3 py-2 text-black",
          errors.name && "border-2 border-destructive",
        )}
        name="message"
      />
      {errors.message && (
        <p className=" absolute -bottom-5 left-5 text-sm text-destructive">
          {errors.message.message}
        </p>
      )}
    </label>
  );
};

export default MessageInput;
