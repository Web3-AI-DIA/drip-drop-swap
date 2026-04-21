// lib/coins.ts
export interface CoinInfo {
  symbol: string;
  name: string;
  type: string;
  decimals: number;
  icon?: string;
}

export const SUPPORTED_COINS: CoinInfo[] = [
  {
    symbol: 'SUI',
    name: 'Sui',
    type: '0x2::sui::SUI',
    decimals: 9,
  },
  {
    symbol: 'USDC',
    name: 'Bridged USDC',
    type: '0x5d4b3023066494235199e197d5a79357ad228310f5270087c0170554248d70a::usdc::USDC',
    decimals: 6,
  },
  {
    symbol: 'USDT',
    name: 'Bridged USDT',
    type: '0xc06000611101193f56a2d9ab6305a4a159937a077d85376ea0a6b5795454644a::usdt::USDT',
    decimals: 6,
  },
];
