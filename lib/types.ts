import { SupportedCountry } from "./countries";

export interface CountrySalary {
    countryName: string;
    salary:  number | null;
    countryCode: string
    currency: string
}

