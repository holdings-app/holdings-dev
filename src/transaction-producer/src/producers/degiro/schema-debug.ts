// DO NOT EDIT MANUALLY!
// Generated from typings on src/producers/degiro/types.ts
// To regenerate call: make src/producers/degiro/schema-debug.ts
export default {
  "$ref": "#/definitions/DegiroSyncDebug",
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
    "DegiroCashFundMovement": {
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
        "exchangeRate": {
          "type": "number",
        },
        "id": {
          "type": "number",
        },
        "productId": {
          "type": "number",
        },
        "type": {
          "enum": [
            "CASH_FUND_TRANSACTION",
            "CASH_FUND_NAV_CHANGE",
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
        "productId",
        "type",
        "valueDate",
      ],
      "type": "object",
    },
    "DegiroCashMovement": {
      "anyOf": [
        {
          "$ref": "#/definitions/DegiroDividendCashMovement",
        },
        {
          "$ref": "#/definitions/DegiroCashFundMovement",
        },
        {
          "$ref": "#/definitions/DegiroFxCashMovement",
        },
        {
          "$ref": "#/definitions/DegiroFxWithdrawalMovement",
        },
        {
          "$ref": "#/definitions/DegiroCashSwepMovement",
        },
        {
          "$ref": "#/definitions/DegiroCashTransactionMovement",
        },
        {
          "$ref": "#/definitions/DegiroCompensationCashMovement",
        },
      ],
    },
    "DegiroCashSwepMovement": {
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
          "const": "FLATEX_CASH_SWEEP",
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
    "DegiroCashTransactionMovement": {
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
    "DegiroCompensationCashMovement": {
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
        "id": {
          "type": "number",
        },
        "productId": {
          "type": "number",
        },
        "type": {
          "const": "COMPENSATION_BOOKING",
          "type": "string",
        },
        "valueDate": {
          "type": "string",
        },
      },
      "required": [
        "change",
        "currency",
        "date",
        "description",
        "id",
        "productId",
        "type",
        "valueDate",
      ],
      "type": "object",
    },
    "DegiroCurrencyProductDetails": {
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
          "$ref": "#/definitions/degiroCurrencyProductType",
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
        "productType",
        "tradable",
        "category",
        "currency",
        "exchangeId",
      ],
      "type": "object",
    },
    "DegiroDividendCashMovement": {
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
        "id": {
          "type": "number",
        },
        "productId": {
          "type": "number",
        },
        "type": {
          "enum": [
            "CASH_TRANSACTION",
            "TRANSACTION",
          ],
          "type": "string",
        },
        "valueDate": {
          "type": "string",
        },
      },
      "required": [
        "change",
        "currency",
        "date",
        "description",
        "dividendNoteId",
        "id",
        "productId",
        "type",
        "valueDate",
      ],
      "type": "object",
    },
    "DegiroFxCashMovement": {
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
        "exchangeRate": {
          "type": "number",
        },
        "id": {
          "type": "number",
        },
        "productId": {
          "type": "number",
        },
        "type": {
          "enum": [
            "CASH_TRANSACTION",
            "TRANSACTION",
          ],
          "type": "string",
        },
        "valueDate": {
          "type": "string",
        },
      },
      "required": [
        "change",
        "currency",
        "date",
        "description",
        "exchangeRate",
        "id",
        "type",
        "valueDate",
      ],
      "type": "object",
    },
    "DegiroFxProductDetails": {
      "additionalProperties": false,
      "properties": {
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
    "DegiroFxWithdrawalMovement": {
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
          ],
          "type": "string",
        },
        "valueDate": {
          "type": "string",
        },
      },
      "required": [
        "change",
        "currency",
        "date",
        "description",
        "exchangeRate",
        "id",
        "orderId",
        "type",
        "valueDate",
      ],
      "type": "object",
    },
    "DegiroProductDetails": {
      "anyOf": [
        {
          "$ref": "#/definitions/DegiroStockProductDetails",
        },
        {
          "$ref": "#/definitions/DegiroFxProductDetails",
        },
        {
          "$ref": "#/definitions/DegiroCurrencyProductDetails",
        },
      ],
    },
    "DegiroStockProductDetails": {
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
          "$ref": "#/definitions/degiroStockProductType",
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
        "productType",
        "tradable",
        "category",
        "currency",
        "exchangeId",
      ],
      "type": "object",
    },
    "DegiroSyncDebug": {
      "additionalProperties": false,
      "properties": {
        "accountInfo": {
          "$ref": "#/definitions/DegiroAccountInfo",
        },
        "cashMovements": {
          "items": {
            "$ref": "#/definitions/DegiroCashMovement",
          },
          "type": "array",
        },
        "productDetails": {
          "items": {
            "$ref": "#/definitions/DegiroProductDetails",
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
