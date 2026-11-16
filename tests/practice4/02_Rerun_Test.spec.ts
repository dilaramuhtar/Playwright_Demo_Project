import {test, expect} from '@playwright/test';

test ("Multiple browser/tabs test in playwright ",async ({ page, browser }) => {
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

  //action with timeout
  await dateIframe.locator("xpath=//a[@data-date='9']").click();

  await expect(page).toHaveTitle("Datepicker | jQuery UI");

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  // go to the url
  await page2.goto("https://jqueryui.com/datepicker/");

  // locate the ifram
  let dateIframe2 = page2.frameLocator("xpath=//iframe[@class='demo-frame']");
  // locate the date box in the iframe
  let dateBox2 = dateIframe.locator("xpath= //input[@id='datepicker'] ");

  // fill up the date with hardcode
  // await dateBox.fill('12/15/2024');

  // fill up with the tomorrow's date
  await dateBox2.click();

  //action with timeout
//   await dateIframe2.locator("xpath=//a[@data-date='9']").click();

  await expect(page2).toHaveTitle("Datepicker | jQuery UI");

  // create a new tab

  const newTab = await context2.newPage ();
  await newTab.goto("https://jqueryui.com/");
  
});