// import playwright module
import { test, expect } from "@playwright/test";

// write the test

test("Record at cursor test", async ({ page }) => {
  // go to url
  await page.goto("https://awesomeqa.com/ui/");

  // search with keywords iphone
  let searchBox = page.getByRole("textbox", { name: "Search" });
  await searchBox.fill("iPhone");

  let searchButton = page.locator("#search").getByRole("button");
  await searchButton.click();

  // validate the search title

  await expect(page).toHaveTitle("Search - iPhone");
  await expect(page.getByRole('heading', { name: 'Search - iPhone' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Products meeting the search' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Search - iPhone');
  await expect(page.locator('h2')).toContainText('Products meeting the search criteria');
});


