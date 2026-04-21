import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        <section className="col-span-8 bg-[#131B31] border border-[#3DF2FF]/10 rounded-2xl p-8">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Precision <span className="text-[#3DF2FF]">Liquidity</span><br/>in Motion.
          </h1>
          <p className="text-lg text-[#F5F9FF]/70 max-w-lg mb-6">
            A fully on-chain Constant-Product AMM built with Sui Move. Leveraging object-centric design for high-concurrency swaps and seamless liquidity provisioning.
          </p>
        </section>

        <section className="col-span-4 bg-[#131B31] border border-[#3DF2FF]/10 rounded-2xl p-6">
          <h3 className="text-[#3DF2FF] text-xs font-bold uppercase tracking-widest mb-3">Invariant Math</h3>
          <div className="bg-[#0A0F1F] rounded-xl p-4 flex items-center justify-center border border-[#3DF2FF]/5">
            <code className="text-2xl font-mono">x * y = k</code>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
