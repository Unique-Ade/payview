import { supportedCountries} from "@/lib/countries";

const Stats = () => {
  return (
    <section className="w-full border-y border-line">
      <div className="max-w-[1200px] mx-auto flex flex-col px-8 py-9 sm:flex-row">
        <div className="py-4 sm:flex-1 sm:border-r sm:border-line sm:py-0 sm:pr-7">
          <div className="font-mono text-[28px] font-semibold">{supportedCountries.length}</div>
          <div className="mt-1 text-[13px] text-[#5B6270]">Countries supported</div>
        </div>

        <div className="ml-10 py-4 sm:ml-0 sm:flex-1 sm:border-r sm:border-line sm:px-7 sm:py-0">
          <div className="font-mono text-[28px] font-semibold">230k+</div>
          <div className="mt-1 text-[13px] text-[#5B6270]">Listings matched</div>
        </div>

        <div className="py-4 sm:flex-1 sm:py-0 sm:pl-7">
          <div className="font-mono text-[28px] font-semibold">Daily</div>
          <div className="mt-1 text-[13px] text-[#5B6270]">Data refresh</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;