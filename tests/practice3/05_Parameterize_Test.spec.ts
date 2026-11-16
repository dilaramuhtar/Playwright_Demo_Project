import {test, expect} from '@playwright/test';

const searchKeywords = ['Canada','China','Turkey']

for(const eachKeyword of searchKeywords){

test(`patameterize test ${eachKeyword}`,async({page})=>{
  await page.goto("https://the-internet-5chk.onrender.com/autocomplete");

  // inputBox Locate

  let inputBox = page.locator("xpath=//input[@id = 'myCountry']");

  // ubmitButton locate

  let submitButton = page.locator("xpath=//input[@type= 'button']");

  await inputBox.fill(eachKeyword)
  await submitButton.click();
})
}