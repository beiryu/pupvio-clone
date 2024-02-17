import { Portfolio } from '../portfolio/portfolio.interface';
import { Transaction } from '../transaction/transaction.interface';

export interface CoinHolding {
  coinId: number;
  amount: number;
  portfolioId: number;
  portfolio: Portfolio;
  transactions: Transaction[];
  arrangePositionIndex: number | null;
}
