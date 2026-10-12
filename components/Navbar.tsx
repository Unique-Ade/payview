import Link from "next/link"


const Navbar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between border-b border-line py-[22px] px-8">
            <Link href="" className="logo font-bold text-xl">PayView</Link>
            <div className="flex items-center gap-4">
                <Link href="" className="compare-link">Compare</Link>
                <Link href="" className="market-link">Markets</Link>
                <Link href="" className="method-link">Methodology</Link>
                <Link href="" className="sign-in-link border border-line rounded px-4 py-2">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar