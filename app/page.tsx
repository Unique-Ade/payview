
import Hero from "@/components/Hero";
import { getSalaryHistogram, Histogram, Job, jobRoleComparison, searchJobs } from "@/lib/adzuna";
import { baselineCodes, buildMarkets, supportedCountries } from "@/lib/countries";
import { CountrySalary } from "@/lib/types";


const Home = async () => {
  // const jobs = await searchJobs();
  // const jobHistogram = await getSalaryHistogram();
  const role = "frontend Developer";
  // const userCountryInput = supportedCountries.find(code)
  const countryCodes = buildMarkets();
  const jobComparisonByRegion = await jobRoleComparison(role, countryCodes);
  // console.log(jobComparisonByRegion)
  // const wanted = supportedCountries.map(i => i.code);
  const jobRow: CountrySalary[] = jobComparisonByRegion.map((row): CountrySalary => {
    const country = supportedCountries.find((i) => (i.code === row.jobCountry))
    if (!country) {
      throw new Error(`Unsupported country code: ${row.jobCountry}`);
    }
    return {
      countryName: country.name,
      salary: row.data.mean,
      countryCode: row.jobCountry,
      currency: country.currency
    }


  });

   console.log(jobRow)
  return (
    <div className="home">
      <Hero jobRow={jobRow}/>
      {
        // Object.entries(jobHistogram.histogram).map((salary)=>(
        //   <div className="each-histogram" key={salary[0]}>
        //       <h2>Amount : {salary[0]} and Job Count is {salary[1]}</h2>
        //   </div>
        // ))
        // Object.entries(jobHistogram.histogram).map(([salary, count])=>(
        //  <div className="each-info" key={salary}>
        //       <h2>Amount : {salary} and Job Count is {count}</h2>
        //  </div>
        // )) 
        // jobComparisonByRegion.map((job)=>(
        //   <div className="compare" key={job.jobCountry}>
        //     <h2>{job.jobCountry}</h2>
        //   </div>
        // ))
      }
    </div>
  )
}


export default Home;