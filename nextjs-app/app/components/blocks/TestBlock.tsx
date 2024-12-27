import { urlForImage } from "@/sanity/lib/utils";
import styles from "../../styles/heroStyles.module.css";
import { Image } from "next-sanity/image";
import { ArrowRight } from "lucide-react";

export default function TestBlock({ block }: any) {
  const image = block.logo;
  console.log({ test: block });
  return (
    <main>
      {/* Hero block */}

      {/* Overflow hides background pattern */}
      <section className="md:h-[745px] md:py-10 relative flex w-full items-center justify-center overflow-hidden bg-[#1868FF]">
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
        <div className="md:p-0 container relative flex h-full w-full p-4">
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {/* Left block */}
            <section className="motion-opacity-in-0 motion-blur-in-md motion-translate-y-in-25 flex h-full min-h-80 flex-col justify-between rounded-lg bg-black text-white">
              <div className="p-5">
                <h1 className="motion-opacity-in-0 motion-blur-in-md motion-translate-y-in-25 motion-delay-500 md:text-[100px] md:leading-[85px] flex h-full px-0 text-[3.5rem] font-black leading-[3rem] tracking-tight">
                  WRAPPED 2024
                </h1>
              </div>
              <nav className="md:text-2xl text-xl">
                <a href="" className="group">
                  <div className="motion-opacity-in-0 motion-blur-in-md motion-translate-y-in-25 motion-delay-[700ms] flex items-center justify-between border-y px-5 py-2">
                    <p className="">The Stats</p>
                    <ArrowRight className="group-hover:motion-preset-wobble-md" />
                  </div>
                </a>
                <a href="" className="group">
                  <div className="motion-opacity-in-0 motion-blur-in-md motion-translate-y-in-25 motion-delay-[900ms] flex items-center justify-between border-b px-5 py-2">
                    <p className="">Iniciatives</p>
                    <ArrowRight className="group-hover:motion-preset-wobble-md" />
                  </div>
                </a>
                <a href="" className="group">
                  <div className="motion-opacity-in-0 motion-blur-in-md motion-translate-y-in-25 motion-delay-[1100ms] flex items-center justify-between px-5 py-2">
                    <p className="">Tools</p>
                    <ArrowRight className="group-hover:motion-preset-wobble-md" />
                  </div>
                </a>
              </nav>
            </section>

            {/* Right Block */}
            <section className="motion-opacity-in-0 motion-blur-in-md motion-translate-y-in-25 flex min-h-80 flex-col justify-between rounded-lg border border-white bg-none p-5 text-white">
              <div className="motion-opacity-in-0 motion-blur-in-md motion-translate-y-in-25 motion-delay-500 relative w-full">
                <Image
                  className="w-full"
                  src={urlForImage(image)?.url() as string}
                  alt={image?.alt || ""}
                  width={100}
                  height={50}
                />
              </div>
              <div className="motion-preset-slide-up-md motion-blur-in-md motion-delay-1500 md:text-3xl text-balance text-2xl">
                12 years making things easy to understand, and impossible to
                ignore.
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
