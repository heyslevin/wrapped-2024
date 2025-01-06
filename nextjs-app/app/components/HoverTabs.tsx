"use client";

import { Image } from "next-sanity/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { urlForImage } from "@/sanity/lib/utils";
import React from "react";
import { cn } from "@/lib/utils";

export default function HoverTabs({ tabs }: any) {
  const [activeTab, setActiveTab] = React.useState(tabs[0].industry);
  const [hiddenImage, setHiddenImage] = React.useState(true);
  const [isOffDom, setOffDom] = React.useState(true);

  React.useEffect(() => {
    if (isOffDom) {
      return;
    }

    const offDomTimeout = window.setTimeout(() => {
      console.log("offDom");
      setOffDom(true);
    }, 2000);

    return () => {
      window.clearTimeout(offDomTimeout);
    };
  }, [hiddenImage]);

  function handleHover(industry: any): any {
    // if (hiddenImage) {
    //   return;
    // }
    setOffDom(false);
    setHiddenImage(false);
    setActiveTab(industry);

    const hideTimeout = window.setTimeout(() => {
      setHiddenImage(true);
      console.log("image hidden");
    }, 2000);
    return () => {
      window.clearTimeout(hideTimeout);
    };
  }

  return (
    <Tabs
      value={activeTab}
      className="flex w-full flex-row items-stretch md:gap-6"
    >
      <section className="w-full md:w-1/2">
        <TabsList className="flex flex-col border-t border-slate-300">
          {tabs.map((tab: any) => {
            return (
              <TabsTrigger
                key={tab._key}
                value={tab.industry}
                className="flex items-center border-b border-slate-300 py-1 md:py-3"
                onMouseEnter={() => handleHover(tab.industry)}
              >
                <h3 className="text-xl group-data-[state=inactive]:text-stone-500 md:text-xl">
                  {tab.industry}
                </h3>
                <div className="w-20 rounded-lg border border-slate-400 p-2 group-data-[state=active]:border-[#0000FF] group-data-[state=active]:bg-[#CFFFFF]">
                  <p className="text-lg group-data-[state=active]:text-[#0000FF] group-data-[state=inactive]:text-slate-500 md:text-xl">
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
                {!isOffDom && (
                  <Image
                    src={urlForImage(imageAsset)?.url() as string}
                    height={500}
                    width={500}
                    alt={imageAsset.alt || ""}
                    placeholder="blur"
                    blurDataURL={lqip || ""}
                    className={cn(
                      "hover:opacity-100",
                      hiddenImage
                        ? "fixed bottom-0 right-0 m-auto mb-4 mr-4 w-1/2 rounded-lg motion-opacity-out-0"
                        : "motion-preset-fade-lg fixed bottom-0 right-0 m-auto mb-4 mr-4 w-1/2 rounded-lg opacity-100",
                      isOffDom ? "invisible" : "visible",
                    )}
                  />
                )}
              </div>

              {/* Desktop Image */}
              <div className="hidden md:flex">
                <Image
                  className="rounded-lg"
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
