import{test,expect} from "@playwright/test";

//testData
const searchItem:string[]=['laptop','gift card','monitor','smartphone'];

//usting for of loop

 for( const eachItem of searchItem){

   test(`Search param test for ${eachItem}`, async ({ page }) => {
     //go to the url
     await page.goto("https://demowebshop.tricentis.com/");

     // locate the searchBox

     const searchBox = page.locator("xpath=//input[@id='small-searchterms']");
     // locate the searchButton

     const searchButton = page.locator("xpath=//input[@type='submit']");

     // fill keyword laptop

     await searchBox.fill(eachItem);
     await searchButton.click();
   }); 
 };

 // for each function
test.describe("Search feature test",async()=>{

 searchItem.forEach((eachItem)=>{

     test(`Search param test 2 for ${eachItem}`, async ({ page }) => {
     //go to the url
     await page.goto("https://demowebshop.tricentis.com/");

     // locate the searchBox

     const searchBox = page.locator("xpath=//input[@id='small-searchterms']");
     // locate the searchButton

     const searchButton = page.locator("xpath=//input[@type='submit']");

     // fill keyword laptop

     await searchBox.fill(eachItem);
     await searchButton.click();
    
    })
});
});
