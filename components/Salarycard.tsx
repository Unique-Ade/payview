const Salarycard = () => {
  return (
    <div className="w-full bg-ink rounded-md p-7 flex flex-col gap-[18px]">
      <div>
        <h2 className="text-[15px] font-semibold text-paper">Frontend Engineer</h2>
        <p className="text-[13px] text-[#8992A3] mt-0.5">Median annual pay, by market</p>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between py-[13px] border-t border-[#2A3140]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-paper border border-[#3A4154] rounded-[3px] px-1.5 py-0.5">US</span>
            <span className="text-sm text-paper">United States</span>
          </div>
          <span className="font-mono text-[15px] text-paper">$128,400</span>
        </div>

        <div className="flex items-center justify-between py-[13px] border-t border-[#2A3140]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-paper border border-[#3A4154] rounded-[3px] px-1.5 py-0.5">DE</span>
            <span className="text-sm text-paper">Germany</span>
          </div>
          <span className="font-mono text-[15px] text-paper">€71,200</span>
        </div>

        <div className="flex items-center justify-between py-[13px] border-t border-[#2A3140]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-paper border border-[#3A4154] rounded-[3px] px-1.5 py-0.5">GB</span>
            <span className="text-sm text-paper">United Kingdom</span>
          </div>
          <span className="font-mono text-[15px] text-paper">£58,900</span>
        </div>

        <div className="flex items-center justify-between py-[13px] border-t border-b border-[#2A3140]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-paper border border-[#3A4154] rounded-[3px] px-1.5 py-0.5">ZA</span>
            <span className="text-sm text-paper">South Africa</span>
          </div>
          <span className="font-mono text-[15px] text-paper">R58,900</span>
        </div>
      </div>

      <p className="text-xs text-[#8992A3]">Source: Adzuna, updated daily</p>
    </div>
  )
}

export default Salarycard;