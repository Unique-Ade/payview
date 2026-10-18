export interface SupportedCountry {
  code: string;
  name: string;
  currency: string;
}

export const supportedCountries: SupportedCountry[] = [
  { code: "at", name: "Austria", currency: "EUR" },
  { code: "au", name: "Australia", currency: "AUD" },
  { code: "be", name: "Belgium", currency: "EUR" },
  { code: "br", name: "Brazil", currency: "BRL" },
  { code: "ca", name: "Canada", currency: "CAD" },
  { code: "de", name: "Germany", currency: "EUR" },
  { code: "es", name: "Spain", currency: "EUR" },
  { code: "fr", name: "France", currency: "EUR" },
  { code: "gb", name: "United Kingdom", currency: "GBP" },
  { code: "in", name: "India", currency: "INR" },
  { code: "it", name: "Italy", currency: "EUR" },
  { code: "mx", name: "Mexico", currency: "MXN" },
  { code: "nl", name: "Netherlands", currency: "EUR" },
  { code: "nz", name: "New Zealand", currency: "NZD" },
  { code: "pl", name: "Poland", currency: "PLN" },
  { code: "sg", name: "Singapore", currency: "SGD" },
  { code: "ch", name: "Switzerland", currency: "CHF" },
  { code: "us", name: "United States", currency: "USD" },
  { code: "za", name: "South Africa", currency: "ZAR" },
];



export const findCountryByName =(input: string): SupportedCountry | undefined =>{
  const countryInput = input.trim().toLowerCase() ;
  const country =  supportedCountries.find((i)=>(i.name.toLowerCase() === countryInput))
  return(country)
}

export const baselineCodes : string[] = ["us", "de", "gb", "za"];

export const buildMarkets =(input?: string):string[]=>{
    

     if(input){
          const arrangedCountries: string[] =  [...new Set([input, ...baselineCodes])].slice(0,4);                         
           return(arrangedCountries)  
     }else{
         return baselineCodes.slice(0,4);  
     }
    
}
