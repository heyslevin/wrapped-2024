import { type PortableTextBlock } from "next-sanity";

import PortableText from "@/app/components/PortableText";
import { InfoSection as InfoSectionType } from "@/sanity.types";

type InfoProps = {
  block: InfoSectionType;
  index: number;
};

export default function InfoSection({ block }: InfoProps) {
  return (
    <div className="container my-12">
      <div className="max-w-3xl">
        {block?.heading && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {block.heading}
          </h2>
        )}
        {block?.subheading && (
          <span className="block mt-4 mb-8 text-lg uppercase font-light text-gray-900/70">
            {block.subheading}
          </span>
        )}
        <div className="prose prose-a:text-red-500 mt-4">
          {block?.content?.length && (
            <PortableText
              className=""
              value={block.content as PortableTextBlock[]}
            />
          )}
        </div>
      </div>
    </div>
  );
}
