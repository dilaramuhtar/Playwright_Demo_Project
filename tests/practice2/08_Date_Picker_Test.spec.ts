import {test, expect} from '@playwright/test';

test ("Seleting date value test ",async({page})=>{
  // go to the url

  await page.goto("https://jqueryui.com/datepicker/");

  // locate the ifram
  let dateIframe = page.frameLocator("xpath=//iframe[@class='demo-frame']");
   // locate the date box in the iframe
    let dateBox= dateIframe.locator("xpath= //input[@id='datepicker'] ");

    // fill up the date with hardcode
    // await dateBox.fill('12/15/2024');

    // fill up with the tomorrow's date
    await dateBox.click();
    await dateIframe.locator("xpath=//a[@data-date='9']").click();

});
