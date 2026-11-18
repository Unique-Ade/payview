import { formatCount, formatSalary } from "@/lib/format";
import type { CountrySalary } from "@/lib/types";

interface MarketsProps {
  jobRow: CountrySalary[];
  role: string;
}

const Markets = ({ jobRow, role }: MarketsProps) => {
  return (
    <section id="table" className="w-full">
      <div className="max-w-[1200px] mx-auto px-8 py-[72px]">
        <h2 className="mb-3 text-[32px] font-bold tracking-[-0.01em]">
          See the same role, four markets.
        </h2>
        <p className="mb-8 max-w-[60ch] text-base text-[#5B6270]">
          Average annual pay for {role}, aggregated from live Adzuna listings.
          Pay is shown in each market&apos;s local currency, so rows are not
          directly comparable until currencies are converted.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Average annual pay and number of listings for {role}, by market
            </caption>
            <thead>
              <tr className="border-b border-ink">
                <th scope="col" className="px-2 py-3 text-[13px] font-semibold text-[#5B6270]">
                  Market
                </th>
                <th scope="col" className="px-2 py-3 text-[13px] font-semibold text-[#5B6270]">
                  Currency
                </th>
                <th scope="col" className="px-2 py-3 text-right text-[13px] font-semibold text-[#5B6270]">
                  Average annual pay
                </th>
                <th scope="col" className="px-2 py-3 text-right text-[13px] font-semibold text-[#5B6270]">
                  Listings
                </th>
              </tr>
            </thead>
            <tbody>
              {jobRow.map((row) => (
                <tr key={row.countryCode} className="border-b border-line last:border-b-0">
                  <td className="px-2 py-4 text-[15px]">{row.countryName}</td>
                  <td className="px-2 py-4 font-mono text-sm text-[#5B6270]">{row.currency}</td>
                  <td className="px-2 py-4 text-right font-mono text-[15px]">
                    {row.salary === null ? (
                      <span className="text-[#5B6270]">No data</span>
                    ) : (
                      formatSalary(row.salary, row.currency)
                    )}
                  </td>
                  <td className="px-2 py-4 text-right font-mono text-sm text-[#5B6270]">
                    {formatCount(row.listingCount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Markets;