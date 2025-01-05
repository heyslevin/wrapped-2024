"use client";

import { Image } from "next-sanity/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { urlForImage } from "@/sanity/lib/utils";
import React from "react";
import { cn } from "@/lib/utils";

export default function HoverTabs({ tabs }: any) {
  const [activeTab, setActiveTab] = React.useState(tabs[0].industry);
  const [hiddenImage, setHiddenImage] = React.useState(true);

  function handleHover(industry: any): any {
    setHiddenImage(false);
    setActiveTab(industry);
  }

  return (
    <Tabs
      value={activeTab}
      className="flex w-full flex-row items-stretch md:gap-6"
    >
      <section className="w-full md:w-1/2">
        <TabsList className="flex flex-col border-t border-slate-500">
          {tabs.map((tab: any) => {
            return (
              <TabsTrigger
                key={tab._key}
                value={tab.industry}
                className="flex items-center py-1 md:py-3"
                onMouseEnter={() => handleHover(tab.industry)}
              >
                <h3 className="text-xl group-data-[state=inactive]:text-stone-500 md:text-3xl">
                  {tab.industry}
                </h3>
                <div className="w-20 rounded-lg border border-slate-300 p-2 group-data-[state=active]:border-[#0000FF] group-data-[state=active]:bg-[#CFFFFF]">
                  <p className="text-lg group-data-[state=active]:text-[#0000FF] group-data-[state=inactive]:text-slate-500 md:text-2xl">
                    {tab.percentage}%
                  </p>
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </section>
      <section className="w-0 items-center md:static md:flex md:w-1/2">
        {tabs.map((tab: any) => {
          //Check the lqip reference doesn't break when leaving test
          const imageAsset = tab.image;
          const lqip = tab.image.fullAsset.metadata.lqip;
          return (
            <TabsContent key={tab._key} value={tab.industry}>
              <div className="flex md:hidden">
                <Image
                  src={urlForImage(imageAsset)?.url() as string}
                  height={500}
                  width={500}
                  alt={imageAsset.alt || ""}
                  placeholder="blur"
                  blurDataURL={lqip || ""}
                  className={cn(
                    "hover:opacity-100 md:opacity-100",
                    hiddenImage
                      ? "opacity-0"
                      : "motion-preset-fade-lg absolute bottom-0 right-0 m-auto mb-4 mr-4 w-1/2 rounded-lg opacity-100",
                  )}
                />
              </div>

              {/* Desktop Image */}
              <div className="hidden md:flex">
                <Image
                  src={urlForImage(imageAsset)?.url() as string}
                  height={500}
                  width={700}
                  alt={imageAsset.alt || ""}
                  placeholder="blur"
                  blurDataURL={lqip || ""}
                />
              </div>
            </TabsContent>
          );
        })}
      </section>
    </Tabs>
  );
}
