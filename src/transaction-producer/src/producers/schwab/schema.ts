// DO NOT EDIT MANUALLY!
// Generated from typings on src/producers/schwab/types.ts
// To regenerate call: make src/producers/schwab/schema.ts
export default {
  "$ref": "#/definitions/SchwabSyncResult",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "SchwabBrokerageHistoryEntry": {
      "additionalProperties": false,
      "properties": {
        "AccountNumber": {
          "type": "string",
        },
        "AccruedInterest": {
          "type": [
            "null",
            "string",
          ],
        },
        "Action": {
          "type": "string",
        },
        "Amount": {
          "type": "string",
        },
        "AmountVerify": {
          "type": "null",
        },
        "CheckDate": {
          "type": "null",
        },
        "CheckNumber": {
          "type": "string",
        },
        "Commission": {
          "type": [
            "null",
            "string",
          ],
        },
        "CusipId": {
          "type": [
            "null",
            "string",
          ],
        },
        "DepositSeqId": {
          "type": "string",
        },
        "Description": {
          "type": "string",
        },
        "EffectiveDate": {
          "type": "string",
        },
        "ExchProcFee": {
          "type": "null",
        },
        "FeesAndCommission": {
          "type": "string",
        },
        "IsCharitableGiving": {
          "type": "boolean",
        },
        "OrderHandlingFee": {
          "type": "null",
        },
        "Other": {
          "type": [
            "null",
            "string",
          ],
        },
        "OverlaySubtitle": {
          "type": "string",
        },
        "PresentationSymbol": {
          "type": [
            "null",
            "string",
          ],
        },
        "Price": {
          "type": "string",
        },
        "PrimeBroker": {
          "type": "null",
        },
        "Principal": {
          "type": [
            "null",
            "string",
          ],
        },
        "Quantity": {
          "type": "string",
        },
        "RedemptionFee": {
          "type": [
            "null",
            "string",
          ],
        },
        "RowIndex": {
          "type": "number",
        },
        "SecurityNumber": {
          "type": [
            "null",
            "string",
          ],
        },
        "SettleDate": {
          "type": [
            "null",
            "string",
          ],
        },
        "ShowDepositsLink": {
          "type": "boolean",
        },
        "ShowDetailsLink": {
          "type": "boolean",
        },
        "ShowS1CheckDetailsLink": {
          "type": "boolean",
        },
        "ShowWireDetailsLink": {
          "type": "boolean",
        },
        "SourceCode": {
          "type": "string",
        },
        "StateTaxes": {
          "type": [
            "null",
            "string",
          ],
        },
        "Symbol": {
          "type": [
            "null",
            "string",
          ],
        },
        "Total": {
          "type": [
            "null",
            "string",
          ],
        },
        "TradeDate": {
          "type": [
            "null",
            "string",
          ],
        },
        "TranPrimeBrkrAm": {
          "type": [
            "null",
            "string",
          ],
        },
        "TransactionDate": {
          "type": "string",
        },
        "WithHoldingTaxes": {
          "type": [
            "null",
            "string",
          ],
        },
      },
      "required": [
        "Action",
        "Amount",
        "Description",
        "FeesAndCommission",
        "Price",
        "Quantity",
        "Symbol",
        "PresentationSymbol",
        "TransactionDate",
        "EffectiveDate",
        "IsCharitableGiving",
        "ShowDetailsLink",
        "ShowS1CheckDetailsLink",
        "ShowWireDetailsLink",
        "ShowDepositsLink",
        "OverlaySubtitle",
        "AccruedInterest",
        "PrimeBroker",
        "Commission",
        "CusipId",
        "ExchProcFee",
        "OrderHandlingFee",
        "Other",
        "Principal",
        "RedemptionFee",
        "SecurityNumber",
        "SettleDate",
        "StateTaxes",
        "Total",
        "TradeDate",
        "WithHoldingTaxes",
        "TranPrimeBrkrAm",
        "RowIndex",
        "SourceCode",
        "AccountNumber",
        "CheckNumber",
        "CheckDate",
        "DepositSeqId",
        "AmountVerify",
      ],
      "type": "object",
    },
    "SchwabSyncResult": {
      "additionalProperties": false,
      "properties": {
        "BrokerageHistoryIn": {
          "additionalProperties": false,
          "properties": {
            "DisplayTotal": {
              "type": "boolean",
            },
            "ExportError": {
              "type": "string",
            },
            "FilterSymbol": {
              "type": "string",
            },
            "FromDate": {
              "type": "string",
            },
            "IncludeOptions": {
              "type": "null",
            },
            "InvalidFromDate": {
              "type": "string",
            },
            "InvalidToDate": {
              "type": "string",
            },
            "IsAccountTypeEAC": {
              "type": "boolean",
            },
            "SortSequence": {
              "type": "number",
            },
            "SortValue": {
              "type": "number",
            },
            "SymbolExportValue": {
              "type": "string",
            },
            "TimeFrame": {
              "type": "number",
            },
            "ToDate": {
              "type": "string",
            },
            "TransactionFilters": {
              "items": {
                "type": "number",
              },
              "type": "array",
            },
          },
          "required": [
            "IsAccountTypeEAC",
            "SortSequence",
            "SortValue",
            "TransactionFilters",
            "TimeFrame",
            "FilterSymbol",
            "FromDate",
            "ToDate",
            "ExportError",
            "InvalidFromDate",
            "InvalidToDate",
            "SymbolExportValue",
            "IncludeOptions",
            "DisplayTotal",
          ],
          "type": "object",
        },
        "BrokerageHistoryOut": {
          "items": {
            "$ref": "#/definitions/SchwabBrokerageHistoryEntry",
          },
          "type": "array",
        },
        "TransactionTypes": {
          "additionalProperties": false,
          "properties": {
            "Adjustments": {
              "type": "string",
            },
            "AtmActivity": {
              "type": "string",
            },
            "BillPay": {
              "type": "string",
            },
            "Checks": {
              "type": "string",
            },
            "CorporateActions": {
              "type": "string",
            },
            "Deposits": {
              "type": "string",
            },
            "Dividends": {
              "type": "string",
            },
            "ElectronicTransfers": {
              "type": "string",
            },
            "Fees": {
              "type": "string",
            },
            "Interest": {
              "type": "string",
            },
            "Misc": {
              "type": "string",
            },
            "SecurityTransfers": {
              "type": "string",
            },
            "Taxes": {
              "type": "string",
            },
            "Trades": {
              "type": "string",
            },
            "VisaDebitCard": {
              "type": "string",
            },
            "Withdrawals": {
              "type": "string",
            },
          },
          "required": [
            "Adjustments",
            "AtmActivity",
            "BillPay",
            "Checks",
            "CorporateActions",
            "Deposits",
            "Dividends",
            "ElectronicTransfers",
            "Fees",
            "Interest",
            "Misc",
            "SecurityTransfers",
            "Taxes",
            "Trades",
            "VisaDebitCard",
            "Withdrawals",
          ],
          "type": "object",
        },
      },
      "required": [
        "BrokerageHistoryOut",
        "BrokerageHistoryIn",
        "TransactionTypes",
      ],
      "type": "object",
    },
  },
};
