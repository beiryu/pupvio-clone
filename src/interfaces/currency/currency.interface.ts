import { CurrencyCategory } from "../currency-category/currency-category.interface";
import { Transaction } from "../transaction/transaction.interface";

export interface Currency {
  name: string;
  sign: string;
  symbol: string;
  iconUrl: string;
  isPopular: boolean;
  currencyCategoryId: number;
  currencyCategory: CurrencyCategory;
  transactions: Transaction[];
}
