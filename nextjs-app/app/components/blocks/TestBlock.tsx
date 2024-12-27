import { urlForImage } from "@/sanity/lib/utils";
import styles from "../../styles/heroStyles.module.css";
import { Image } from "next-sanity/image";

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
          <div className={`${styles.row} ${styles["row-1"]}`}></div>
          <div className={`${styles.row} ${styles["row-2"]}`}></div>
          <div className={`${styles.row} ${styles["row-3"]}`}></div>
          <div className={`${styles.row} ${styles["row-4"]}`}></div>
          <div className={`${styles.row} ${styles["row-5"]}`}></div>
          <div className={`${styles.row} ${styles["row-6"]}`}></div>
          <div className={`${styles.row} ${styles["row-7"]}`}></div>
          <div className={`${styles.row} ${styles["row-8"]}`}></div>
          <div className={`${styles.row} ${styles["row-9"]}`}></div>
          <div className={`${styles.row} ${styles["row-10"]}`}></div>
        </div>
        {/* Content */}
        <div className="md:p-0 container relative flex h-full w-full p-4">
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {/* Left block */}
            <section className="h-full rounded-lg bg-black p-5 text-white">
              <h1 className="md:text-[100px] md:leading-[85px] flex h-full min-h-80 px-0 text-6xl font-black leading-[4rem] tracking-tight">
                WRAPPED 2024
              </h1>
            </section>

            {/* Right Block */}
            <section className="flex min-h-80 flex-col justify-between rounded-lg border border-white bg-none p-5 text-white">
              <div className="relative w-full">
                <Image
                  className="w-full"
                  src={urlForImage(image)?.url() as string}
                  alt={image?.alt || ""}
                  width={100}
                  height={50}
                />
              </div>
              <div className="text-balance text-3xl">
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
