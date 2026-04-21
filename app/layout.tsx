import type { Metadata } from 'next';
import './globals.css';
import AppWalletProvider from '@/components/WalletProvider';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Drip-Drop-Swap',
  description: 'Precision Liquidity in Motion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0F1F] text-[#F5F9FF] font-sans">
        <AppWalletProvider>
          {children}
          <Toaster position="bottom-right" theme="dark" />
        </AppWalletProvider>
      </body>
    </html>
  );
}
