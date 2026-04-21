import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ModulesPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        <h1 className="text-5xl font-bold text-[#3DF2FF]">Move Modules</h1>
        
        <section className="col-span-12 lg:col-span-8 bg-[#131B31] border border-[#3DF2FF]/10 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-[#3DF2FF] mb-6">amm.move</h2>
          <p className="text-[#F5F9FF]/70 mb-4">The core logic for pool creation, swaps, and liquidity management. It utilizes Sui&apos;s object model to handle pool state as a shared object.</p>
          <pre className="bg-[#0A0F1F] p-6 rounded text-gray-300 font-mono text-xs overflow-x-auto border border-[#3DF2FF]/5">
{`/// Provides a way to swap T1 for T2.
public entry fun swap<T1, T2>(
    pool: &mut Pool<T1, T2>,
    coin_in: Coin<T1>,
    ctx: &mut TxContext
) {
    let amount_in = coin::value(&coin_in);
    assert!(amount_in > 0, EZeroAmount);

    let (reserve_1, reserve_2) = get_reserves(pool);
    let amount_out = math::get_amount_out(amount_in, reserve_1, reserve_2);
    
    // Logic for transferring coins and updating reserves
}`}
          </pre>
        </section>

        <section className="col-span-12 lg:col-span-4 bg-[#131B31] border border-[#3DF2FF]/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#3DF2FF] mb-4">math.move</h2>
          <p className="text-[#F5F9FF]/70 mb-4">Implements precision arithmetic for constant product pools.</p>
          <pre className="bg-[#0A0F1F] p-4 rounded text-gray-300 font-mono text-xs border border-[#3DF2FF]/5">
{`public fun get_amount_out(
    amount_in: u64,
    reserve_in: u64,
    reserve_out: u64
): u64 {
    let amount_with_fee = amount_in * 997;
    let numerator = amount_with_fee * reserve_out;
    let denominator = (reserve_in * 1000) + amount_with_fee;
    numerator / denominator
}`}
          </pre>
        </section>
      </div>
      <Footer />
    </main>
  );
}
