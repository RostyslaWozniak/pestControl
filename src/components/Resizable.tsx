import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { cn } from "../lib/cn";

const Resizable = ({ images }: { images: [string, string] }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[720px] w-full bg-black-25"
    >
      {images.map((image, index) => (
        <>
          <ResizablePanel
            defaultSize={index === 0 ? 25 : 75}
            key={index}
            className="relative min-w-[200px] overflow-hidden"
          >
            <img
              src={image}
              alt=""
              className={cn(
                "absolute h-full w-full object-cover brightness-75",
                index === 1 && "object-right",
                index === 0 && "object-left",
              )}
            />
          </ResizablePanel>
          {index !== images.length - 1 && (
            <ResizableHandle className="w-1 bg-background" withHandle />
          )}
        </>
      ))}
    </ResizablePanelGroup>
  );
};

export default Resizable;
