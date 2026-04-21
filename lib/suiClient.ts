// lib/suiClient.ts
import { SuiGrpcClient } from '@mysten/sui/grpc';

export const suiClient = new SuiGrpcClient({
  network: 'testnet',
  baseUrl: 'https://fullnode.testnet.sui.io:443',
});
