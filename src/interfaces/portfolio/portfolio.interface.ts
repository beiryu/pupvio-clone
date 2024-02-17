import { CoinHolding } from '../coin-holding/coin-holding.interface';
import { Transaction } from '../transaction/transaction.interface';
import { User } from '../user/user.interface';

export interface Portfolio {
  name: string;
  walletAddress: string | null;
  avatarUrl: string;
  userId: number;
  user: User;
  coinHoldings: CoinHolding[];
  transactions: Transaction[];
}
