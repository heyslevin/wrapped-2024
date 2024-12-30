import { cn } from "@/lib/utils";
import BlockContainer from "./BlockContainer";

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
      className={cn("flex-col gap-10 py-12 text-center", className)}
    >
      <h2 className="intersect:motion-preset-focus-lg intersect:motion-preset-slide-up-lg text-9xl font-black uppercase leading-[6rem] motion-delay-300">
        {title}
      </h2>
      <div className="w-1/2">
        <p className="intersect:motion-preset-focus-lg intersect:motion-preset-slide-up-lg intersect:motion-delay-500 text-balance text-lg">
          {paragraph}
        </p>
      </div>
    </BlockContainer>
  );
}
