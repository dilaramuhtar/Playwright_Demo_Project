import {test, expect} from '@playwright/test';

test ("Timeout test in playwright ",async({page})=>{
  // go to the url
test.setTimeout(1 * 60 * 1000);
  await page.goto("https://jqueryui.com/datepicker/");

 

  // locate the ifram
  let dateIframe = page.frameLocator("xpath=//iframe[@class='demo-frame']");
   // locate the date box in the iframe
    let dateBox= dateIframe.locator("xpath= //input[@id='datepicker'] ");

    // fill up the date with hardcode
    // await dateBox.fill('12/15/2024');

    // fill up with the tomorrow's date
    await dateBox.click();

    //action with timeout
    await dateIframe.locator("xpath=//a[@data-date='9']").click({timeout:30000});

    

   

});