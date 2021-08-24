import { getSettings } from "./settings.ts";
import { getTransactions } from "./transactions.ts";
import { getAccountInfo } from "./account_info.ts";
import { getCashMovements } from "./cash_movements.ts";
import { getProductDetails } from "./product_details.ts";
import type { DegiroDateRange, DegiroSyncResult } from "./types.ts";
import { validate } from "./validate.ts";

export const sync = async ({
  fromDate,
  toDate,
}: DegiroDateRange): Promise<DegiroSyncResult> => {
  const settings = await getSettings();
  const rangeQuery = {
    fromDate,
    toDate,
    ...settings,
  };
  const transactions = await getTransactions(rangeQuery);
  const accountInfo = await getAccountInfo(settings);
  const cashMovements = await getCashMovements(rangeQuery);
  const productDetails = await getProductDetails({
    transactions,
    cashMovements,
    ...settings,
  });

  const result = {
    productDetails,
    cashMovements,
    accountInfo,
    transactions,
  };

  const errors = validate("DegiroSyncResult", result);
  if (errors && errors.length > 0) {
    throw new Error(
      `Could not sync Degiro. Got errors: ${errors.join(", ")}`,
    );
  }

  return result;
};
