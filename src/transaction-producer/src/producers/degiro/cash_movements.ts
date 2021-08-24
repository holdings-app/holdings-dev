import type { DegiroCashMovementResponse, DegiroRangeQuery } from "./types.ts";
import { encodeDate } from "./utils.ts";

export const getCashMovements = async ({
  fromDate,
  toDate,
  intAccount,
  sessionId,
}: DegiroRangeQuery): Promise<DegiroCashMovementResponse[]> => {
  const result = await (await fetch(
    `https://trader.degiro.nl/reporting/secure/v6/accountoverview?fromDate=${
      encodeDate(fromDate)
    }&toDate=${
      encodeDate(toDate)
    }&intAccount=${intAccount}&sessionId=${sessionId}`,
  )).json();

  const cashMovements: DegiroCashMovementResponse[] =
    result?.data?.cashMovements || [];

  return cashMovements.map(({
    id,
    date,
    productId,
    valueDate,
    orderId,
    description,
    currency,
    change,
    type,
    dividendNoteId,
    exchangeRate,
  }) => ({
    id,
    productId,
    date,
    valueDate,
    orderId,
    description,
    currency,
    change,
    type,
    dividendNoteId,
    exchangeRate,
  }));
};
