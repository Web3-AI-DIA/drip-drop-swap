import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-[#3DF2FF]/20 pb-4 mb-8">
      <div className="flex items-center gap-3">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connection Lines */}
          <path 
            d="M20 18V24H10V28M20 24H30V28" 
            stroke="#3DF2FF" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            strokeOpacity="0.3"
          />
          
          {/* Top Drop - Cyan (Pool) */}
          <path 
            d="M20 4C20 4 14 10 14 14.5C14 17.8137 16.6863 20.5 20 20.5C23.3137 20.5 26 17.8137 26 14.5C26 10 20 4 20 4Z" 
            fill="#3DF2FF"
          />
          
          {/* Bottom Left Drop - Cyan (Token A) */}
          <path 
            d="M10 26C10 26 6 30.5 6 33.5C6 35.9853 8.01472 38 10.5 38C12.9853 38 15 35.9853 15 33.5C15 30.5 11 26 10 26Z" 
            fill="#3DF2FF"
          />
          
          {/* Bottom Right Drop - Cyan (Token B) */}
          <path 
            d="M30 26C30 26 26 30.5 26 33.5C26 35.9853 28.0147 38 30.5 38C32.9853 38 35 35.9853 35 33.5C35 30.5 31 26 30 26Z" 
            fill="#3DF2FF"
          />
        </svg>
        <Link href="/" className="text-xl font-bold tracking-tighter text-[#3DF2FF]">DRIP-DROP-SWAP</Link>
      </div>
      <nav className="flex gap-6 text-xs font-semibold tracking-widest uppercase text-[#F5F9FF]/60">
        <Link href="/" className="hover:text-[#3DF2FF]">Home</Link>
        <Link href="/swap" className="hover:text-[#3DF2FF]">Swap</Link>
        <Link href="/pool" className="hover:text-[#3DF2FF]">Pool</Link>
        <Link href="/amm" className="hover:text-[#3DF2FF]">Docs</Link>
      </nav>
    </nav>
  );
}
