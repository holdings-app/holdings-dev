declare global {
  interface Window {
    correlationId: string;
  }
}

import { extension } from "../extension.ts";

import { sync } from "../../../transaction-producer/src/producers/schwab/main.ts";

const isLoggedIn = () => document.querySelector(".logout");

let debugArea: null | HTMLTextAreaElement = null;
const addDebugInfo = (text: string) => {
  if (!debugArea) {
    const textarea = document.createElement("textarea");
    textarea.classList.add("holdingsDebugInfo");
    document.body.insertAdjacentElement("afterbegin", textarea);
    debugArea = textarea;
  }
  debugArea.value = text;
};

const addButton = () => {
  const button = document.createElement("button");
  button.classList.add("holdingsSync");
  button.textContent = "Sync to Holdings.dev";
  document.body.insertAdjacentElement("afterbegin", button);
  button.addEventListener("click", async () => {
    const fromDate = new Date("2021-01-01T00:00:00Z");
    const toDate = new Date();

    const result = await sync({
      fromDate,
      toDate,
      correlationId: window.correlationId,
    });

    const data = JSON.stringify(result, null, 2);

    addDebugInfo(data);
    extension.runtime.sendMessage("", {
      type: "notification",
      options: {
        title: "Just wanted to notify you",
        message: data,
        iconUrl: "/images/logo-512.png",
        type: "basic",
      },
    });
  });
};

const init = () => {
  const checkIfLoggedIn = () => {
    if (isLoggedIn()) {
      clearInterval(checkIfLoggedInInterval);
      addButton();
    }
  };
  const checkIfLoggedInInterval = setInterval(checkIfLoggedIn, 500);
};

init();
