import type {
  DegiroProductDetailsQuery,
  DegiroProductDetailsResponse,
} from "./types.ts";

export const getProductDetails = async ({
  intAccount,
  sessionId,
  cashMovements,
  transactions,
}: DegiroProductDetailsQuery): Promise<DegiroProductDetailsResponse[]> => {
  const productIdsFromTransactions = transactions.map(({ productId }) =>
    productId
  );
  const currencies = cashMovements.map(({ currency }) => currency);

  const productIds = [
    ...new Set([...productIdsFromTransactions, ...currencies]),
  ].sort();

  const result = await (await fetch(
    `https://trader.degiro.nl/product_search/secure/v5/products/info?intAccount=${intAccount}&sessionId=${sessionId}`,
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(productIds),
      method: "POST",
    },
  )).json();
  const entries: DegiroProductDetailsResponse[] = Object.values(
    result?.data || {},
  );
  // We are only interested in the product details that are required
  // to reconstruct the user transactions. Other details must not be
  // stored
  return entries.map(({
    id,
    name,
    isin,
    symbol,
    productType,
    tradable,
    category,
    currency,
    exchangeId,
  }: DegiroProductDetailsResponse) => ({
    id,
    name,
    isin,
    symbol,
    productType,
    tradable,
    category,
    currency,
    exchangeId,
  }));
};
