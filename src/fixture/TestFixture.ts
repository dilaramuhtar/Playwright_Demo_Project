import { test as Base } from "@playwright/test";

export const test = Base.extend<{ saveLogs: void }>({
  saveLogs: [
    async ({}, use) => {
      await use();
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
