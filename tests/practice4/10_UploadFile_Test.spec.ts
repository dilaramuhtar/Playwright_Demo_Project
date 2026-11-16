import{test,expect, selectors} from '@playwright/test';

test('upload file test',async({page})=>{
  // go to the url
     await page.goto("https://the-internet-5chk.onrender.com/upload");

   // locate the choose file button

   const chooseFileButton=page.locator("xpath=//input[@id='file-upload']");
   await chooseFileButton.click();

const uploadFitlePath = ( "/Users/dilaramuhtar/Desktop/Screenshot 2026-11-10 at 10.01.24 AM.png");

// selece the seleced file

await chooseFileButton.setInputFiles(uploadFitlePath);

// locate the upload buttom and click


const upLoadButton = page.locator("xpath=//input[@id='file-submit']");
await upLoadButton.click();


});