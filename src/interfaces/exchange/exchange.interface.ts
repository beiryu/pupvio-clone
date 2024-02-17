import { Transaction } from '../transaction/transaction.interface';

export interface Exchange {
  name: string;
  slug: string;
  externalId: number;
  transactions: Transaction[];
}
