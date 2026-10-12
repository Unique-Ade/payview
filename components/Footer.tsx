import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-line">
    <div className="max-w-[1200px] mx-auto px-8 py-7 flex flex-wrap justify-between gap-3">
        <p className="text-[13px] text-[#5B6270]">
            Data sourced from the Adzuna Job Search API. Figures shown are illustrative.
        </p>
        <div className="flex gap-5 text-[13px] text-[#5B6270]">
            <Link href="">Methodology</Link>
            <Link href="">Privacy</Link>
            <p>&copy; PayView</p>
        </div>
    </div>
</footer>
  )
}

export default Footer