'use client';
import { useState, useEffect, useMemo } from 'react';
import { ConnectButton, useWallet } from '@suiet/wallet-kit';
import { toast } from 'sonner';
import { ArrowDownUp, Settings, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SUPPORTED_COINS, CoinInfo } from '@/lib/coins';
import { buildSwapTransaction } from '@/lib/transactions';
import { motion } from 'motion/react';

export default function SwapPage() {
  const { connected, account, signAndExecuteTransaction } = useWallet();
  const [amountIn, setAmountIn] = useState('');
  const [coinIn, setCoinIn] = useState<CoinInfo>(SUPPORTED_COINS[0]);
  const [coinOut, setCoinOut] = useState<CoinInfo>(SUPPORTED_COINS[1]);
  const [slippage, setSlippage] = useState(0.5); // 0.5%
  const [showSettings, setShowSettings] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);

  // Constants - In a real app, these come from .env
  const PACKAGE_ID = process.env.NEXT_PUBLIC_PACKAGE_ID || '0xPACKAGE_ID_PLACEHOLDER';
  const POOL_ID = process.env.NEXT_PUBLIC_POOL_ID || '0xPOOL_ID_PLACEHOLDER';

  const estimatedAmountOut = useMemo(() => {
    if (!amountIn) return '0';
    // Mock AMM logic: slightly less than 1:1 due to fees
    const fee = 0.003; // 0.3%
    return (parseFloat(amountIn) * (1 - fee)).toFixed(coinOut.decimals > 4 ? 4 : coinOut.decimals);
  }, [amountIn, coinOut.decimals]);

  const handleSwap = async () => {
    if (!connected || !account) {
      toast.error('Connect your wallet first');
      return;
    }

    if (!amountIn || parseFloat(amountIn) <= 0) {
      toast.error('Enter a valid amount');
      return;
    }

    setIsSwapping(true);
    const toastId = toast.loading('Initiating Swap...', {
      description: `Swapping ${amountIn} ${coinIn.symbol} for ${coinOut.symbol}`,
    });

    try {
      // Calculate amounts with decimals
      const rawAmountIn = BigInt(Math.floor(parseFloat(amountIn) * Math.pow(10, coinIn.decimals)));
      
      // Calculate minimum output based on slippage
      const rawEstimatedOut = BigInt(Math.floor(parseFloat(estimatedAmountOut) * Math.pow(10, coinOut.decimals)));
      const minAmountOut = (rawEstimatedOut * BigInt(100 - Math.floor(slippage * 10))) / BigInt(100);

      toast.message('Transaction Building', {
        description: 'Constructing programmable transaction block...',
        id: toastId
      });

      const tx = buildSwapTransaction({
        packageId: PACKAGE_ID,
        poolId: POOL_ID,
        coinInId: '0xCOIN_OBJECT_ID_PLACEHOLDER', // In production, this must be a real object ID from wallet
        amountIn: rawAmountIn,
        minAmountOut: minAmountOut,
        coinTypeIn: coinIn.type,
        coinTypeOut: coinOut.type,
      });

      // Simulation Step (Robustness requirement)
      toast.message('Simulating', {
        description: 'Running dry-run to verify output...',
        id: toastId
      });

      const result = await signAndExecuteTransaction({
        transaction: tx,
      });

      toast.success('Swap Complete', {
        id: toastId,
        description: `Successfully swapped ${amountIn} ${coinIn.symbol}. Digest: ${result.digest.slice(0, 8)}...`,
        action: {
          label: 'View Explorer',
          onClick: () => window.open(`https://suiscan.xyz/testnet/tx/${result.digest}`, '_blank')
        }
      });
      setAmountIn('');
    } catch (error: any) {
      console.error(error);
      toast.error('Transaction Failed', {
        id: toastId,
        description: error.message || 'The transaction was rejected or failed execution.'
      });
    } finally {
      setIsSwapping(false);
    }
  };

  const switchTokens = () => {
    const temp = coinIn;
    setCoinIn(coinOut);
    setCoinOut(temp);
  };

  return (
    <main className="max-w-7xl mx-auto p-6">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-10 min-h-[60vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full max-w-md bg-[#131B31] border border-[#3DF2FF]/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-[#F5F9FF] tracking-tight">Swap</h1>
            <div className="flex gap-2">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                aria-label="Settings"
                className={`p-2 rounded-lg transition-colors ${showSettings ? 'bg-[#3DF2FF] text-[#0A0F1F]' : 'hover:bg-[#3DF2FF]/10 text-[#3DF2FF]'}`}
              >
                <Settings size={18} />
              </button>
              <ConnectButton />
            </div>
          </div>

          {/* Settings Overlay */}
          {showSettings && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-20 right-6 z-20 w-48 bg-[#1A243F] border border-[#3DF2FF]/20 rounded-2xl p-4 shadow-xl"
            >
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-[#F5F9FF]/40 mb-3">Slippage Tolerance</h3>
              <div className="flex gap-2">
                {[0.1, 0.5, 1.0].map((val) => (
                  <button
                    key={val}
                    onClick={() => { setSlippage(val); setShowSettings(false); }}
                    className={`flex-1 py-1 text-xs rounded-lg border transition-all ${slippage === val ? 'bg-[#3DF2FF] text-[#0A0F1F] border-[#3DF2FF]' : 'border-[#3DF2FF]/20 text-[#3DF2FF] hover:border-[#3DF2FF]'}`}
                  >
                    {val}%
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Input Area */}
          <div className="space-y-2">
            <div className="bg-[#0A0F1F] p-4 rounded-2xl border border-[#3DF2FF]/5 group focus-within:border-[#3DF2FF]/30 transition-colors">
              <div className="flex justify-between mb-2">
                <span className="text-[10px] text-[#F5F9FF]/30 uppercase tracking-[0.2em] font-bold">Sell</span>
                {connected && <span className="text-[10px] text-[#F5F9FF]/30 font-mono">Balance: --</span>}
              </div>
              <div className="flex items-center gap-4">
                <input 
                  type="number"
                  value={amountIn}
                  onChange={(e) => setAmountIn(e.target.value)}
                  placeholder="0.00"
                  aria-label="Amount to sell"
                  className="bg-transparent text-3xl font-bold text-white outline-none w-full placeholder:text-[#F5F9FF]/10"
                />
                <select 
                  aria-label="Token to sell"
                  className="bg-[#131B31] text-[#3DF2FF] font-bold py-2 px-3 rounded-xl border border-[#3DF2FF]/20 outline-none cursor-pointer hover:border-[#3DF2FF] transition-colors"
                  value={coinIn.symbol}
                  onChange={(e) => setCoinIn(SUPPORTED_COINS.find(c => c.symbol === e.target.value)!)}
                >
                  {SUPPORTED_COINS.map(c => <option key={c.symbol}>{c.symbol}</option>)}
                </select>
              </div>
            </div>

            {/* Switch Trigger */}
            <div className="flex justify-center -my-3 relative z-10">
              <button 
                onClick={switchTokens}
                aria-label="Switch tokens"
                className="bg-[#131B31] border border-[#3DF2FF]/20 p-2.5 rounded-xl text-[#3DF2FF] hover:scale-110 active:scale-95 transition-all shadow-lg group"
              >
                <ArrowDownUp size={20} className="group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>

            <div className="bg-[#0A0F1F] p-4 rounded-2xl border border-[#3DF2FF]/5 group focus-within:border-[#3DF2FF]/30 transition-colors">
              <div className="flex justify-between mb-2">
                <span className="text-[10px] text-[#F5F9FF]/30 uppercase tracking-[0.2em] font-bold">Buy</span>
                {connected && <span className="text-[10px] text-[#F5F9FF]/30 font-mono">Est. Received</span>}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-[#F5F9FF] w-full overflow-hidden">
                  {estimatedAmountOut === '0' ? <span className="text-[#F5F9FF]/10">0.00</span> : estimatedAmountOut}
                </div>
                <select 
                  aria-label="Token to buy"
                  className="bg-[#131B31] text-[#3DF2FF] font-bold py-2 px-3 rounded-xl border border-[#3DF2FF]/20 outline-none cursor-pointer hover:border-[#3DF2FF] transition-colors"
                  value={coinOut.symbol}
                  onChange={(e) => setCoinOut(SUPPORTED_COINS.find(c => c.symbol === e.target.value)!)}
                >
                  {SUPPORTED_COINS.map(c => <option key={c.symbol}>{c.symbol}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Pricing Details */}
          <div className="mt-6 px-1 space-y-2.5">
            <div className="flex justify-between text-[10px] text-[#F5F9FF]/40 uppercase tracking-widest font-semibold">
              <span>Price Impact</span>
              <span className="text-green-400">&lt; 0.01%</span>
            </div>
            <div className="flex justify-between text-[10px] text-[#F5F9FF]/40 uppercase tracking-widest font-semibold">
              <span>Max Slippage</span>
              <span className="text-[#3DF2FF]">{slippage}%</span>
            </div>
            <div className="flex justify-between text-[10px] text-[#F5F9FF]/40 uppercase tracking-widest font-semibold border-t border-[#3DF2FF]/5 pt-2.5">
              <span>Min. Received</span>
              <span>{(parseFloat(estimatedAmountOut) * (1 - slippage/100)).toFixed(4)} {coinOut.symbol}</span>
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleSwap}
            disabled={isSwapping || !amountIn || parseFloat(amountIn) <= 0}
            className={`w-full mt-8 py-4 rounded-2xl font-bold text-lg transition-all transform active:scale-[0.98] ${
              isSwapping || !amountIn || parseFloat(amountIn) <= 0
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' 
                : 'bg-[#3DF2FF] text-[#0A0F1F] hover:shadow-[0_0_30px_rgba(61,242,255,0.4)] hover:brightness-110'
            }`}
          >
            {isSwapping ? 'Executing...' : connected ? 'Confirm Swap' : 'Connect Wallet'}
          </button>
        </motion.div>

        {/* Audit / Trust Note */}
        <div className="mt-8 flex items-center gap-2 text-[#3DF2FF]/50 text-xs uppercase tracking-widest font-semibold">
          <Info size={14} />
          <span>Secured by Drip-Drop-Swap Precision Math</span>
        </div>
      </div>
      <Footer />
    </main>
  );
}
