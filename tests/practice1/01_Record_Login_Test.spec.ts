import { test, expect } from '@playwright/test';


// test("Login with valid credentials", async ({ page }) => {
//   await page.goto("https://practicesoftwaretesting.com/");
//   await page.locator('[data-test="nav-sign-in"]').click();
//   await page.locator('[data-test="email"]').click();
//   await page.locator('[data-test="email"]').fill("abc@tester.com");
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill("Abctester@123");
//   await page.locator('[data-test="login-submit"]').click();
//   let myAccount = page.locator('xpath=//h1[@data-test="page-title"]');
//   await expect(myAccount).toHaveText("My account");
// }); 


// test('Login with invalid credentials', async ({ page }) => {
//   await page.goto('https://practicesoftwaretesting.com/');
//   await page.locator('[data-test="nav-home"]').click();
//   await expect(page.locator('[data-test="nav-sign-in"]')).toBeVisible();
//   await page.locator('[data-test="nav-sign-in"]').click();
//   await page.locator('[data-test="email"]').click();
//   await page.locator('[data-test="email"]').fill('dilara@gmail.com');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('1234567');
//   await page.locator('[data-test="login-submit"]').click();
//   await expect(page.locator('[data-test="login-error"]')).toContainText('Invalid email or password');
// });

 