import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        <section className="col-span-12 bg-[#131B31] border border-[#3DF2FF]/10 rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-[#3DF2FF] mb-6 uppercase tracking-tighter">Terms and Conditions</h1>
          <div className="space-y-6 text-[#F5F9FF]/80 leading-relaxed">
            <p>Welcome to Drip-Drop-Swap. By using our platform, you agree to the following terms:</p>
            <h2 className="text-xl font-semibold text-[#3DF2FF]">1. Use of Protocol</h2>
            <p>Drip-Drop-Swap is a decentralized protocol. You use it at your own risk. We are not responsible for any financial losses incurred through the use of this interface or the underlying smart contracts.</p>
            <h2 className="text-xl font-semibold text-[#3DF2FF]">2. No Financial Advice</h2>
            <p>The information provided on this platform does not constitute financial advice. Trading digital assets involves significant risk.</p>
            <h2 className="text-xl font-semibold text-[#3DF2FF]">3. Jurisdiction</h2>
            <p>Users are responsible for ensuring their use of Drip-Drop-Swap complies with local laws and regulations.</p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
