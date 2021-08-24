// DO NOT EDIT MANUALLY!
// Generated from typings on src/producers/degiro/types.ts
// To regenerate call: make src/producers/degiro/schema.ts
export default {
  "$ref": "#/definitions/DegiroSyncResult",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "DegiroAccountInfo": {
      "additionalProperties": false,
      "properties": {
        "baseCurrency": {
          "type": "string",
        },
        "clientId": {
          "type": "number",
        },
        "compensationCapping": {
          "type": "number",
        },
        "marginType": {
          "type": "string",
        },
      },
      "required": [
        "clientId",
        "baseCurrency",
        "marginType",
        "compensationCapping",
      ],
      "type": "object",
    },
    "DegiroCashMovementResponse": {
      "additionalProperties": false,
      "properties": {
        "change": {
          "type": "number",
        },
        "currency": {
          "type": "string",
        },
        "date": {
          "type": "string",
        },
        "description": {
          "type": "string",
        },
        "dividendNoteId": {
          "type": "number",
        },
        "exchangeRate": {
          "type": "number",
        },
        "id": {
          "type": "number",
        },
        "orderId": {
          "type": "string",
        },
        "productId": {
          "type": "number",
        },
        "type": {
          "enum": [
            "CASH_TRANSACTION",
            "TRANSACTION",
            "FLATEX_CASH_SWEEP",
            "CASH_FUND_TRANSACTION",
            "CASH_FUND_NAV_CHANGE",
            "COMPENSATION_BOOKING",
          ],
          "type": "string",
        },
        "valueDate": {
          "type": "string",
        },
      },
      "required": [
        "currency",
        "date",
        "description",
        "id",
        "type",
        "valueDate",
      ],
      "type": "object",
    },
    "DegiroProductDetailsResponse": {
      "additionalProperties": false,
      "properties": {
        "category": {
          "type": "string",
        },
        "currency": {
          "type": "string",
        },
        "exchangeId": {
          "type": "string",
        },
        "id": {
          "type": "string",
        },
        "isin": {
          "type": "string",
        },
        "name": {
          "type": "string",
        },
        "productType": {
          "anyOf": [
            {
              "$ref": "#/definitions/degiroStockProductType",
            },
            {
              "$ref": "#/definitions/degiroCurrencyProductType",
            },
          ],
        },
        "symbol": {
          "type": "string",
        },
        "tradable": {
          "type": "boolean",
        },
      },
      "required": [
        "id",
        "name",
        "isin",
        "symbol",
        "tradable",
        "currency",
        "exchangeId",
      ],
      "type": "object",
    },
    "DegiroSyncResult": {
      "additionalProperties": false,
      "properties": {
        "accountInfo": {
          "$ref": "#/definitions/DegiroAccountInfo",
        },
        "cashMovements": {
          "items": {
            "$ref": "#/definitions/DegiroCashMovementResponse",
          },
          "type": "array",
        },
        "productDetails": {
          "items": {
            "$ref": "#/definitions/DegiroProductDetailsResponse",
          },
          "type": "array",
        },
        "transactions": {
          "items": {
            "$ref": "#/definitions/DegiroTransaction",
          },
          "type": "array",
        },
      },
      "required": [
        "productDetails",
        "cashMovements",
        "accountInfo",
        "transactions",
      ],
      "type": "object",
    },
    "DegiroTransaction": {
      "additionalProperties": false,
      "properties": {
        "buysell": {
          "enum": [
            "B",
            "S",
          ],
          "type": "string",
        },
        "counterParty": {
          "type": "string",
        },
        "date": {
          "type": "string",
        },
        "feeInBaseCurrency": {
          "type": "number",
        },
        "fxRate": {
          "type": "number",
        },
        "id": {
          "type": "number",
        },
        "orderTypeId": {
          "type": "number",
        },
        "price": {
          "type": "number",
        },
        "productId": {
          "type": "number",
        },
        "quantity": {
          "type": "number",
        },
        "total": {
          "type": "number",
        },
        "totalInBaseCurrency": {
          "type": "number",
        },
        "totalPlusFeeInBaseCurrency": {
          "type": "number",
        },
        "tradingVenue": {
          "type": "string",
        },
        "transactionTypeId": {
          "type": "number",
        },
        "transfered": {
          "type": "boolean",
        },
      },
      "required": [
        "id",
        "productId",
        "date",
        "buysell",
        "price",
        "quantity",
        "total",
        "transfered",
        "totalInBaseCurrency",
        "totalPlusFeeInBaseCurrency",
        "transactionTypeId",
      ],
      "type": "object",
    },
    "degiroCurrencyProductType": {
      "const": "CURRENCY",
      "type": "string",
    },
    "degiroStockProductType": {
      "enum": [
        "STOCK",
        "ETF",
      ],
      "type": "string",
    },
  },
};
