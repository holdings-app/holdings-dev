import type { SchwabSyncResult, SchwabTransactionsQuery } from "./types.ts";
import { validate } from "./validate.ts";

const formatDate = (date: Date) => {
  const [day, month, year] = date.toISOString().slice(0, 10).split("-");
  return `${month}/${day}/${year}`;
};

const getRandomUuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });

export const sync = async ({
  fromDate,
  toDate,
  correlationId,
}: SchwabTransactionsQuery): Promise<SchwabSyncResult> => {
  const response = await fetch(
    "https://client.schwab.com/api/history/brokerage/GetTransactions",
    {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "schwab-client-correlid": correlationId,
        "schwab-spa-requestid": getRandomUuid(),
      },
      "referrer": "https://client.schwab.com/Apps/accounts/transactionhistory/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": JSON.stringify({
        "brokerageHistoryConfig": {
          "AsPTISEnabled": false,
          "IsDepositdetails": false,
          "IsFromSortKey": true,
          "IsIntra": false,
          "IsLnkBeyondVisible": true,
          "IsLogoBannerVisible": false,
          "IsNext": true,
          "IsPnlErrorMessageVisibility": false,
          "IsPrev": false,
          "IsPTISEnabled": false,
          "IsS1CheckImage": false,
          "IsSweep": true,
          "PageCount": 0,
          "ShowFullShortAsLabel": false,
          "ShowHeadersAsLabel": false,
          "SortField": "Date",
        },
        "brokerageHistoryIn": {
          "IsAccountTypeEAC": false,
          "SortSequence": "D",
          "ExportError": "",
          "FromDate": formatDate(fromDate),
          "ToDate": formatDate(toDate),
          "InvalidFromDate": "",
          "InvalidToDate": "",
          "SortValue": "Date",
          "SymbolExportValue": "",
          "DisplayTotal": true,
          "TimeFrame": "All",
          "TransactionFilters": [
            "Adjustments",
            "Checks",
            "Dividends",
            "Interest",
            "Taxes",
            "Withdrawals",
            "ATMActivity",
            "CorporateActions",
            "ElectronicTransfers",
            "Misc",
            "Trades",
            "BillPay",
            "Deposits",
            "Fees",
            "SecurityTransfers",
            "VisaDebitCard",
          ],
        },
      }),
      "method": "POST",
      "mode": "cors",
    },
  ).then((res) => res.json());

  if (!response.IsSuccess) {
    throw new Error(
      `Schwab request failed with response: ${JSON.stringify(response)}`,
    );
  }

  const result: SchwabSyncResult = {
    BrokerageHistoryOut: response.BrokerageHistoryOut,
    BrokerageHistoryIn: response.BrokerageHistoryIn,
    TransactionTypes: response.TransactionTypes,
  };
  const errors = validate("SchwabSyncResult", result);
  if (errors && errors.length > 0) {
    throw new Error(
      `Could not sync Schwab. Got errors: ${errors.join(", ")}`,
    );
  }

  return result;
};
