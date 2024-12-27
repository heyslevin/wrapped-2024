import { urlForImage } from "@/sanity/lib/utils";
import styles from "../../styles/heroStyles.module.css";
import { Image } from "next-sanity/image";

export default function TestBlock({ block }: any) {
  const image = block.logo;
  console.log({ test: block });
  return (
    <main>
      {/* Hero block */}
      <section className="relative flex h-[896] items-center justify-center bg-[#1868FF]">
        {/* Background */}
        <div className="absolute h-full w-full">
          <div className={`${styles["row-1"]} ${styles.row}`}></div>
          <div className={`${styles["row-2"]} ${styles.row}`}></div>
          <div className={`${styles["row-3"]} ${styles.row}`}></div>
          <div className={`${styles["row-4"]} ${styles.row}`}></div>
          <div className={`${styles["row-5"]} ${styles.row}`}></div>
          <div className={`${styles["row-6"]} ${styles.row}`}></div>
          <div className={`${styles["row-7"]} ${styles.row}`}></div>
          <div className={`${styles["row-8"]} ${styles.row}`}></div>
          <div className={`${styles["row-9"]} ${styles.row}`}></div>
          <div className={`${styles["row-10"]} ${styles.row}`}></div>
        </div>
        {/* Content */}
        <div className="container relative p-0">
          <div className="grid grid-cols-2 gap-6">
            <div className="h-[740] rounded-lg bg-black p-5 text-white">
              <h1 className="flex h-full px-0 text-5xl text-[100px] font-black leading-[85px] tracking-tight">
                WRAPPED 2024
              </h1>
            </div>
            <div className="flex flex-col justify-between rounded-lg border border-white bg-none p-5 text-white">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
