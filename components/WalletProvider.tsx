'use client';
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';

export default function AppWalletProvider({ children }: { children: React.ReactNode }) {
  return <WalletProvider>{children as any}</WalletProvider>;
}
