
// Search Job Interfaces
interface Category {
  label: string;
  tag: string;
}

interface Location {
  display_name: string;
  area: string[];
}

interface Company {
  display_name: string;
  canonical_name: string;
  count: number;
  average_salary: number;
}

export interface Job {
    id: string;
  title: string;
  description: string;
  created: string;
  redirect_url: string;
  adref: string;
  latitude: number;
  longitude: number;
  location: Location;
  category: Category;
  company: Company;
  salary_min: number;
  salary_max: number;
  salary_is_predicted: string;
  contract_time: string;
  contract_type: string;

}

export interface JobSearchResults {
  count: number;
  mean: number;
  results: Job[];
}


// search Jobs fetch Function
export const searchJobs = async (country:string="gb", what:string="", page:number=1): Promise<JobSearchResults> =>{
  
  const response = await fetch (`https://api.adzuna.com/v1/api/jobs/${country}/search/${page}?app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_APP_KEY}&what=${encodeURIComponent(what)}`, {
    headers:{
      accept: "application/json"
    },
    next:{revalidate: 60 * 60 * 24}
  })

  if(!response.ok){
    throw new Error(`Adzuna request failed: ${response.status}`)
  }
  const data: JobSearchResults = await response.json();
   console.log(data);
  return(data);
 
}

// Job Histogram Interfaces
export interface Histogram {
  [salary: string] : number;  
}

interface SalaryHistogram {
   histogram: Histogram;
}

// Salary Histogram Fetch Function

export const getSalaryHistogram = async(country: string = "gb", what: string = ""): Promise<SalaryHistogram>=>{
   const response = await fetch(`https://api.adzuna.com/v1/api/jobs/${country}/histogram?app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_APP_KEY}&what=${encodeURIComponent(what)}`, {
    headers:{
      accept: 'application/json'
    },
     next: {revalidate: 60*60*24}
   });
   if(!response.ok){
     throw new Error(`Adzuna request failed: ${response.status}`)
   }
  const  data : SalaryHistogram= await response.json();
  console.log(data)
  return(data)
}




interface CountryComparison {
  jobCountry : string;
  data: JobSearchResults;
}
//Job Comparison Function
export const jobRoleComparison = async(role: string, markets: string[]):Promise<CountryComparison[]>=>{
       
  const jobLists = await Promise.all(markets.map((market)=>(searchJobs(market, role))))

  const jobs = jobLists.map((result, index)=>(
      ({jobCountry: markets[index], data: result} )
  ))
      return (jobs);
    
}
