import styles from "../../styles/heroStyles.module.css";

export default function TestBlock({ block }: any) {
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
            <div className="rounded-lg border border-white bg-none p-5 text-5xl text-white">
              Welcome to my website bitch. Welcome to my website bitch Welcome
              to my website bitch Welcome to my website bitch Welcome to my
              website bitch Welcome to my website bitch Welcome to my website
              bitch Welcome to my website bitch Welcome to my website bitch
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
