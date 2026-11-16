import {test,expect}from '@playwright/test';

test("Mock API test",async({page})=>{

    //mock api request

   await page.route("*/**/api/v1/fruits",async route=>{
    const json = [
      { name: "Playwright", id: 12 },
      { name: "typeScript", id: 13 },
      { name: "java", id: 14 },
      { name: "javaScript", id: 15 },
    ];
      await route.fulfill({json})

   }); 

   //go to the url

   await page.goto("https://demo.playwright.dev/api-mocking/");

await expect(page.getByText("Playwright", { exact: true })).toBeVisible();
await expect(page.getByText("typeScript", { exact: true })).toBeVisible();
await expect(page.getByText("java", { exact: true })).toBeVisible();
await expect(page.getByText("javaScript", { exact: true })).toBeVisible();
})