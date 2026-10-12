import Link from 'next/link'
import React from 'react'
import Salarycard from './Salarycard'

const Hero = () => {
  return (
    <div className="flex flex-wrap gap-14 pt-[72px] px-8 pb-16">
      {/* <div className="flex-[1_1_440px] min-w-[320px] flex flex-col gap-6 justify-center"> */}
        <div className="flex-[1_1_440px] min-w-0 sm:min-w-[320px] flex flex-col gap-6 justify-center">
        <h1 className="text-[52px] leading-[1.08] font-bold tracking-[-0.015em] ">
          Know what the role is really worth, wherever you work.
        </h1>
        <p className="text-[17px] leading-[1.65] text-[#5B6270] max-w-[46ch]">
          PayView pulls live job-market data from Adzuna across 14 countries,
          so you can see how a role&apos;s pay actually compares before you apply, negotiate, or relocate.
        </p>

        <form className="flex flex-wrap gap-[14px] mt-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="role" className="text-[13px] font-medium text-[#5B6270]">Role</label>
            <input type="text" id="role" placeholder="Frontend Engineer"
              className="text-[15px] px-[14px] py-[11px] border border-line rounded w-[220px] bg-white text-ink" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="market" className="text-[13px] font-medium text-[#5B6270]">Market</label>
            <input type="text" id="market" placeholder="United States"
              className="text-[15px] px-[14px] py-[11px] border border-line rounded w-[180px] bg-white text-ink" />
          </div>
          <div className="flex flex-col justify-end">
            <button type="submit"
              className="text-[15px] font-semibold px-[22px] py-3 rounded bg-brass text-ink cursor-pointer">
              Compare salaries
            </button>
          </div>
        </form>

        <Link href="#table" className="text-sm font-medium border-b border-ink w-fit pb-0.5">
          See sample data
        </Link>
      </div>

      {/* <div className="flex-[1_1_380px] min-w-[320px] flex items-center"> */}
      <div className="flex-[1_1_380px] min-w-0 sm:min-w-[320px] flex items-center">
        <Salarycard />
      </div>
    </div>
  )
}

export default Hero