import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-[#3DF2FF]/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] tracking-widest text-[#F5F9FF]/30">
          <p>© {new Date().getFullYear()} DRIP-DROP-SWAP PROTOCOL • BUILT FOR SUI BLOCKCHAIN</p>
          <p>PRECISION LIQUIDITY IN MOTION</p>
        </div>
        <div className="flex gap-6 text-[10px] tracking-widest uppercase font-bold text-[#F5F9FF]/40">
          <Link href="/terms" className="hover:text-[#3DF2FF] transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-[#3DF2FF] transition-colors">Privacy</Link>
          <Link href="/amm" className="hover:text-[#3DF2FF] transition-colors">Docs</Link>
        </div>
      </div>
    </footer>
  );
}
