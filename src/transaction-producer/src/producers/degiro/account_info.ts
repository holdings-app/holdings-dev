import type { DegiroAccountInfo, DegiroSettings } from "./types.ts";

export const getAccountInfo = async ({
  intAccount,
  sessionId,
}: DegiroSettings): Promise<DegiroAccountInfo> => {
  const result = await (await fetch(
    `https://trader.degiro.nl/trading/secure/v5/account/info/${intAccount};jsessionid=${sessionId}`,
  )).json();

  const accountInfo: DegiroAccountInfo = result?.data || {};
  const {
    clientId,
    baseCurrency,
    marginType,
    compensationCapping,
  } = accountInfo;
  return {
    clientId,
    baseCurrency,
    marginType,
    compensationCapping,
  };
};
