import{test, expect} from "@playwright/test";
test("Codegen test", async ({ page }) => {
  await page.goto("https://awesomeqa.com/ui");
  await page.getByRole("textbox", { name: "Search" }).click();
  await page.getByRole("textbox", { name: "Search" }).fill("iPhone");
  await page.locator("#search").getByRole("button").click();
  await page.getByRole("link", { name: "iPhone" }).first().click();
  await expect(page.getByRole("link", { name: "iPhone" }).nth(1)).toBeVisible();
});