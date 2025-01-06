import { cn } from "@/lib/utils";
import BlockContainer from "./BlockContainer";
import { animateIn } from "@/sanity/lib/utils";

interface SectionContainerProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  paragraph?: string;
}

export default function SectionContainer({
  children,
  className,
  title,
  paragraph,
}: SectionContainerProps) {
  return (
    <BlockContainer
      lang="en"
      className={cn(
        "flex-col gap-10 px-8 py-0 text-center md:py-12",
        className,
      )}
    >
      <h2
        lang="en"
        className={cn(
          "w-5/6 hyphens-auto break-words text-7xl font-black uppercase leading-[4rem] tracking-tight motion-delay-2000 md:w-full md:text-8xl md:leading-[6rem]",
        )}
      >
        {title}
      </h2>
      <div className="w-full md:w-1/3">
        <p className={cn("text-balance text-base md:text-lg")}>{paragraph}</p>
      </div>
    </BlockContainer>
  );
}
