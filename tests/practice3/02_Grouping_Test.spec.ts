import {test, expect} from '@playwright/test';

test.describe("Smoke testing",()=>{
    
    test("Test annotation 1 ", async ({ page }) => {
  // go to the url

  await page.goto("https://jqueryui.com/datepicker/");

  // locate the ifram
  let dateIframe = page.frameLocator("xpath=//iframe[@class='demo-frame']");
  // locate the date box in the iframe
  let dateBox = dateIframe.locator("xpath= //input[@id='datepicker'] ");

  // fill up the date with hardcode
  // await dateBox.fill('12/15/2024');

  // fill up with the tomorrow's date
  await dateBox.click();
  await dateIframe.locator("xpath=//a[@data-date='9']").click();
});
});

test.describe("Regresstion testing", () => {
    test("Test annotation 2 ", async ({ page }) => {
      // go to the url

      await page.goto("https://jqueryui.com/datepicker/");

      // locate the ifram
      let dateIframe = page.frameLocator("xpath=//iframe[@class='demo-frame']");
      // locate the date box in the iframe
      let dateBox = dateIframe.locator("xpath= //input[@id='datepicker'] ");

      // fill up the date with hardcode
      // await dateBox.fill('12/15/2024');

      // fill up with the tomorrow's date
      await dateBox.click();
      await dateIframe.locator("xpath=//a[@data-date='9']").click();
    });

    test("Test annotation 3 ", async ({ page }) => {
      // go to the url

      await page.goto("https://jqueryui.com/datepicker/");

      // locate the ifram
      let dateIframe = page.frameLocator("xpath=//iframe[@class='demo-frame']");
      // locate the date box in the iframe
      let dateBox = dateIframe.locator("xpath= //input[@id='datepicker'] ");

      // fill up the date with hardcode
      // await dateBox.fill('12/15/2024');

      // fill up with the tomorrow's date
      await dateBox.click();
      await dateIframe.locator("xpath=//a[@data-date='9']").click();
    });
});


