const HowItWorks = () => {
  return (
    <section id="how" className="w-full border-t border-line">
      <div className="max-w-[1200px] mx-auto px-8 py-[72px]">
        <h2 className="mb-10 text-[32px] font-bold tracking-[-0.01em]">How it works</h2>
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-[1_1_260px] flex-col gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-brass font-mono text-sm">
              1
            </div>
            <h3 className="text-[17px] font-semibold">Pick a role</h3>
            <p className="text-[15px] leading-[1.6] text-[#5B6270]">
              Search any tech role, from Frontend Engineer to DevOps Lead.
            </p>
          </div>

          <div className="flex flex-[1_1_260px] flex-col gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-brass font-mono text-sm">
              2
            </div>
            <h3 className="text-[17px] font-semibold">Choose a market</h3>
            <p className="text-[15px] leading-[1.6] text-[#5B6270]">
              Type the country you&apos;re considering. It is shown first, alongside popular markets.
            </p>
          </div>

          <div className="flex flex-[1_1_260px] flex-col gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-brass font-mono text-sm">
              3
            </div>
            <h3 className="text-[17px] font-semibold">Compare the numbers</h3>
            <p className="text-[15px] leading-[1.6] text-[#5B6270]">
              See average pay and listing counts side by side, market by market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
