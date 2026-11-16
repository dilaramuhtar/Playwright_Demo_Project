import {test, expect} from '@playwright/test';

test ("Dropdown list test ",async({page})=>{
  // go to the url

  await page.goto("https://the-internet-5chk.onrender.com/dropdown");

  // select option using value
  let yearDropdownList = page.locator("xpath= //select[@id ='year' ]");
  await yearDropdownList.selectOption("1991"); //-- pass the value of the option

  // select option with visible text
  let monthDropdownList = page.locator("xpath= //select[@id ='month' ]");
  await monthDropdownList.selectOption("September"); //-- pass the text of the option

  // get all the options
  let dayDrodownList = page.locator("xpath= //select[@id ='day' ]");
  await dayDrodownList.selectOption('15');

  let allDayOption = page.locator('#id>option');
  let allDayOptionText= await allDayOption.allTextContents();
  console.log (allDayOptionText);
});
