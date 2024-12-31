import { animateIn, urlForImage } from "@/sanity/lib/utils";
import styles from "../../styles/heroStyles.module.css";
import { Image } from "next-sanity/image";
import { ArrowRight } from "lucide-react";
import BlockContainer from "../BlockContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { PortableText } from "next-sanity";
import { PortableParagraph } from "../PortableParagraph";
import SectionContainer from "../SectionContainer";
import { cn } from "@/lib/utils";
import { FadeCarousel } from "../FadeCarousel";
import Autoplay from "embla-carousel-autoplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function TestBlock({ block }: any) {
  console.log({ test: block });
  const image = block.logo;
  const gallery = block.gallery;
  const tabs = block.tabs;
  return (
    <main className="flex flex-col items-center bg-[#EBEBEB]">
      {/* Hero block */}

      {/* Overflow hides background pattern */}
      <BlockContainer
        size="lg"
        className="overflow-hidden bg-[#1868FF] md:py-10"
      >
        {/* Background */}

        <div className="absolute h-full w-full">
          <div className={`${styles.row} ${styles["row-1"]} `}></div>
          <div className={`${styles.row} ${styles["row-2"]} `}></div>
          <div className={`${styles.row} ${styles["row-3"]} `}></div>
          <div className={`${styles.row} ${styles["row-4"]} `}></div>
          <div className={`${styles.row} ${styles["row-5"]} `}></div>
          <div className={`${styles.row} ${styles["row-6"]} `}></div>
          <div className={`${styles.row} ${styles["row-7"]} `}></div>
          <div className={`${styles.row} ${styles["row-8"]} `}></div>
          <div className={`${styles.row} ${styles["row-9"]} `}></div>
          <div className={`${styles.row} ${styles["row-10"]} `}></div>
        </div>

        {/* Content */}

        <div className="relative mx-1 flex h-full w-full p-4 md:mx-10 md:p-0">
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {/* Left block */}

            <section className="flex h-full min-h-80 flex-col justify-between rounded-lg bg-black text-white motion-translate-y-in-25 motion-blur-in-md motion-opacity-in-0">
              <div className="p-5">
                <h1 className="flex h-full px-0 text-[3.5rem] font-black leading-[3rem] tracking-tight motion-translate-y-in-25 motion-blur-in-md motion-opacity-in-0 motion-delay-500 md:text-[6vw] md:leading-[5vw]">
                  WRAPPED 2024
                </h1>
              </div>
              <nav className="text-xl md:text-2xl">
                <a href="" className="group">
                  <div className="flex items-center justify-between border-y px-5 py-2 motion-translate-y-in-25 motion-blur-in-md motion-opacity-in-0 motion-delay-[700ms]">
                    <p className="">The Stats</p>
                    <ArrowRight className="group-hover:motion-preset-wobble-md" />
                  </div>
                </a>
                <a href="" className="group">
                  <div className="flex items-center justify-between border-b px-5 py-2 motion-translate-y-in-25 motion-blur-in-md motion-opacity-in-0 motion-delay-[900ms]">
                    <p className="">Iniciatives</p>
                    <ArrowRight className="group-hover:motion-preset-wobble-md" />
                  </div>
                </a>
                <a href="" className="group">
                  <div className="flex items-center justify-between px-5 py-2 motion-translate-y-in-25 motion-blur-in-md motion-opacity-in-0 motion-delay-[1100ms]">
                    <p className="">Tools</p>
                    <ArrowRight className="group-hover:motion-preset-wobble-md" />
                  </div>
                </a>
              </nav>
            </section>

            {/* Right Block */}

            <section className="flex min-h-80 flex-col justify-between rounded-lg border border-white bg-none p-5 text-white motion-translate-y-in-25 motion-blur-in-md motion-opacity-in-0">
              <div className="relative w-full motion-translate-y-in-25 motion-blur-in-md motion-opacity-in-0 motion-delay-500">
                <Image
                  className="w-full"
                  src={urlForImage(image)?.url() as string}
                  alt={image?.alt || ""}
                  width={100}
                  height={50}
                />
              </div>
              <div className="motion-preset-slide-up-md text-balance text-2xl motion-blur-in-md motion-delay-1500 md:text-3xl">
                12 years making things easy to understand, and impossible to
                ignore.
              </div>
            </section>
          </div>
        </div>
      </BlockContainer>

      {/* Paragraph Section */}

      <BlockContainer className="px-5 py-24 md:px-0">
        <div className="w-full md:w-1/2 md:py-8">
          <h2 className="text-xl md:text-2xl">
            We’ve been on the brink of change for several years, and this past
            year was an acceleration towards the world ahead. What do we want it
            to look like? We want to be active participants by advocating for a
            world where form and function integrate to create value, success
            aligns with social impact, and work enhances well-being. 2023 marked
            our 20th year working with the world’s most influential
            organizations. They’re actively changing how we work, live, and
            interact. Together, we strive to co-create the world we want to live
            in. We’re honored to serve their collective missions and humbled by
            their continued trust.
          </h2>
        </div>
      </BlockContainer>

      {/* Gallery */}

      <BlockContainer className="my-10 p-4">
        <Carousel className="w-full">
          <CarouselContent className="">
            {gallery.map((image: any) => {
              return (
                <CarouselItem key={image._key} className="">
                  <div className="max-h-[800px] overflow-hidden rounded-lg">
                    <Image
                      src={urlForImage(image)?.url() as string}
                      alt={image.alt}
                      width={2000}
                      height={1500}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </BlockContainer>

      {/* Black Background Block */}

      <div className="intersect-once intersect:motion-opacity-in-0 flex w-full flex-col items-center justify-center bg-black">
        <SectionContainer
          className="py-16 text-white md:py-28"
          title="The Stats"
          paragraph="They’re actively changing how we work, live, and interact. Together, we strive to co-create the world we want to live in."
        />

        {/* Paragraph Block */}

        <BlockContainer className="w-10/12 py-0 pb-28 text-white md:w-3/4 md:pb-44">
          <PortableText
            components={PortableParagraph as any}
            value={block.blockContent}
          />
        </BlockContainer>
      </div>

      {/* Portfolio Block */}

      <BlockContainer className="flex-col items-start justify-start py-4 md:flex-row md:items-stretch md:px-10 md:py-10">
        <section className="mb-6 flex w-full flex-col items-center px-5 tracking-tight md:mb-0 md:w-1/2 md:items-start md:text-5xl">
          <h2 className="text-9xl font-medium md:mb-auto md:text-[200px]">8</h2>
          <h3 className="">Portfolio Projects</h3>
          <h3 className="text-stone-400">A lot more to come!</h3>
        </section>

        {/* Mobile Gallery */}

        <section className="flex md:hidden">
          <Carousel className="w-full overflow-visible" opts={{ loop: true }}>
            <CarouselContent className="overflow-visible">
              {gallery.map((image: any) => {
                return (
                  <CarouselItem key={image._key} className="basis-1/2">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <figcaption className="absolute bottom-0 mb-2 ml-2 flex flex-row rounded-full bg-white/30 p-2 px-3 text-black backdrop-blur-md">
                        <p className="text-xs">{image.alt}&nbsp;</p>
                        <p className="whitespace-nowrap text-xs text-stone-500">
                          · Education
                        </p>
                      </figcaption>
                      <Image
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
        </section>
        <section className="flex md:hidden">
          <Carousel
            className="w-full overflow-visible pt-4"
            opts={{ loop: true }}
            delay={6500}
          >
            <CarouselContent className="overflow-visible">
              {gallery.map((image: any) => {
                return (
                  <CarouselItem key={image._key} className="basis-1/2">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <figcaption className="absolute bottom-0 mb-2 ml-2 flex flex-row rounded-full bg-white/30 p-2 px-3 text-black backdrop-blur-md">
                        <p className="text-xs">{image.alt}&nbsp;</p>
                        <p className="whitespace-nowrap text-xs text-stone-500">
                          · Education
                        </p>
                      </figcaption>
                      <Image
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
        </section>

        {/* Desktop Gallery */}

        <section className="hidden grid-cols-2 gap-4 md:grid md:w-1/2">
          <FadeCarousel items={gallery} options={{ delay: 4200 }} />
          <FadeCarousel items={gallery} options={{ delay: 9500 }} />
          <FadeCarousel items={gallery} options={{ delay: 6200 }} />
          <FadeCarousel items={gallery} options={{ delay: 5600 }} />
        </section>
      </BlockContainer>

      {/* Industries Served */}
      <Tabs defaultValue={tabs[0].industry} className="">
        <TabsList>
          {tabs.map((tab: any) => {
            return (
              <TabsTrigger key={tab._key} value={tab.industry}>
                {tab.industry}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {tabs.map((tab: any) => {
          //Check the lqip reference doesn't break when leaving test
          const imageAsset = tab.image;
          const lqip = tab.image.fullAsset.metadata.lqip;
          return (
            <TabsContent key={tab._key} value={tab.industry}>
              <Image
                src={urlForImage(imageAsset)?.url() as string}
                height={500}
                width={700}
                alt={imageAsset.alt || ""}
                placeholder="blur"
                blurDataURL={lqip || ""}
              />
            </TabsContent>
          );
        })}
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </main>
  );
}
