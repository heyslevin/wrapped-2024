"use client";

import * as React from "react";

import { UseEmblaCarouselType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Image } from "next-sanity/image";
import { urlForImage } from "@/sanity/lib/utils";

type FadeCarouselProps = {
  items: React.ReactNode[];
  options?: any;
};

export function FadeCarousel({ items, options }: FadeCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Fade(),
        Autoplay({ stopOnMouseEnter: true, delay: options.delay }),
      ]}
      className=""
    >
      <CarouselContent>
        {items.map((image: any) => {
          return (
            <CarouselItem key={image._key} className="">
              <div className="overflow-hidden rounded-lg">
                <div className="absolute bottom-4 left-6 rounded-full bg-white/30 text-black backdrop-blur-md">
                  <p className="p-2 px-4 text-xs md:text-sm">{image.alt}</p>
                </div>
                <Image
                  className="object-cover"
                  src={urlForImage(image)?.url() as string}
                  alt={image.alt}
                  width={2000}
                  height={2000}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
