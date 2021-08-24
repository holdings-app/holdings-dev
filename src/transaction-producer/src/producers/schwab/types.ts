export interface SchwabTransactionsQuery {
  fromDate: Date;
  toDate: Date;
  correlationId: string;
}

export interface SchwabBrokerageHistoryEntry {
  Action: string;
  Amount: string;
  Description: string;
  FeesAndCommission: string;
  Price: string;
  Quantity: string;
  Symbol: null | string;
  PresentationSymbol: null | string;
  TransactionDate: string;
  EffectiveDate: string;
  IsCharitableGiving: boolean;
  ShowDetailsLink: boolean;
  ShowS1CheckDetailsLink: boolean;
  ShowWireDetailsLink: boolean;
  ShowDepositsLink: boolean;
  OverlaySubtitle: string;
  AccruedInterest: null | string;
  PrimeBroker: null;
  Commission: null | string;
  CusipId: null | string;
  ExchProcFee: null;
  OrderHandlingFee: null;
  Other: null | string;
  Principal: null | string;
  RedemptionFee: null | string;
  SecurityNumber: null | string;
  SettleDate: null | string;
  StateTaxes: null | string;
  Total: null | string;
  TradeDate: null | string;
  WithHoldingTaxes: null | string;
  TranPrimeBrkrAm: null | string;
  RowIndex: number;
  SourceCode: string;
  AccountNumber: string;
  CheckNumber: string;
  CheckDate: null;
  DepositSeqId: string;
  AmountVerify: null;
}

export interface SchwabSyncResult {
  BrokerageHistoryOut: SchwabBrokerageHistoryEntry[];
  BrokerageHistoryIn: {
    IsAccountTypeEAC: boolean;
    SortSequence: number;
    SortValue: number;
    TransactionFilters: number[];
    TimeFrame: number;
    FilterSymbol: string;
    FromDate: string;
    ToDate: string;
    ExportError: string;
    InvalidFromDate: string;
    InvalidToDate: string;
    SymbolExportValue: string;
    IncludeOptions: null;
    DisplayTotal: boolean;
  };
  TransactionTypes: {
    Adjustments: string;
    AtmActivity: string;
    BillPay: string;
    Checks: string;
    CorporateActions: string;
    Deposits: string;
    Dividends: string;
    ElectronicTransfers: string;
    Fees: string;
    Interest: string;
    Misc: string;
    SecurityTransfers: string;
    Taxes: string;
    Trades: string;
    VisaDebitCard: string;
    Withdrawals: string;
  };
}

export type SchwabSyncDebug = SchwabSyncResult;
