import{test,expect} from "@playwright/test";

test('Dwonload test 2',async({page})=>{

    await page.goto("https://the-internet-5chk.onrender.com/download");

  // locate the download file 
  
   const downloadFile = page.getByRole('link',{name:'Screenshot 2026-11-10 at 10.01.24 AM.png'});
    
   // create a event listener

   const downloadPromise = page.waitForEvent('download');

   // click download button and load the file

   await downloadFile.click();

   // get the file 

   const download = await downloadPromise;

});