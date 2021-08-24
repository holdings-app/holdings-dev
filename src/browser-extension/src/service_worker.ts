import { Debug } from "./debug.ts";
import { extension } from "./extension.ts";

let brokerTabId: undefined | number;

const debug = new Debug("background", "Service Worker");

import type { EventHandler, Message, Sender } from "./types.ts";

// extension.runtime.onInstalled.addListener(() => {
//   extension.storage.sync.get(
//     { count: 0 } as IStorage,
//     ({ count }: IStorage) => {
//       console.log(count);
//     },
//   );
// });

const listeners = {
  "notification": ({ message }: EventHandler) => {
    extension.notifications.create("", message.options);
  },
  "error": ({ message }: EventHandler) => {
    extension.notifications.create("", message.options);
  },
  "broker-opened": ({ message, sender }: EventHandler) => {
    brokerTabId = sender.tab.id;
    debug.log(`broker-opened event on tab ${brokerTabId}`);
    debug.log(message.options);
  },
};

extension.runtime.onMessage.addListener((message: Message, sender: Sender) => {
  listeners[message.type]({ message, sender });
});
