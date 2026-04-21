import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        <section className="col-span-12 bg-[#131B31] border border-[#3DF2FF]/10 rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-[#3DF2FF] mb-6 uppercase tracking-tighter">Privacy Policy</h1>
          <div className="space-y-6 text-[#F5F9FF]/80 leading-relaxed">
            <p>At Drip-Drop-Swap, privacy is paramount. As a decentralized application, we prioritize your data sovereignty.</p>
            <h2 className="text-xl font-semibold text-[#3DF2FF]">1. Information Collection</h2>
            <p>We do not collect personal information such as names, emails, or physical addresses. Your interactions are identified only by your public wallet address.</p>
            <h2 className="text-xl font-semibold text-[#3DF2FF]">2. Cookies</h2>
            <p>We use minimal cookies for essential site functionality and to save your preferences, such as theme settings.</p>
            <h2 className="text-xl font-semibold text-[#3DF2FF]">3. Third-Party Services</h2>
            <p>We may use third-party RPC providers to interact with the blockchain. These services may have their own privacy policies.</p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
