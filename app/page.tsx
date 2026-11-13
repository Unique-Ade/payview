
import Hero from "@/components/Hero";
import { jobRoleComparison } from "@/lib/adzuna";
import { buildMarkets, findCountryByName, supportedCountries } from "@/lib/countries";
import { CountrySalary } from "@/lib/types";

interface SearchParams {
  role?: string;
  country?: string;
}

interface PageProps {
  searchParams: Promise<SearchParams>
}

const Home = async ({ searchParams }: PageProps) => {
  const userInput = await searchParams;
  const role = userInput.role || "Frontend Developer";
  const matchedCountry = userInput.country ? findCountryByName(userInput.country) : undefined;
  const isUnsupportedCountry = Boolean(!matchedCountry && userInput.country);
  const unsupportedCountryName = isUnsupportedCountry ? userInput.country : undefined;


  const countryCode = matchedCountry?.code;

  const countryCodes = buildMarkets(countryCode);

  const jobComparisonByRegion = await jobRoleComparison(role, countryCodes);

  const jobRow: CountrySalary[] = jobComparisonByRegion.map((row): CountrySalary => {
    const country = supportedCountries.find((i) => (i.code === row.jobCountry))
    if (!country) {
      throw new Error(`Unsupported country code: ${row.jobCountry}`);
    }
    const salary = row.data.mean !== null && row.data.mean !== undefined && row.data.count>0 ? row.data.mean : null;
    return {
      countryName: country.name,
      salary,
      countryCode: row.jobCountry,
      currency: country.currency
    }


  });
  return (
    <div className="home">
      <Hero jobRow={jobRow} role={role} unsupportedCountryName={unsupportedCountryName} />
    </div>
  )
}


export default Home;