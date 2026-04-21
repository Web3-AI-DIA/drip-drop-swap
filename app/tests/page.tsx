import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TestsPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        <h1 className="text-5xl font-bold text-[#3DF2FF]">Testing Documentation</h1>
        
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Invariant Testing</h2>
          <p className="text-lg text-[#F5F9FF]/80">Our Move test suite relies heavily on checking invariants after each operation (e.g., ensuring <code>x · y</code> remains <code>k</code> after a swap, accounting for fees).</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Fuzz Testing</h2>
          <p className="text-lg text-[#F5F9FF]/80">We use randomized test inputs to explore edge cases in the swap math module, ensuring robustness against overflow or rounding errors.</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
