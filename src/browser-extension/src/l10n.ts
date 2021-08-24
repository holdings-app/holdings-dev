import { extension } from "./extension.ts";

export default () => {
  document.querySelectorAll("[data-holdingsl10n]").forEach(
    (elem: Partial<HTMLElement>) => {
      if (elem.dataset) {
        elem.innerText = extension.i18n.getMessage(elem.dataset.holdingsl10n);
      }
    },
  );
};
