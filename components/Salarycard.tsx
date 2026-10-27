import { CountrySalary } from "@/lib/types";

interface SalaryProps {
  jobRow: CountrySalary[];
}

const formatSalary = (amount: number, currency: string): string => {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
    currencyDisplay: "narrowSymbol"
  });
  return currencyFormat.format(amount);
};

const Salarycard = ({ jobRow }: SalaryProps) => {
  return (
    <div className="w-full bg-ink rounded-md p-7 flex flex-col gap-[18px]">
      <div>
        <h2 className="text-[15px] font-semibold text-paper">Frontend Engineer</h2>
        <p className="text-[13px] text-[#8992A3] mt-0.5">Average annual pay, by market</p>
      </div>

      <div className="flex flex-col border-b border-[#2A3140]">
        {jobRow.map((country) => (
          <div
            key={country.countryCode}
            className="flex items-center justify-between py-[13px] border-t border-[#2A3140]"
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-paper border border-[#3A4154] rounded-[3px] px-1.5 py-0.5">
                {country.countryCode.toUpperCase()}
              </span>
              <span className="text-sm text-paper">{country.countryName}</span>
            </div>
            <span className="font-mono text-[15px] text-paper">
              {formatSalary(country.salary, country.currency)}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#8992A3]">Source: Adzuna, updated daily</p>
    </div>
  );
};

export default Salarycard;