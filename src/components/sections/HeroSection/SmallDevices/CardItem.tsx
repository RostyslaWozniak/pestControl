import { cn } from "../../../../lib/cn";
import { Button } from "../../../ui/button";
import { CgArrowLongRight } from "react-icons/cg";

type SmCardItemProps = {
  img: string;
  title: string;
  content: string;
  path: string;
};

const CardItem = ({ img, title, content, path }: SmCardItemProps) => {
  return (
    <div
      className={cn(
        "flex cursor-default flex-col bg-primary sm:flex-row sm:shadow-xl",
      )}
    >
      <img
        src={img}
        alt={title}
        className="mx-auto max-h-[300px] w-full object-cover sm:max-h-full sm:w-[50%]"
      />

      <div className="flex flex-col items-start justify-center gap-5 px-5 py-5 text-background">
        <h3 className="text-2xl font-bold text-background sm:text-3xl">
          {title}
        </h3>
        <p className="text-sm sm:text-base">{content}</p>
        <Button
          variant={"outline"}
          className="group space-x-3 italic text-secondary"
        >
          <a href={path}>Learn more</a>
          <CgArrowLongRight
            className="mt-1 transition-transform duration-200 group-hover:translate-x-4"
            size={30}
          />
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
