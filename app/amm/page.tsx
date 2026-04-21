import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AMMPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        <section className="col-span-12 bg-[#131B31] border border-[#3DF2FF]/10 rounded-2xl p-8 mb-4">
          <h1 className="text-4xl font-bold text-[#3DF2FF] mb-4 uppercase tracking-tighter">AMM Logic Architecture</h1>
          <p className="text-lg text-[#F5F9FF]/80">Drip-Drop-Swap is engineered for the unique Sui execution environment, prioritizing parallelization and determinism.</p>
        </section>
        
        <section className="col-span-12 lg:col-span-6 bg-[#131B31] border border-[#3DF2FF]/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#3DF2FF] mb-4">The Invariant</h2>
          <p className="mb-4 text-sm text-[#F5F9FF]/70">The constant product formula ensures that the product of the reserves of two tokens in a pool remains constant during a swap (ignoring fees).</p>
          <pre className="bg-[#0A0F1F] p-4 rounded text-[#3DF2FF] font-mono text-xl">{`x * y = k`}</pre>
          <ul className="mt-4 space-y-2 text-xs text-[#F5F9FF]/50 list-disc list-inside">
            <li>x = Reserve of Token A</li>
            <li>y = Reserve of Token B</li>
            <li>k = Invariant Product</li>
          </ul>
        </section>

        <section className="col-span-12 lg:col-span-6 bg-[#131B31] border border-[#3DF2FF]/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#3DF2FF] mb-4">Sui Object Architecture</h2>
          <div className="space-y-3 text-sm text-[#F5F9FF]/70">
            <p><strong className="text-[#3DF2FF]">Shared Objects:</strong> Liquidity pools are shared objects, allowing anyone to initiate a transaction that interacts with the pool.</p>
            <p><strong className="text-[#3DF2FF]">Capabilities:</strong> Admin operations (like fee adjustments) are guarded by an <code>AdminCap</code>, an owned object held by the protocol administrators.</p>
            <p><strong className="text-[#3DF2FF]">LP Tokens:</strong> Liquidity is represented by fungible <code>LP_TOKEN</code> objects, which can be transferred, staked, or burned to redeem liquidity.</p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
