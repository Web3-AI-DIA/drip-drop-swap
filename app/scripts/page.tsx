import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ScriptsPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        <h1 className="text-5xl font-bold text-[#3DF2FF]">Publishing & Interaction</h1>
        
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Publishing via Sui CLI</h2>
          <pre className="bg-black/50 p-4 rounded text-[#3DF2FF] font-mono">{`sui client publish --gas-budget 50000000`}</pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Running a Swap</h2>
          <pre className="bg-black/50 p-4 rounded text-[#3DF2FF] font-mono">{`sui client call --package <PKG_ID> --module amm --function swap --args <POOL_ID> <COIN_ID> --gas-budget 1000000`}</pre>
        </section>
      </div>
      <Footer />
    </main>
  );
}
