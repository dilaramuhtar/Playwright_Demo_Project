import {test,expect} from '@playwright/test';

// login feature happy path 

test ('login test with valid credential',async({page})=>{

    await test.step('navigate to the url',async()=>{

         await page.goto("https://awesomeqa.com/ui/");
    });
 // go to the login page with valid credential.
    await test.step("login with the valid credential", async () => {
     // locate the login element 
     let myAccount = page.getByTitle("My Account");
     await myAccount.click();
     let loginPage = page.getByText("Login");
     await loginPage.click();
     
     //locate the email, password elements and login.

      let emailInput = page.getByPlaceholder("E-Mail Address");
      await emailInput.fill("abc@tester.com");

      let passwordInput = page.locator("xpath=//input[@name='password']");
      await passwordInput.fill("Abctester@123");

      let loginButton = page.locator("xpath=//input[@value= 'Login']");
      await loginButton.click();

    });

   await test.step('Verify the My Account heading is visible', async () => {
    const myAccountHeading = page.locator("xpath=//h2[text()='My Account']");
    await expect(myAccountHeading).toBeVisible();   
   });
  

    
   });



