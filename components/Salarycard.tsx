import { supportedCountries } from "@/lib/countries";
import { formatSalary } from "@/lib/format";
import type { CountrySalary } from "@/lib/types";

interface SalaryProps {
  jobRow: CountrySalary[];
  role: string;
  unsupportedCountryName?: string;
}

const cardClasses = "w-full bg-ink rounded-md p-7 flex flex-col gap-[18px]";

const Salarycard = ({ jobRow, role, unsupportedCountryName }: SalaryProps) => {
  const hasNoData = jobRow.every((row) => row.salary === null);

  if (hasNoData) {
    return (
      <div className={cardClasses}>
        <h2 className="text-[15px] font-semibold text-paper">
          No salary data found for{" "}
          <span className="text-red-400">&ldquo;{role}&rdquo;</span>
        </h2>
        <p className="mt-0.5 text-[13px] text-[#8992A3]">Hint: try a different role title.</p>
      </div>
    );
  }

  if (unsupportedCountryName) {
    return (
      <div className={cardClasses}>
        <h2 className="text-[15px] font-semibold text-paper">
          No salary data for{" "}
          <span className="text-red-400">&ldquo;{unsupportedCountryName}&rdquo;</span>
        </h2>
        <p className="mt-0.5 text-[13px] text-[#8992A3]">Hint: try a supported country.</p>
        <p className="mt-0.5 text-[13px] text-[#8992A3]">
          Supported countries: {supportedCountries.map((country) => country.name).join(", ")}
        </p>
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      <div>
        <h2 className="text-[15px] font-semibold text-paper">{role}</h2>
        <p className="mt-0.5 text-[13px] text-[#8992A3]">Average annual pay, by market</p>
      </div>

      <div className="flex flex-col border-b border-[#2A3140]">
        {jobRow.map((country) => (
          <div
            key={country.countryCode}
            className="flex items-center justify-between border-t border-[#2A3140] py-[13px]"
          >
            <div className="flex items-center gap-2.5">
              <span className="rounded-[3px] border border-[#3A4154] px-1.5 py-0.5 font-mono text-xs text-paper">
                {country.countryCode.toUpperCase()}
              </span>
              <span className="text-sm text-paper">{country.countryName}</span>
            </div>
            <span className="font-mono text-[15px] text-paper">
              {country.salary === null
                ? "No data"
                : formatSalary(country.salary, country.currency)}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#8992A3]">Source: Adzuna</p>
    </div>
  );
};

export default Salarycard;