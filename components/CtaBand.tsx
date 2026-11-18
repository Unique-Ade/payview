import Link from "next/link";

const CtaBand = () => {
  return (
    <section className="w-full bg-ink">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-6 px-8 py-14">
        <h2 className="text-[26px] font-bold tracking-[-0.01em] text-paper">
          Start comparing in under a minute.
        </h2>
        <Link
          href="#search"
          className="inline-block rounded bg-brass px-[26px] py-3.5 text-[15px] font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
        >
          Compare salaries
        </Link>
      </div>
    </section>
  );
};

export default CtaBand;