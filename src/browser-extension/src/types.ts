import type { chrome } from "../deps.ts";

export type IStorage = {
  count: number;
};

export type Json = string | number | boolean | null | Json[] | {
  [key: string]: Json;
};

export type MessageType = "notification" | "error";
export type MessageOptions = Json;

export interface Message {
  type: MessageType;
  options: MessageOptions;
  debug?: unknown;
  error?: Error;
}

export type Sender = chrome.runtime.MessageSender;
export interface EventHandler {
  message: Message;
  sender: Sender;
}
