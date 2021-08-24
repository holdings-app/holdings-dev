export interface DegiroSettings {
  sessionId: string;
  intAccount: number;
}

export interface DegiroDateRange {
  fromDate: Date;
  toDate: Date;
}

export interface DegiroRangeQuery extends DegiroSettings, DegiroDateRange {}

export interface DegiroAccountInfo {
  clientId: number;
  baseCurrency: string;
  marginType: string;
  compensationCapping: number;
}

type degiroBuySell = "B" | "S";

export interface DegiroTransaction {
  id: number;
  productId: number;
  date: string;
  buysell: degiroBuySell;
  price: number;
  quantity: number;
  total: number;
  transfered: boolean;
  totalInBaseCurrency: number;
  totalPlusFeeInBaseCurrency: number;
  transactionTypeId: number;
  feeInBaseCurrency?: number;
  orderTypeId?: number;
  counterParty?: string;
  tradingVenue?: string;
  fxRate?: number;
}

// TODO: Divide in Multiple cash movement types

type degiroCashTransaction = "CASH_TRANSACTION" | "TRANSACTION";
type degiroCashSwep = "FLATEX_CASH_SWEEP";
type degiroCashFundTransaction = "CASH_FUND_TRANSACTION";
type degiroCashFundNavChange = "CASH_FUND_NAV_CHANGE";
type degiroCashCompensation = "COMPENSATION_BOOKING";

type degiroCashMovementResponseType =
  | degiroCashTransaction
  | degiroCashSwep
  | degiroCashFundTransaction
  | degiroCashFundNavChange
  | degiroCashCompensation;

export interface DegiroBaseCashMovement {
  id: number;
  date: string;
  valueDate: string;
  description: string;
  currency: string;
}

export interface DegiroFxCashMovement extends DegiroBaseCashMovement {
  exchangeRate: number;
  change: number;
  productId?: number;
  type: degiroCashTransaction;
}

export interface DegiroFxWithdrawalMovement extends DegiroFxCashMovement {
  orderId: string;
}

export interface DegiroCashFundMovement extends DegiroBaseCashMovement {
  exchangeRate?: number;
  change?: number;
  productId: number;
  type: degiroCashFundTransaction | degiroCashFundNavChange;
}

export interface DegiroCompensationCashMovement extends DegiroBaseCashMovement {
  productId: number;
  change: number;
  type: degiroCashCompensation;
}

export interface DegiroDividendCashMovement extends DegiroBaseCashMovement {
  dividendNoteId: number;
  productId: number;
  change: number;
  type: degiroCashTransaction;
}

export interface DegiroCashSwepMovement extends DegiroBaseCashMovement {
  productId?: number;
  orderId?: string;
  change?: number;
  type: degiroCashSwep;
}

export interface DegiroCashTransactionMovement extends DegiroBaseCashMovement {
  productId?: number;
  orderId?: string;
  change?: number;
  type: degiroCashTransaction;
}

export type DegiroCashMovement =
  | DegiroDividendCashMovement
  | DegiroCashFundMovement
  | DegiroFxCashMovement
  | DegiroFxWithdrawalMovement
  | DegiroCashSwepMovement
  | DegiroCashTransactionMovement
  | DegiroCompensationCashMovement;

export interface DegiroCashMovementResponse extends DegiroBaseCashMovement {
  exchangeRate?: number;
  change?: number;
  productId?: number;
  orderId?: string;
  dividendNoteId?: number;
  type: degiroCashMovementResponseType;
}

export interface DegiroProductDetailsQuery extends DegiroSettings {
  transactions: Pick<DegiroTransaction, "productId">[];
  cashMovements: Pick<DegiroCashMovement, "currency">[];
}
export type degiroStockProductType = "STOCK" | "ETF";
export type degiroCurrencyProductType = "CURRENCY";

export interface DegiroStockProductDetails {
  id: string;
  name: string;
  isin: string;
  symbol: string;
  productType: degiroStockProductType;
  tradable: boolean;
  category: string;
  currency: string;
  exchangeId: string;
}

export interface DegiroFxProductDetails {
  id: string;
  name: string;
  isin: string;
  symbol: string;
  tradable: boolean;
  currency: string;
  exchangeId: string;
}

export interface DegiroCurrencyProductDetails {
  id: string;
  name: string;
  isin: string;
  symbol: string;
  productType: degiroCurrencyProductType;
  tradable: boolean;
  category: string;
  currency: string;
  exchangeId: string;
}

// We must only save the fields that are required for rebuilding
// the user history. Price data should not be stored.
export type DegiroProductDetails =
  | DegiroStockProductDetails
  | DegiroFxProductDetails
  | DegiroCurrencyProductDetails;

export interface DegiroProductDetailsResponse {
  id: string;
  name: string;
  isin: string;
  symbol: string;
  productType?: degiroStockProductType | degiroCurrencyProductType;
  tradable: boolean;
  category?: string;
  currency: string;
  exchangeId: string;
}

export interface DegiroSyncResult {
  productDetails: DegiroProductDetailsResponse[];
  cashMovements: DegiroCashMovementResponse[];
  accountInfo: DegiroAccountInfo;
  transactions: DegiroTransaction[];
}

export interface DegiroSyncDebug {
  productDetails: DegiroProductDetails[];
  cashMovements: DegiroCashMovement[];
  accountInfo: DegiroAccountInfo;
  transactions: DegiroTransaction[];
}
