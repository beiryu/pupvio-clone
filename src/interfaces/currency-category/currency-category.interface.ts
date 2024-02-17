import { Currency } from '../currency/currency.interface';

export interface CurrencyCategory {
  name: string;
  slug: string;
  currencies: Currency[];
}
