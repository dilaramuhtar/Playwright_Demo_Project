import {test, expect} from '@playwright/test';

test ("Keyboard action test ",async({page})=>{
  // go to the url

  await page.goto("https://jqueryui.com/demos/");

// locate the search element

let searchBox = page.locator("xpath=//input[@name='s']");

// Enter keyboard action 
await searchBox.fill("draggable")
await searchBox.press('Enter');

//selecting and deleting from keyboar
await searchBox.click();
await page.keyboard.press('Delete');

});


