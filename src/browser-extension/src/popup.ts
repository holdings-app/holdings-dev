import type { IStorage, Json } from "./types.ts";
import l10n from "./l10n.ts";
import { extension } from "./extension.ts";

extension.storage.sync.get(
  { count: 0 } as IStorage,
  ({ count }: IStorage) => {
    console.log(count);
  },
);

const handleButton = () => {
  // const sessionId = JSON.parse(localStorage.getItem("sessionId") || "");
  // const res = await fetch(
  //   `https://trader.degiro.nl/reporting/secure/v3/ca/51026485?intAccount=51026485&sessionId=${sessionId}`,
  //   {
  //     "referrer": "https://trader.degiro.nl/trader/",
  //     "referrerPolicy": "strict-origin-when-cross-origin",
  //     "body": null,
  //     "method": "GET",
  //     "mode": "cors",
  //     "credentials": "include",
  //   },
  // );

  // const json = await res.json();
  extension.storage.sync.get(["sessionId"], (items: Json) => {
    extension.runtime.sendMessage("", {
      type: "notification",
      options: {
        title: "Got positions",
        message: JSON.stringify(items),
        iconUrl: "/images/logo-512.png",
        type: "basic",
      },
    });
    // const url = localStorage.getItem("sessionId");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const notifyButton = document.getElementById("notifyButton");
  if (notifyButton) {
    notifyButton.addEventListener("click", handleButton);
  }
  l10n();
});

// import { extension } from "./extension.ts";

// const button = document.createElement("button");
// button.textContent = "Greet me!";
// document.body.insertAdjacentElement("afterbegin", button);
// button.addEventListener("click", () => {
//   extension.runtime.sendMessage("", {
//     type: "notification",
//     options: {
//       title: "Just wanted to notify you",
//       message: "How great it is!",
//       iconUrl: "/images/logo-512.png",
//       type: "basic",
//     },
//   });
// });

// import { Debug } from "../utilities/debug";

// const debug = new Debug("background", "Browser Action");

// chrome.browserAction.onClicked.addListener((tab) => {
//   debug.log("browser action triggered");
//   chrome.tabs.create({
//     url: chrome.extension.getURL("html/welcome.html"),
//     active: true,
//     openerTabId: tab.id,
//   });
// });
