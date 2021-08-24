import type { IStorage } from "./types.ts";
import l10n from "./l10n.ts";
import { extension } from "./extension.ts";

function restoreOptions() {
  extension.storage.sync.get(
    { count: 0 } as IStorage,
    ({ count }: IStorage) => {
      console.log({ count });
    },
  );
}

document.addEventListener("DOMContentLoaded", restoreOptions);

l10n();
