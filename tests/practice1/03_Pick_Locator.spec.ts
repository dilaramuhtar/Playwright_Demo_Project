// import playwright module
import { test, expect } from "@playwright/test";

// write the test

test("Test with pick locator", async ({ page }) => {
  // go to url
  await page.goto("https://awesomeqa.com/ui/");

  // search with keywords iphone
  let searchBox = page.getByRole("textbox", { name: "Search" });
  await searchBox.fill("iPhone");

  let searchButton = page.locator("#search").getByRole("button");
  await searchButton.click();

  // validate the search title

  await expect(page).toHaveTitle("Search - iPhone");
});
