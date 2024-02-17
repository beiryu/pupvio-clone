import { TransactionType } from "@/lib/enums/transaction.enum";
import { Currency } from "../currency/currency.interface";
import { CoinHolding } from "../coin-holding/coin-holding.interface";
import { Portfolio } from "../portfolio/portfolio.interface";
import { Exchange } from "../exchange/exchange.interface";

export interface Transaction {
  transactionType: TransactionType;
  quantity: number;
  fee: number;
  pricePerCoin: number | null;
  hasUpdatedHoldings: boolean;
  fromWalletAddress: string | null;
  toWalletAddress: string | null;
  notes: string | null;
  datetime: Date;
  coinHoldingId: number;
  coinHolding: CoinHolding;
  portfolioId: number;
  portfolio: Portfolio;
  currencyId: number;
  currencyObject: Currency;
  exchangeId: number;
  exchangeObject: Exchange;
}
