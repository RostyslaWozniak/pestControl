import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../ui/resizable";
import { cn } from "../../../lib/cn";

type ResizableProps = {
  images: [
    {
      alt: string;
      img: string;
    },
    {
      alt: string;
      img: string;
    },
  ];
};
const Resizable = ({ images }: ResizableProps) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[500px] bg-black-25 sm:rounded-[50px]"
    >
      {images.map(({ alt, img }, index) => (
        <React.Fragment key={index}>
          <ResizablePanel
            defaultSize={index === 0 ? 25 : 75}
            key={index}
            className="relative min-w-5 overflow-hidden sm:min-w-[200px] lg:min-w-[50px]"
          >
            <img
              src={img}
              alt={alt}
              className={cn(
                "absolute h-full w-full object-cover object-center",
                index === 1 && "object-right",
                index === 0 && "object-left",
              )}
            />
          </ResizablePanel>
          {index !== images.length - 1 && (
            <ResizableHandle className="w-1 bg-background" withHandle />
          )}
        </React.Fragment>
      ))}
    </ResizablePanelGroup>
  );
};

export default Resizable;
