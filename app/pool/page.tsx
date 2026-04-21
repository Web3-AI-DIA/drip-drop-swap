'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Info, ExternalLink, TrendingUp, Droplets, PieChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ConnectButton, useWallet } from '@suiet/wallet-kit';

export default function PoolPage() {
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all');

  const stats = [
    { label: 'Total Volume (24H)', value: '$1.2M', growth: '+12.5%', icon: TrendingUp },
    { label: 'TVL', value: '$84.5M', growth: '+2.1%', icon: PieChart },
    { label: 'Total Pools', value: '42', icon: Droplets },
  ];

  const featuredPools = [
    { pair: 'SUI / USDC', liquidity: '$12.4M', apr: '18.5%', vol: '$1.1M' },
    { pair: 'SUI / USDT', liquidity: '$8.2M', apr: '12.4%', vol: '$450K' },
    { pair: 'CETUS / SUI', liquidity: '$4.1M', apr: '45.2%', vol: '$890K' },
  ];

  return (
    <main className="max-w-7xl mx-auto p-6 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-[#F5F9FF] tracking-tight mb-2">Liquidity Hub</h1>
            <p className="text-[#F5F9FF]/50 uppercase text-[10px] tracking-[0.3em] font-bold">Provide liquidity & earn rewards</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#3DF2FF] text-[#0A0F1F] px-6 py-3 rounded-2xl font-bold shadow-[0_0_20px_rgba(61,242,255,0.2)] hover:shadow-[0_0_30px_rgba(61,242,255,0.4)] transition-all"
          >
            <Plus size={20} />
            Add Liquidity
          </motion.button>
        </div>

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#131B31] border border-[#3DF2FF]/10 p-6 rounded-3xl relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#3DF2FF]/5 rounded-xl text-[#3DF2FF]">
                  <stat.icon size={24} />
                </div>
                {stat.growth && (
                  <span className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded-lg">
                    {stat.growth}
                  </span>
                )}
              </div>
              <h3 className="text-[10px] text-[#F5F9FF]/40 uppercase tracking-[0.2em] font-bold mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold text-white font-mono">{stat.value}</p>
              
              {/* Subtle background glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#3DF2FF]/5 blur-3xl rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-12 gap-6">
          {/* Pools List */}
          <div className="col-span-12 lg:col-span-8 bg-[#131B31] border border-[#3DF2FF]/10 rounded-3xl p-6">
            <div className="flex items-center gap-4 mb-8 border-b border-[#3DF2FF]/5 pb-4">
              <button 
                onClick={() => setActiveTab('all')}
                className={`text-sm font-bold transition-all ${activeTab === 'all' ? 'text-[#3DF2FF]' : 'text-[#F5F9FF]/30 hover:text-[#F5F9FF]/60'}`}
              >
                All Pools
              </button>
              <button 
                onClick={() => setActiveTab('my')}
                className={`text-sm font-bold transition-all ${activeTab === 'my' ? 'text-[#3DF2FF]' : 'text-[#F5F9FF]/30 hover:text-[#F5F9FF]/60'}`}
              >
                My Positions
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] text-[#F5F9FF]/30 uppercase tracking-[0.2em] font-bold border-b border-[#3DF2FF]/5">
                    <th className="pb-4">Pool Pair</th>
                    <th className="pb-4">Liquidity</th>
                    <th className="pb-4">APR</th>
                    <th className="pb-4">Volume (24H)</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3DF2FF]/5">
                  {(activeTab === 'all' ? featuredPools : []).map((pool, i) => (
                    <motion.tr 
                      key={pool.pair}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group hover:bg-[#3DF2FF]/5 transition-colors"
                    >
                      <td className="py-5 font-bold text-[#F5F9FF]">{pool.pair}</td>
                      <td className="py-5 text-[#F5F9FF]/70 font-mono">{pool.liquidity}</td>
                      <td className="py-5 text-green-400 font-bold">{pool.apr}</td>
                      <td className="py-5 text-[#F5F9FF]/70 font-mono">{pool.vol}</td>
                      <td className="py-5 text-right">
                        <button className="p-2 text-[#3DF2FF] opacity-0 group-hover:opacity-100 transition-opacity">
                          <Plus size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              {activeTab === 'my' && !connected && (
                <div className="py-20 flex flex-col items-center justify-center text-center">
                  <Droplets size={48} className="text-[#3DF2FF]/20 mb-4" />
                  <p className="text-[#F5F9FF]/40 mb-6 font-medium">Connect your wallet to see your positions</p>
                  <ConnectButton />
                </div>
              )}
            </div>
          </div>

          {/* Side Panel: Yield Farming */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-[#131B31] border border-[#3DF2FF]/10 rounded-3xl p-6 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Plus className="text-yellow-400" size={16} />
                  <h3 className="text-[10px] text-yellow-400 uppercase tracking-[0.2em] font-bold">Boosted Yields</h3>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 italic">Earn up to 45.2% APR</h4>
                <p className="text-xs text-[#F5F9FF]/40 mb-6 leading-relaxed">Stake your LP tokens in Drip-Drop-Swap farms to earn bonus $DRIP rewards.</p>
                <button className="w-full bg-[#1A243F] border border-[#3DF2FF]/20 text-[#3DF2FF] py-3 rounded-2xl font-bold hover:bg-[#3DF2FF]/10 transition-all text-sm">
                  Go to Farms
                </button>
              </div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <PieChart size={120} />
              </div>
            </div>

            <div className="bg-[#131B31] border border-[#E94ADF]/20 rounded-3xl p-6 relative overflow-hidden group">
              <div className="flex items-center gap-2 mb-4">
                <Info className="text-[#E94ADF]" size={16} />
                <h3 className="text-[10px] text-[#E94ADF] uppercase tracking-[0.2em] font-bold">V2 Migration</h3>
              </div>
              <p className="text-xs text-[#F5F9FF]/60 mb-4 leading-relaxed font-medium">Concentrated liquidity V2 pools are coming soon. Stay tuned for higher capital efficiency.</p>
              <a href="#" className="text-[10px] text-[#E94ADF] font-bold flex items-center gap-1 hover:underline underline-offset-4">
                READ ANNOUNCEMENT <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
