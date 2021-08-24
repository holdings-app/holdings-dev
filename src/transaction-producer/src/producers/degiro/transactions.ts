import type { DegiroRangeQuery, DegiroTransaction } from "./types.ts";
import { encodeDate } from "./utils.ts";

export const getTransactions = async ({
  fromDate,
  toDate,
  intAccount,
  sessionId,
}: DegiroRangeQuery): Promise<DegiroTransaction[]> => {
  const result = await (await fetch(
    `https://trader.degiro.nl/reporting/secure/v4/transactions?fromDate=${
      encodeDate(fromDate)
    }&toDate=${
      encodeDate(toDate)
    }&groupTransactionsByOrder=false&intAccount=${intAccount}&sessionId=${sessionId}`,
  )).json();

  const transactions: DegiroTransaction[] = result?.data || [];
  return transactions.map(({
    id,
    productId,
    date,
    buysell,
    price,
    quantity,
    total,
    transfered,
    totalInBaseCurrency,
    totalPlusFeeInBaseCurrency,
    transactionTypeId,
    feeInBaseCurrency,
    orderTypeId,
    counterParty,
    tradingVenue,
    fxRate,
  }) => ({
    id,
    productId,
    date,
    buysell,
    price,
    quantity,
    total,
    transfered,
    totalInBaseCurrency,
    totalPlusFeeInBaseCurrency,
    transactionTypeId,
    feeInBaseCurrency,
    orderTypeId,
    counterParty,
    tradingVenue,
    fxRate,
  }));
};
