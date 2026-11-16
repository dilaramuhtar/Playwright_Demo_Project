import {test,expect}from '@playwright/test';

test("Mock API response test",async({page})=>{

    //mock api request

   await page.route("*/**/api/v1/fruits",async route=>{

    const response = await route.fetch();
     const json = await response.json();

    json.push({ name: "Playwright", id: 12 });
    json.push({ name: "java", id: 12 });
    json.push({ name: "javaScript", id: 12 });
    json.push({ name: "TypeScript", id: 12 });
    
      await route.fulfill({response,json})

   }); 

   //go to the url

   await page.goto("https://demo.playwright.dev/api-mocking/");

await expect(page.getByText("Playwright", { exact: true })).toBeVisible();
await expect(page.getByText("TypeScript", { exact: true })).toBeVisible();
await expect(page.getByText("java", { exact: true })).toBeVisible();
await expect(page.getByText("javaScript", { exact: true })).toBeVisible();
})