import {test, expect} from '@playwright/test';

test("Capture Screen Shots", async ({ page }) => {
  // go to url
  await page.goto("https://awesomeqa.com/ui/");

  // element screenshot
   let imageIcon = page.getByAltText("TheTestingAcademy eCommerce");

   await imageIcon.screenshot({path:'./screenshots/ElementScreenshot.png'})


  // Page screenshot

  await page.screenshot({path:'./screenshots/PageScreenshot.png'})

  // full page screenshot

  await page.screenshot({ path: "./screenshots/FullPageScreenshot.png",fullPage: true });



});


