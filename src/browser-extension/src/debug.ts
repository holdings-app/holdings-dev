// Adapted from MIT licensed
// https://github.com/pkmnct/robinhood-mint-sync-chrome

import type { Json } from "./types.ts";

export class Debug {
  private prefix: string;
  private debugging = false;

  constructor(type: "background" | "content" | "internal", name: string) {
    const extensionPrefix = "Holdings.app";
    this.prefix = `${
      type === "content" ? extensionPrefix + " - " : ""
    }[${type}](${name})`;
    chrome.storage.sync.get("debuggingEnabled", ({ debuggingEnabled }) => {
      if (debuggingEnabled) {
        this.debugging = true;
        this.log("initialized");
      }
    });
  }

  public log = (...params: Json[]): void => this.write("log", params);
  public error = (...params: Json[]): void => this.write("error", params);
  public isEnabled = (): boolean => this.debugging;

  private write = (method: "log" | "error", params: Json[]): void => {
    if (this.debugging) {
      console[method]([this.prefix, ...params]);
    }
  };
}
