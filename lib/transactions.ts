// lib/transactions.ts
import { Transaction } from '@mysten/sui/transactions';

export interface SwapParams {
  packageId: string;
  poolId: string;
  coinInId: string;
  amountIn: number | bigint;
  minAmountOut: number | bigint;
  coinTypeIn: string;
  coinTypeOut: string;
}

export const buildSwapTransaction = (params: SwapParams): Transaction => {
  const txb = new Transaction();

  // Split the exact amount from the user's coin
  const [coinInput] = txb.splitCoins(params.coinInId, [txb.pure.u64(params.amountIn)]);

  txb.moveCall({
    target: `${params.packageId}::amm::swap`,
    arguments: [
      txb.object(params.poolId),
      coinInput,
      txb.pure.u64(params.minAmountOut),
    ],
    typeArguments: [params.coinTypeIn, params.coinTypeOut],
  });

  return txb;
};

export const buildAddLiquidityTransaction = (
  packageId: string,
  poolId: string,
  coinAId: string,
  coinBId: string,
  amountA: number | bigint,
  amountB: number | bigint,
  coinTypeA: string,
  coinTypeB: string
): Transaction => {
  const txb = new Transaction();

  const [coinA] = txb.splitCoins(coinAId, [txb.pure.u64(amountA)]);
  const [coinB] = txb.splitCoins(coinBId, [txb.pure.u64(amountB)]);

  txb.moveCall({
    target: `${packageId}::amm::add_liquidity`,
    arguments: [txb.object(poolId), coinA, coinB],
    typeArguments: [coinTypeA, coinTypeB],
  });

  return txb;
};
