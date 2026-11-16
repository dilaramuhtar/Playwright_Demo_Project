import{test,expect} from "@playwright/test";

test ("Upload file test in playwright",async({page})=>{
    // go to the upload url
  await page.goto("https://the-internet-5chk.onrender.com/upload");

  // locate the choose file button
    const chooseFileButton = page.locator("xpath=//input[@id='file-upload']");

    await chooseFileButton.setInputFiles(
      "/Users/dilaramuhtar/Desktop/Screenshot 2026-11-10 at 10.01.24 AM.png",
    );

    // locate the upload button
    const uploadButton = page.locator("xpath=//input[@id='file-submit']");
    
    await uploadButton.click();




});