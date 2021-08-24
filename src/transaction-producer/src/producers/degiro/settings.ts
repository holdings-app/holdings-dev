import type { DegiroSettings } from "./types.ts";

let settingsCache: DegiroSettings | undefined;

export const getSettings = async (useCache = true): Promise<DegiroSettings> => {
  if (useCache && settingsCache) {
    return settingsCache;
  }
  const sessionId = JSON.parse(localStorage.getItem("sessionId") || "");

  if (!sessionId) {
    throw new Error(`Could not find session ID`);
  }
  // We only want the intAccount from the account details page since we need
  // it to build subsequent URL's.
  // WARNING: Unfortunately this service returns to much PII. We should
  // not allow exposing anything other than intAccount on future code updates.
  const accountDetails = await (await fetch(
    `https://trader.degiro.nl/pa/secure/client?sessionId=${sessionId}`,
  )).json();
  const { intAccount } = accountDetails?.data;
  const result = {
    sessionId,
    intAccount,
  };
  if (useCache) {
    settingsCache = result;
  }
  return result;
};
