
import Hero from "@/components/Hero";
import { getSalaryHistogram, Histogram, Job, searchJobs } from "@/lib/adzuna";


const Home = async () =>{
  const jobs = await searchJobs();
  const jobHistogram = await getSalaryHistogram();
  
  // const jobComparisonByRegion = await jobRoleComparison(); 
  // console.log(jobComparisonByRegion)

  return (
  <div className="home">
    <Hero/>
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