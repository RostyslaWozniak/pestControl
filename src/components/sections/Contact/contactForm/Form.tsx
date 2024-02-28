import { useForm } from "react-hook-form";
import { TFormSchema, formSchema } from "../../../../lib/formZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../ui/button";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import MessageInput from "./MessageInput";
import { Loader2 } from "lucide-react";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });
  async function onSubmit(data: TFormSchema) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    reset();
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative mx-auto flex w-[min(600px,100%)] flex-col space-y-6 py-10 lg:px-10"
    >
      <NameInput errors={errors} register={register} />
      <EmailInput errors={errors} register={register} />
      <MessageInput errors={errors} register={register} />
      <Button type="submit" variant={"secondary"} className="self-end py-5">
        {isSubmitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Send"
        )}
      </Button>
    </form>
  );
};

export default Form;
