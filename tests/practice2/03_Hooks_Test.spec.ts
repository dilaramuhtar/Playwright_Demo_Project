// import playwright module
import { test, expect } from "@playwright/test";

// write the test
test.beforeAll(async ()=>{
    console.log("this is running before all tests");
});

test.afterAll(async () => {
  console.log("this is running after all test");
});

test.beforeEach(async ({page}) => {
  await page.goto("https://awesomeqa.com/ui/");
});

test.afterEach(async () => {
  console.log("this is running after each test");
});

test("test 1", async ({ page }) => {
  // go to url
  // await page.goto("https://awesomeqa.com/ui/");

  // search with keywords iphone
  let searchBox = page.getByRole("textbox", { name: "Search" });
  await searchBox.fill("iPhone");

  let searchButton = page.locator("#search").getByRole("button");
  await searchButton.click();

  // validate the search title

  await expect(page).toHaveTitle("Search - iPhone");
});


test("Test 2", async ({ page }) => {
  // go to url
  // await page.goto("https://awesomeqa.com/ui/");

  // search with keywords iphone
  let searchBox = page.getByRole("textbox", { name: "Search" });
  await searchBox.fill("iPhone");

  let searchButton = page.locator("#search").getByRole("button");
  await searchButton.click();

  // validate the search title

  await expect(page).toHaveTitle("Search - iPhone");
});

