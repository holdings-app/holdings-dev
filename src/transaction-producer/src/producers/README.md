# Transaction Producers

## Development

Transaction producers follow the
[SINGER specification](https://github.com/singer-io/getting-started/blob/master/docs/SPEC.md).

The extensions must only extract information related to the user transactions
and not propietary data from brokerage firms.

Financial instruments reported by producers must use a
[FIGI](https://www.openfigi.com/) (Financial Instrument Global Identifier) as
their primary key.

## Using producers on browser extensions

Users can opt to use a browser extension to manually sync their brokerage
account using their session.

## Using state

To avoid retrievieving all the transactions from the begining, you can use a
STATE property

    STATE {"transaction-producer-PRODUCER_NAME_HERE": {"stragegy": "APPEND", "data": {"last_date":"2021/07/05"}}}
