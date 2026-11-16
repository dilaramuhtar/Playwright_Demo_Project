import {test, expect} from '@playwright/test';

test ("Assertion in the playwright ",async({page})=>{
  // go to the url

  await page.goto("https://jqueryui.com/datepicker/");

  // searchBox element

  let searchBox = page.locator("xpath=//input[@name='s']");

  // we will chech visible, editable, enabled and empty

  await expect(searchBox).toBeVisible();
  await expect(searchBox).toBeEditable();
  await expect(searchBox).toBeEnabled();
  await expect(searchBox).toBeEmpty();

  //verify the url, page title, text, count of elements
  await expect(page).toHaveURL("https://jqueryui.com/datepicker/");
  await expect(page).toHaveTitle("Datepicker | jQuery UI")
  await expect(page.locator("xpath=//h1[@class='entry-title']")).toHaveText(
    "Datepicker",
  );



    


    





});